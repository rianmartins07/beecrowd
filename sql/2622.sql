select c.name from public.customers c
	where c.id in (select id_customers from public.legal_person)