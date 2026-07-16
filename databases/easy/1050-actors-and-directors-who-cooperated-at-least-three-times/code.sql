SELECT
    ad.actor_id AS actor_id,
    ad.director_id AS director_id
FROM
    ActorDirector AS ad
GROUP BY
    ad.actor_id,
    ad.director_id
HAVING
    COUNT(*) >= 3;