SELECT
    q.query_name,
    ROUND(
        AVG(
            q.rating::numeric / q.position::numeric
        ),
    2) AS quality,
    ROUND(
        COUNT(
            CASE WHEN q.rating < 3 THEN 1 END
        ) *
        100.0 / COUNT(*),
    2) AS poor_query_percentage
FROM Queries q
GROUP BY q.query_name;