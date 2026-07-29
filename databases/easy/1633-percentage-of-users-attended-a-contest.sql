SELECT
    r.contest_id AS contest_id,
    ROUND(
        COUNT(*) * 100.0 /
        (SELECT COUNT(*) FROM Users),
        2
    ) AS percentage
FROM
    Register AS r
GROUP BY
    r.contest_id
ORDER BY
    percentage DESC,
    contest_id ASC;