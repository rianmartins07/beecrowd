select prod.name, p.name, prod.price 
	from public.products prod, public.providers p, public.categories c
  where c.name='Super Luxury'
  	and prod.price>1000
	and prod.id_categories=c.id
	and prod.id_providers=p.id;