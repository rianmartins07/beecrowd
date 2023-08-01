select c.name, r.rentals_date from public.customers c, public.rentals r
	where r.rentals_date between '2016-09-01' and '2016-09-30'
	and c.id=r.id_customers;