SELECT
    d.date_id AS date_id,
    d.make_name AS make_name,
    COUNT(DISTINCT d.lead_id) AS unique_leads,
    COUNT(DISTINCT d.partner_id) AS unique_partners
FROM
    DailySales AS d
GROUP BY
    d.date_id,
    d.make_name;