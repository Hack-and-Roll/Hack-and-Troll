--
-- Setup triggers.
--

create or replace function public.insert_public_users_after_auth_users_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
  begin
    insert into public.users (id, name)
    values (
      NEW.id,
      coalesce(NEW.raw_user_meta_data->>'full_name', 'Unknown')
    );

    return NEW;
  end
$$;

create trigger "insert_public_users_after_auth_users_insert_trg"
after insert
on auth.users
for each row
execute procedure public.insert_public_users_after_auth_users_insert();
