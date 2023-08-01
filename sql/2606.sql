select p.id, p.name from public.products p, public.categories c 
	where c.name like 'super%' and c.id=p.id_categories;