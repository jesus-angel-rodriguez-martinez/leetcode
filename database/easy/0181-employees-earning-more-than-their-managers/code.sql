SELECT
    e.name AS Employee
FROM
    Employee as e
JOIN
    Employee AS m
ON
    e.managerId = m.id
WHERE
    e.salary > m.salary;