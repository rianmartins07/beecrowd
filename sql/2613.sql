select m.id, m.name from public.movies m, public.prices p
	where p.value<2 
	and p.id=m.id_prices;