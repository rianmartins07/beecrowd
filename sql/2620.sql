select c.name, o.id from public.customers c, public.orders o
	where o.orders_date between '2016-01-01' and '2016-06-30'
	and c.id=o.id_customers;