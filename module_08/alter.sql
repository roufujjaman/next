SELECT * FROM person;

-- add a new column
ALTER TABLE person
    ADD COLUMN email VARCHAR(25) DEFAULT 'default@example.com' NOT NULL;

-- insert new row
INSERT INTO person (user_name, age) VALUES ('user255', 55);

-- insert new row
INSERT INTO person (user_name, age, email) VALUES ('user254', 54, 'user254@email.com');

-- change username data type
ALTER TABLE person
    ALTER COLUMN user_name TYPE VARCHAR(50);

-- set new constraint to a column
ALTER TABLE person
    ALTER COLUMN age SET NOT NULL;

-- drop the recently created constraint to age column
ALTER TABLE person
    ALTER COLUMN age DROP NOT NULL;

-- another method to alter a table
ALTER TABLE person
    ADD CONSTRAINT unique_person_age UNIQUE(age);

ALTER TABLE person
    DROP CONSTRAINT unique_person_age;