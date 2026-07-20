SELECT
    u.user_id AS user_id,
    u.email AS email
FROM
    Users AS u
WHERE
    u.email ~ '^[A-Za-z0-9_]+@[A-Za-z]+\.com$'
ORDER BY
    u.user_id ASC;