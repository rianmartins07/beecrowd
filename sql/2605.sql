select b.name, a.name from public.providers a, public.products b where b.id_categories=6 and a.id=b.id_providers;