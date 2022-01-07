--
-- API functions to be invoked by the frontend.
--

-- Gets the latest unconfirmed user asset, creating one if required.
create or replace function public.get_or_create_user_asset()
returns table (
  id uuid,
  created_at timestamptz,
  updated_at timestamptz,
  completed bool,
  background_id uuid,
  face_id uuid,
  hat_id uuid,
  hands_id uuid,
  body_id uuid,
  pet_id uuid,
  user_id uuid
)
language plpgsql
volatile
security definer
set search_path = public
as $$
  declare
    _user_id uuid;
    asset_record record;
  begin
    if auth.role() is null then
      raise exception 'Function invoker must have a role.';
    end if;

    select * into _user_id from auth.uid();
    if _user_id is null then
      raise exception 'No active user.';
    end if;

    select * into asset_record from assets
      where assets.user_id = _user_id
      and assets.completed = false
      order by assets.updated_at desc;

    if not found then
      insert into assets (user_id) values (_user_id) returning * into asset_record;
    end if;

    return query select
      asset_record.id,
      asset_record.created_at,
      asset_record.updated_at,
      asset_record.completed,
      asset_record.background_id,
      asset_record.face_id,
      asset_record.hat_id,
      asset_record.hands_id,
      asset_record.body_id,
      asset_record.pet_id,
      asset_record.user_id;
  end;
$$;

-- Roll a new random component for the user's unconfirmed asset.
create or replace function public.roll_random_component(component_type text)
returns table (
  id uuid,
  created_at timestamptz,
  updated_at timestamptz,
  type varchar(20),
  name varchar(50),
  rarity float8,
  asset_id uuid
)
language plpgsql
volatile
security definer
set search_path = public
as $$
  declare
    user_record record;
    asset_record record;
    component_record record;
  begin
    if auth.role() is null then
      raise exception 'Function invoker must have a role.';
    end if;

    select * into user_record from users where users.id = auth.uid();
    if not found then
      raise exception 'No active user.';
    end if;

    if user_record.money < 5 then
      raise exception 'User does not have enough money.';
    end if;

    if component_type <> all(array['background', 'face', 'hat', 'hands', 'body', 'pet']) then
      raise exception 'Invalid component type: %.', component_type;
    end if;

    -- Subtract money from account to roll for dice.
    update users
      set money = money - 5
      where users.id = user_record.id;
    select * into asset_record from get_or_create_user_asset();
    if not found then
      raise exception 'Unable to create new asset';
    end if;

    -- Reset previously set components.
    if component_type = 'background' and asset_record.background_id is not null then
      update components set asset_id = null where components.id = asset_record.background_id;
    end if;
    if component_type = 'face' and asset_record.face_id is not null then
      update components set asset_id = null where components.id = asset_record.face_id;
    end if;
    if component_type = 'hat' and asset_record.hat_id is not null then
      update components set asset_id = null where components.id = asset_record.hat_id;
    end if;
    if component_type = 'hands' and asset_record.hands_id is not null then
      update components set asset_id = null where components.id = asset_record.hands_id;
    end if;
    if component_type = 'body' and asset_record.body_id is not null then
      update components set asset_id = null where components.id = asset_record.body_id;
    end if;
    if component_type = 'pet' and asset_record.pet_id is not null then
      update components set asset_id = null where components.id = asset_record.pet_id;
    end if;

    -- TODO: optimize?
    select * into component_record
    from components
    where components.type = component_type
    and components.asset_id is null
    order by random() limit 1;

    if not found then
      raise exception 'No more % components available', component_type;
    end if;

    update components
    set asset_id = asset_record.id
    where components.id = component_record.id
    returning * into component_record;

    -- Update asset.
    if component_type = 'background' then
      update assets set background_id = component_record.id where assets.id = asset_record.id;
    end if;
    if component_type = 'face' then
      update assets set face_id = component_record.id where assets.id = asset_record.id;
    end if;
    if component_type = 'hat' then
      update assets set hat_id = component_record.id where assets.id = asset_record.id;
    end if;
    if component_type = 'hands' then
      update assets set hands_id = component_record.id where assets.id = asset_record.id;
    end if;
    if component_type = 'body' then
      update assets set body_id = component_record.id where assets.id = asset_record.id;
    end if;
    if component_type = 'pet' then
      update assets set pet_id = component_record.id where assets.id = asset_record.id;
    end if;

    return query select
      component_record.id,
      component_record.created_at,
      component_record.updated_at,
      component_record.type,
      component_record.name,
      component_record.rarity,
      component_record.asset_id;
  end;
$$;

create or replace function public.confirm_user_asset(asset_id uuid)
returns table (
  id uuid,
  created_at timestamptz,
  updated_at timestamptz,
  completed bool,
  background_id uuid,
  face_id uuid,
  hat_id uuid,
  hands_id uuid,
  body_id uuid,
  pet_id uuid,
  user_id uuid
)
language plpgsql
volatile
security definer
set search_path = public
as $$
  declare
    _user_id uuid;
    asset_record record;
  begin
    if auth.role() is null then
      raise exception 'Function invoker must have a role.';
    end if;

    select * into _user_id from auth.uid();
    if not found then
      raise exception 'No active user.';
    end if;

    select * from get_or_create_user_asset() into asset_record;
    if not found then
      raise exception 'Unable to create new asset.';
    end if;
    if asset_record.id <> asset_id then
      raise exception 'Unable to find asset.';
    end if;

    update assets
      set completed = true
      where assets.id = asset_id
      returning * into asset_record;

    return query select
      asset_record.id,
      asset_record.created_at,
      asset_record.updated_at,
      asset_record.completed,
      asset_record.background_id,
      asset_record.face_id,
      asset_record.hat_id,
      asset_record.hands_id,
      asset_record.body_id,
      asset_record.pet_id,
      asset_record.user_id;
  end;
$$;
