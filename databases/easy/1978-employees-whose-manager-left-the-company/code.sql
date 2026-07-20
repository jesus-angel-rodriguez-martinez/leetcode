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
    E.SALARY < 30000;