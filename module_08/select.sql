CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT,
    grade CHAR(2),
    course VARCHAR(30),
    email VARCHAR(100),
    dob DATE,
    bloog_group VARCHAR(5),
    country VARCHAR(50)
);

INSERT INTO
    students (
        first_name,
        last_name,
        age,
        grade,
        course,
        email,
        dob,
        bloog_group,
        country
    )
VALUES (
        'Alice',
        'Johnson',
        20,
        'A',
        'Biology',
        'alice.johnson@example.com',
        '2004-02-15',
        'O+',
        'USA'
    ),
    (
        'Brian',
        'Smith',
        21,
        'B',
        'Mathematics',
        'brian.smith@example.com',
        '2003-07-11',
        'A-',
        'Canada'
    ),
    (
        'Carla',
        'Lopez',
        19,
        'A',
        'Chemistry',
        'carla.lopez@example.com',
        '2005-03-22',
        'B+',
        'Mexico'
    ),
    (
        'David',
        'Brown',
        22,
        'C',
        'History',
        'david.brown@example.com',
        '2002-11-10',
        'AB+',
        'UK'
    ),
    (
        'Eva',
        'Davis',
        20,
        'B',
        'Physics',
        'eva.davis@example.com',
        '2004-01-05',
        'O-',
        'Australia'
    ),
    (
        'Farhan',
        'Khan',
        23,
        'D',
        'Computer Science',
        'farhan.khan@example.com',
        '2001-09-18',
        'A+',
        'India'
    ),
    (
        'Grace',
        'Lee',
        21,
        'B',
        'Economics',
        'grace.lee@example.com',
        '2003-05-20',
        'B-',
        'South Korea'
    ),
    (
        'Hassan',
        'Ali',
        22,
        'A',
        'Engineering',
        'hassan.ali@example.com',
        '2002-04-07',
        'O+',
        'Pakistan'
    ),
    (
        'Isabella',
        'Garcia',
        19,
        'C',
        'Philosophy',
        'isabella.garcia@example.com',
        '2005-12-30',
        'A-',
        'Spain'
    ),
    (
        'James',
        'Taylor',
        20,
        'B',
        'Sociology',
        'james.taylor@example.com',
        '2004-06-25',
        'B+',
        'USA'
    ),
    (
        'Kira',
        'Nguyen',
        21,
        'A',
        'Statistics',
        'kira.nguyen@example.com',
        '2003-08-12',
        'AB-',
        'Vietnam'
    ),
    (
        'Leo',
        'Martinez',
        20,
        'D',
        'Art',
        'leo.martinez@example.com',
        '2004-02-09',
        'O+',
        'Argentina'
    ),
    (
        'Maria',
        'Silva',
        19,
        'A',
        'Political Science',
        'maria.silva@example.com',
        '2005-10-14',
        'A+',
        'Brazil'
    ),
    (
        'Nathan',
        'Moore',
        22,
        'B',
        'Geography',
        'nathan.moore@example.com',
        '2002-03-19',
        'B-',
        'New Zealand'
    ),
    (
        'Olivia',
        'Wilson',
        20,
        'A',
        'Psychology',
        'olivia.wilson@example.com',
        '2004-07-01',
        'O-',
        'UK'
    );

SELECT id, first_name, age FROM students;

SELECT id, first_name, age FROM students ORDER BY age DESC;

SELECT DISTINCT country FROM students ORDER BY country ASC;

SELECT DISTINCT bloog_group FROM students;

SELECT * FROM students WHERE country = 'USA';

SELECT * FROM students WHERE country = 'USA' AND bloog_group = 'B+';

SELECT * FROM students WHERE country = 'USA' OR country = 'UK';

SELECT * FROM students WHERE age < 20;

-- functions
SELECT upper(first_name) FROM students;

SELECT concat(first_name, ' ', last_name) FROM students;

SELECT max(length(first_name)) FROM students;

-- logical negation using NOT
SELECT * FROM students WHERE NOT country = 'USA';

SELECT * FROM students WHERE email LIKE '%khan%';

SELECT * FROM students WHERE email IS NULL;

UPDATE students SET email = NULL WHERE id = 3;

SELECT COALESCE(NULL, 'test');

SELECT coalesce(email, 'not provided') FROM students;

SELECT * FROM students WHERE country NOT IN ('USA', 'UK', 'Canada');

SELECT * FROM students WHERE dob BETWEEN '2004-01-01' AND '2025-12-30';

SELECT first_name, last_name FROM students
WHERE last_name LIKE '%son';

SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%is%';

SELECT * FROM students
LIMIT 5
OFFSET 5;