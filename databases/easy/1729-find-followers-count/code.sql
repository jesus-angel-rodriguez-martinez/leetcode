SELECT
    f.user_id,
    COUNT(*) AS followers_count
FROM
    Followers AS f
GROUP BY
    f.user_id
ORDER BY
    f.user_id ASC;