SELECT
    p.user_id AS user_id,
    COUNT(*) AS prompt_count,
    ROUND(AVG(p.tokens), 2) AS avg_tokens
FROM
    prompts AS p
GROUP BY
    p.user_id
HAVING
    COUNT(*) >= 3
AND
    MAX(p.tokens) > AVG(p.tokens)
ORDER BY
    avg_tokens DESC,
    p.user_id ASC;