--
-- Create initial tables.
--

create extension if not exists moddatetime schema extensions;

create table public.assets (
  id uuid not null default gen_random_uuid() primary key,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed bool not null default false
);
create trigger assets_updated_at_trg before update on public.assets
  for each row execute procedure moddatetime (updated_at);

create table public.components (
  id uuid not null default gen_random_uuid() primary key,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  type varchar(20) not null,
  name varchar(50) not null,
  rarity float8 not null,
  asset_id uuid references public.assets(id) on delete set null,
  constraint componet_type_check check (type = any(array['background', 'face', 'hat', 'hands', 'body', 'pet']))
);
create trigger components_updated_at_trg before update on public.components
  for each row execute procedure moddatetime (updated_at);

create table public.users (
  id uuid not null references auth.users(id) on delete cascade primary key,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name varchar(200) not null default '',
  money int8 not null default 100
);
create trigger users_updated_at_trg before update on public.users
  for each row execute procedure moddatetime (updated_at);

-- TODO: add trigger to check?
alter table public.assets
  add column background_id uuid references public.components(id) on delete set null,
  add column face_id uuid references public.components(id) on delete set null,
  add column hat_id uuid references public.components(id) on delete set null,
  add column hands_id uuid references public.components(id) on delete set null,
  add column body_id uuid references public.components(id) on delete set null,
  add column pet_id uuid references public.components(id) on delete set null,
  add column user_id uuid references public.users(id) on delete cascade;
