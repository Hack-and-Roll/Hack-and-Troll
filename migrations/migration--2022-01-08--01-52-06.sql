-- Background
insert into public.components (type, name, rarity)
  select
    'background' as type,
    'plain' as name,
    0.6 as rarity
  from generate_series(1, 3000);
  
insert into public.components (type, name, rarity)
  select
    'background' as type,
    'cloud' as name,
    0.2 as rarity
  from generate_series(1, 1000);

insert into public.components (type, name, rarity)
  select
    'background' as type,
    'forest' as name,
    0.15 as rarity
  from generate_series(1, 750);

insert into public.components (type, name, rarity)
  select
    'background' as type,
    'space' as name,
    0.05 as rarity
  from generate_series(1, 250);

-- Face
insert into public.components (type, name, rarity)
  select
    'face' as type,
    'dude' as name,
    0.05 as rarity
  from generate_series(1, 250);

insert into public.components (type, name, rarity)
  select
    'face' as type,
    'tude' as name,
    0.15 as rarity
  from generate_series(1, 750);

insert into public.components (type, name, rarity)
  select
    'face' as type,
    'aude' as name,
    0.2 as rarity
  from generate_series(1, 1000);

insert into public.components (type, name, rarity)
  select
    'face' as type,
    'bude' as name,
    0.5 as rarity
  from generate_series(1, 2500);

insert into public.components (type, name, rarity)
  select
    'face' as type,
    'cude' as name,
    0.1 as rarity
  from generate_series(1, 500);

-- Hat
insert into public.components (type, name, rarity)
  select
    'hat' as type,
    'halo' as name,
    0.05 as rarity
  from generate_series(1, 250);

insert into public.components (type, name, rarity)
  select
    'hat' as type,
    'cap' as name,
    0.15 as rarity
  from generate_series(1, 750);

insert into public.components (type, name, rarity)
  select
    'hat' as type,
    'tap' as name,
    0.2 as rarity
  from generate_series(1, 1000);

insert into public.components (type, name, rarity)
  select
    'hat' as type,
    'pap' as name,
    0.5 as rarity
  from generate_series(1, 2500);

insert into public.components (type, name, rarity)
  select
    'hat' as type,
    'jap' as name,
    0.1 as rarity
  from generate_series(1, 500);

-- Hands
insert into public.components (type, name, rarity)
  select
    'hands' as type,
    'normal' as name,
    0.5 as rarity
  from generate_series(1, 2500);

insert into public.components (type, name, rarity)
  select
    'hands' as type,
    'robot' as name,
    0.3 as rarity
  from generate_series(1, 1500);

insert into public.components (type, name, rarity)
  select
    'hands' as type,
    'armless' as name,
    0.2 as rarity
  from generate_series(1, 1000);

-- Body
insert into public.components (type, name, rarity)
  select
    'body' as type,
    'normal' as name,
    0.7 as rarity
  from generate_series(1, 3500);

insert into public.components (type, name, rarity)
  select
    'body' as type,
    'beach' as name,
    0.3 as rarity
  from generate_series(1, 1500);

-- Pet
insert into public.components (type, name, rarity)
  select
    'pet' as type,
    'bat' as name,
    0.4 as rarity
  from generate_series(1, 2000);

insert into public.components (type, name, rarity)
  select
    'pet' as type,
    'dog' as name,
    0.2 as rarity
  from generate_series(1, 1000);

insert into public.components (type, name, rarity)
  select
    'pet' as type,
    'yat' as name,
    0.15 as rarity
  from generate_series(1, 750);

insert into public.components (type, name, rarity)
  select
    'pet' as type,
    'dat' as name,
    0.15 as rarity
  from generate_series(1, 750);

insert into public.components (type, name, rarity)
  select
    'pet' as type,
    'aat' as name,
    0.05 as rarity
  from generate_series(1, 250);

insert into public.components (type, name, rarity)
  select
    'pet' as type,
    'pat' as name,
    0.05 as rarity
  from generate_series(1, 250);
