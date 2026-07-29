SELECT
    u.user_id AS user_id,
    u.name AS name,
    u.mail AS mail
FROM
    Users AS u
WHERE
    u.mail ~ '^[A-Za-z][A-Za-z0-9_.-]*@leetcode\.com$';