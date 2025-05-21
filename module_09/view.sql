SELECT * FROM "employee";

-- creating view
CREATE VIEW avg_salary_bydepartment AS
SELECT "department"."name", ROUND(AVG("employee"."salary")) FROM "employee"
JOIN "department" ON "employee"."department_id" = "department"."id"
GROUP BY "department"."name";

-- query view
SELECT * FROM avg_salary_bydepartment;


-- function
CREATE Function emp_count()
RETURNS INTEGER
LANGUAGE SQL
AS
$$
    SELECT COUNT(*) FROM "employee";
$$

SELECT emp_count();

CREATE FUNCTION del_emp_byid(p_emp_id INTEGER)
RETURNS void
LANGUAGE SQL
AS
$$
    DELETE FROM "employee" WHERE "id" = p_emp_id;
$$

SELECT del_emp_byid(30);
