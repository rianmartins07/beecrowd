select prod.name, p.name, c.name from public.products prod, public.providers p, public.categories c
	where c.name='Imported' 
	and p.name='Sansul SA'
	and prod.id_providers=p.id 
	and prod.id_categories=c.id;