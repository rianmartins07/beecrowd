select m.id, m."name" from public.movies m, public.genres g
	where g.description = 'Action' 
	and m.id_genres=g.id