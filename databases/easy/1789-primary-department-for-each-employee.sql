SELECT
    e.employee_id AS employee_id,
    e.department_id AS department_id
FROM
    Employee AS e
GROUP BY
    e.employee_id
HAVING
    COUNT(*) = 1
UNION
SELECT
    e.employee_id AS employee_id,
    e.department_id AS department_id
FROM
    Employee AS e
WHERE
    e.primary_flag = 'Y';