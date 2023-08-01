select c.name, sum(p.amount) from public.categories c, public.products p
	where c.id=p.id_categories
	group by c.name;
