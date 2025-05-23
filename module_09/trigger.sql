CREATE TABLE "deleted_user"(
    "id" SERIAL,
    "username" VARCHAR(25),
    "deleted_at" TIMESTAMP,
    PRIMARY KEY ("id")
)


INSERT INTO "user" ("username") VALUES ('user4040');

CREATE OR REPLACE FUNCTION "save_deleted_user"()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
    BEGIN
        INSERT INTO "deleted_user" ("username", "deleted_at") VALUES (OLD."username", now());

        RAISE NOTICE 'deleted user logged';

        RETURN OLD;
    END
$$

CREATE TRIGGER "trigger_save_deleted_user"
BEFORE DELETE
ON "user"
FOR EACH ROW
EXECUTE FUNCTION "save_deleted_user"();


DELETE FROM "user" WHERE "username" = 'user4040';


SELECT * FROM "user";
SELECT * FROM "deleted_user";


SHOW data_directory;