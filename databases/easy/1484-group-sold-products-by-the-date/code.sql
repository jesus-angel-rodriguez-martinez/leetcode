SELECT
    a.sell_date AS sell_date,
    COUNT(DISTINCT a.product) AS num_sold,
    STRING_AGG(
        DISTINCT a.product,
        ','
        ORDER BY a.product ASC
    ) AS products
FROM
    Activities AS a
GROUP BY
    a.sell_date
ORDER BY
    a.sell_date ASC;