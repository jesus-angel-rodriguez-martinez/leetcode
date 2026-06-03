SELECT
    w.id AS id
FROM
    Weather AS w
INNER JOIN
    Weather AS ww
ON
    w.recordDate = ww.recordDate + INTERVAL '1 day'
WHERE
    w.temperature > ww.temperature;