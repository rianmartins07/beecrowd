select c.id, c.name from public.customers c
	where c.id not in (select id_customers from public.locations); 

