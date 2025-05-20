CREATE TABLE "employee" (
    "id" SERIAL,
    "name" VARCHAR(50),
    "department_id" INTEGER,
    "salary" DECIMAL(10, 2),
    "hire_date" DATE,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("department_id") REFERENCES "department" ("id")
);

CREATE TABLE "department" (
    "id" SERIAL,
    "name" VARCHAR(50),
    PRIMARY KEY ("id")
);

INSERT INTO "department" ("name") VALUES 
    ('HR'), 
    ('Marketing'), 
    ('Finance'), 
    ('IT'), 
    ('Sales'), 
    ('Engineering'), 
    ('Customer Support'), 
    ('Administration'), 
    ('Research'), 
    ('Quality Assurance');

INSERT INTO "employee" ("name", "department_id", "salary", "hire_date") VALUES 
    ('John Doe', 1, 60000.00, '2022-01-10'),
    ('Jane Smith', 2, 75000.50, '2021-05-22'),
    ('Bob Johnson', 3, 80000.75, '2020-11-15'),
    ('Alice Williams', 4, 90000.25, '2019-08-03'),
    ('David Lee', 5, 65000.50, '2020-03-18'),
    ('Sara Brown', 6, 70000.00, '2021-09-28'),
    ('Mike Miller', 7, 55000.75, '2022-02-05'),
    ('Emily Davis', 8, 95000.00, '2018-12-12'),
    ('Chris Wilson', 9, 72000.50, '2020-06-30'),
    ('Amy White', 10, 68000.25, '2021-11-09'),
    ('John Johnson', 1, 62000.00, '2022-01-15'),
    ('Jessica Thompson', 2, 78000.50, '2021-06-05'),
    ('Michael Harris', 3, 85000.75, '2020-11-25'),
    ('Emma Martinez', 4, 92000.25, '2019-09-15'),
    ('James Taylor', 5, 67000.50, '2020-04-08'),
    ('Sophia Anderson', 6, 72000.00, '2021-10-10'),
    ('William Jackson', 7, 56000.75, '2022-02-10'),
    ('Olivia Nelson', 8, 97000.00, '2018-12-20'),
    ('Daniel White', 9, 73000.50, '2020-07-05'),
    ('Ava Wilson', 10, 69000.25, '2021-11-15'),
    ('Matthew Brown', 1, 63000.00, '2022-01-20'),
    ('Emily Garcia', 2, 76000.50, '2021-06-15'),
    ('Christopher Allen', 3, 86000.75, '2020-12-05'),
    ('Madison Hall', 4, 93000.25, '2019-09-25'),
    ('Andrew Cook', 5, 68000.50, '2020-04-18'),
    ('Abigail Torres', 6, 73000.00, '2021-10-20'),
    ('Ethan Murphy', 7, 57000.75, '2022-02-15'),
    ('Ella King', 8, 98000.00, '2018-12-28'),
    ('Nathan Rivera', 9, 74000.50, '2020-07-15'),
    ('Mia Roberts', 10, 70000.25, '2021-11-20');


-- inner join to retrieve employee name and department
SELECT "employee"."name", "department"."name" FROM "employee"
INNER JOIN "department" ON "employee"."department_id" = "department"."id";

-- find average salary by department
SELECT "department"."name", ROUND(AVG("employee"."salary")) FROM "employee"
JOIN "department" ON "employee"."department_id" = "department"."id"
GROUP BY "department"."name"

-- Cound employee each department
SELECT "department"."name", COUNT(*) FROM "employee"
JOIN "department" ON "employee"."department_id" = "department"."id"
GROUP BY "department"."name";

-- find the department name with the highest average salary
SELECT "department"."name", ROUND(AVG("employee"."salary")) AS "max avg salary" FROM "employee"
JOIN "department" ON "employee"."department_id" = "department"."id"
GROUP BY "department"."name"
ORDER BY "max avg salary" DESC
LIMIT 1;

-- count employees hired each year

SELECT extract(YEAR FROM "hire_date") AS "hire year", COUNT(*) FROM "employee"
GROUP BY "hire year";

CREATE TABLE "order" (
    "id" SERIAL,
    "customer_id" INTEGER,
    "order_date" DATE,
    "total_amount" DECIMAL (10, 2)
);

-- Inserting sample data into the orders table
INSERT INTO "order" ("customer_id", "order_date", "total_amount") VALUES 
    (1, '2022-01-05', 100.50),
    (2, '2022-01-07', 200.75),
    (1, '2022-01-08', 150.25),
    (3, '2022-01-10', 300.00),
    (2, '2022-01-15', 180.50),
    (3, '2022-01-20', 220.25),
    (1, '2022-01-25', 90.00),
    (2, '2022-01-28', 120.75),
    (3, '2022-02-01', 250.50),
    (1, '2022-02-05', 180.25),
    (4, '2023-01-01', 999.25);
​

-- sum of users spending who places at least 2 orders 
SELECT "customer_id", SUM("total_amount") FROM "order"
GROUP BY "customer_id"
HAVING COUNT("customer_id") >= 2;

-- total amount of orders places each month in 2022
SELECT extract(MONTH FROM "order_date") AS "month", SUM("total_amount") FROM "order"
WHERE extract(YEAR FROM "order"."order_date") = 2022
GROUP BY "month";
