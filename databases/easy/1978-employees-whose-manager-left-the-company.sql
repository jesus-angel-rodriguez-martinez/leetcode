SELECT
    e.employee_id AS employee_id
FROM
    Employees AS e
LEFT JOIN
    Employees AS m
ON
    e.manager_id = m.employee_id
WHERE
    m.employee_id IS NULL
AND
    e.manager_ID IS NOT NULL
AND
    e.salary < 30000
ORDER BY
    e.employee_id ASC;