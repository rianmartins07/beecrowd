select prod.name from public.products prod, public.providers p
	where prod.amount between 10 and 20
	and p.name like 'P%'
	and p.id=prod.id_providers;