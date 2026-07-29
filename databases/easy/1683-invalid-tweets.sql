SELECT
    t.tweet_id AS tweet_id
FROM
    Tweets AS t
WHERE
    LENGTH(t.content) > 15;