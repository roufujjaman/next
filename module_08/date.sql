-- Active: 1747413784645@@127.0.0.1@5432@office@public
SELECT now();

CREATE TABLE timez (
    time_stamp TIMESTAMP WITHOUT TIME ZONE,
    time_stamp_wz TIMESTAMP WITH TIME ZONE
);

INSERT INTO
    timez
VALUES (
        '2024-05-05 10:45:00',
        '2024-05-05 12:45:00'
    );

SELECT * FROM timez;

SELECT CURRENT_DATE;

-- casting date from now()
SELECT now()::date;
SELECT now()::time;

SELECT to_char(now(), 'yyyy/mm/dd  hh:mm');
SELECT to_char(now(), 'month');
SELECT to_char(DATE '2000-12-12', 'month');

-- timestamp
SELECT timestamp with time zone '2024-05-05 12:00:00+-5' + INTERVAL('5 day');
SELECT DATE '2024-05-05 12:00:00+05' + INTERVAL '5 day';


-- calculate age
SELECT age(CURRENT_DATE, '1995-10-31');

SELECT first_name, age(now(), dob) as "Age" FROM students;

-- extract year from a data
SELECT EXTRACT(CENTURY FROM TIMESTAMP '2000-12-25 12:21:13');
-- day of the year
SELECT EXTRACT(DOY FROM DATE '2025-05-19');
