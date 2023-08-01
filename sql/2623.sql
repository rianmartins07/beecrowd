select p.name, c.name from public.products p, public.categories c
where p.amount > 100
and c.id in (1,2,3,6,9)
and p.id_categories=c.id
order by c.id asc;