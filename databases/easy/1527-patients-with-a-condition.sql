SELECT
    p.patient_id AS patient_id,
    p.patient_name AS patient_name,
    p.conditions AS conditions
FROM
    Patients AS p
WHERE
    p.conditions LIKE 'DIAB1%'
OR
    p.conditions LIKE '% DIAB1%';