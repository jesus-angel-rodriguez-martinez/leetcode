SELECT
    lb.book_id,
    lb.title,
    lb.author,
    lb.genre,
    lb.publication_year,
    COUNT(
        CASE 
            WHEN
                br.return_date IS NULL THEN 1
                ELSE NULL
        END
    ) AS current_borrowers
FROM
    library_books AS lb
LEFT JOIN
    borrowing_records AS br
ON
    lb.book_id = br.book_id
GROUP BY
    lb.book_id,
    lb.title,
    lb.author,
    lb.genre,
    lb.publication_year,
    lb.total_copies,
    br.book_id
HAVING
    lb.total_copies - COUNT(
        CASE 
            WHEN
                br.return_date IS NULL THEN 1
                ELSE NULL
        END
    ) = 0
ORDER BY
    current_borrowers DESC,
    lb.title ASC;