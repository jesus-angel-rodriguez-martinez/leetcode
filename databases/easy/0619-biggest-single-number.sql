SELECT
    MAX(sq.num) AS num
FROM (
    SELECT
        mn.num AS num
    FROM
        MyNumbers AS mn
    GROUP BY
        mn.num
    HAVING
        COUNT(mn.*) = 1
)   AS sq;