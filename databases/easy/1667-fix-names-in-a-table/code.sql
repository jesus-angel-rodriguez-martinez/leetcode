SELECT
    u.user_id,
    UPPER(LEFT(u.name, 1)) || LOWER(SUBSTRING(u.name FROM 2)) AS name
FROM
    Users AS u
ORDER BY
    u.user_id ASC;