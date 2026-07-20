SELECT
    p.product_id AS product_id,
    p.product_name AS product_name,
    p.description AS description
FROM
    products AS p
WHERE
    p.description ~ '(^|[^A-Za-z0-9])SN[0-9]{4}-[0-9]{4}([^A-Za-z0-9]|$)'
ORDER BY
    p.product_id ASC;