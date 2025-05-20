-- user table
CREATE TABLE "user" (
    "id" SERIAL,
    "username" VARCHAR(25) NOT NULL,
    PRIMARY KEY ("id")
);

-- post table
CREATE TABLE "post" (
    "id" SERIAL,
    "user_id" INTEGER,
    "title" TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE
);

-- inserting values to user
INSERT INTO "user" (username) VALUES 
('Malan'), -- 1
('David'), -- 2
('Juliette'), -- 3
('Lucy'), -- 4
('Phil'); -- 5



SELECT * FROM "user";
SELECT * FROM "post";

-- inserting to post
INSERT INTO "post" ("user_id", "title") VALUES 
(1, 'This is my first post'),
(1, 'This is CS50'),
(5, 'This is Phil')


-- test inserting null
INSERT INTO "post" ("user_id", "title") VALUES 
(NULL, 'Null testing');

-- delete records with null user_id
DELETE FROM "post"
WHERE "user_id" IS NULL;

-- set not null to user_id column
ALTER TABLE "post"
ALTER COLUMN "user_id" SET NOT NULL;


-- deletion constraint on user_id.post
-- 1. Restrict deletion (default)
-- 2. Cascade relevent records on delete
-- 3. Set null
-- 4. Set default value


-- -- Step 1: Drop the existing foreign key constraint
-- ALTER TABLE "post"
-- DROP CONSTRAINT IF EXISTS post_user_id_fkey;

-- -- Step 2: Add the foreign key with ON DELETE CASCADE
-- ALTER TABLE "post"
-- ADD CONSTRAINT post_user_id_fkey
-- FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;


DELETE FROM "user"
WHERE "id" = 1;


DROP TABLE "user", "post";
