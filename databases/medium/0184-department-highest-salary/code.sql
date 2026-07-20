WITH Ranks AS (
    SELECT
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary,
        DENSE_RANK() OVER (
            PARTITION BY d.id
            ORDER BY e.salary DESC
        ) AS Rank
    FROM
        Employee AS e
    INNER JOIN
        Department AS d
    ON
        e.departmentId = d.id
)
SELECT
    r.Department AS Department,
    r.Employee AS Employee,
    r.Salary AS Salary
FROM
    Ranks AS r
WHERE
    r.Rank = 1;