SELECT * FROM students;


SELECT country, COUNT(country) FROM students
GROUP BY country;


SELECT country, ROUND(AVG(age)) AS "average age" FROM students
GROUP BY country
HAVING AVG(age) >= 20;

SELECT extract(YEAR FROM dob) AS birth_year, COUNT(*)::INTEGER FROM students
GROUP BY extract(YEAR FROM dob);