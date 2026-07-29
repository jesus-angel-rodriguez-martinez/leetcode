DELETE FROM
    Person AS p
WHERE
    p.id NOT IN (
        SELECT
            MIN(pp.id)
        FROM
            Person AS pp
        GROUP BY
            pp.email
    );