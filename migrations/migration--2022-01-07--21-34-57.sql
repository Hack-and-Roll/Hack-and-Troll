--
-- Sets up RLS policies.
--

-- Gets all assets for a user.
create or replace function public.get_assets_for_user()
returns setof uuid
language sql 
stable
security definer
rows 10
set search_path = public
as $$
  select id from assets where user_id = auth.uid()
$$;

alter table public.users enable row level security;
create policy "Users can only CRUD themselves" on public.users for all using (
  id = auth.uid()
);

alter table public.components enable row level security;
create policy "Users can only view their components" on public.components for select using (
  asset_id in (select public.get_assets_for_user())
);

alter table public.assets enable row level security;
create policy "Users can only view their assets" on public.assets for select using (
  id in (select public.get_assets_for_user())
);
