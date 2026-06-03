WITH sales_from_red AS (
    SELECT
        o.sales_id
    FROM
        Orders AS o
    INNER JOIN
        Company AS c
    ON
        o.com_id = c.com_id
    WHERE
        c.name = 'RED'
)
SELECT
    s.name
FROM
    SalesPerson AS s
WHERE
    s.sales_id NOT IN (
        SELECT
            sfr.sales_id
        FROM
            sales_from_red AS sfr
    );