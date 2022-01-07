-- Background
insert into public.components (type, name, rarity)
  select
    'background' as type,
    'Background ' || i as name,
    0.1 as rarity
  from generate_series(1, 100) as i;

-- Face
insert into public.components (type, name, rarity)
  select
    'face' as type,
    'Face ' || i as name,
    0.1 as rarity
  from generate_series(1, 100) as i;

-- Hat
insert into public.components (type, name, rarity)
  select
    'hat' as type,
    'Hat ' || i as name,
    0.1 as rarity
  from generate_series(1, 100) as i;

-- Hands
insert into public.components (type, name, rarity)
  select
    'hands' as type,
    'Hands ' || i as name,
    0.1 as rarity
  from generate_series(1, 100) as i;
