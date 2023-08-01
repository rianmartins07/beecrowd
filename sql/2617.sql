select prod.name, p.name from public.products prod, public.providers p
	where p.name='Ajax SA' 
	and p.id = prod.id_providers;