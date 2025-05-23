-- table 'threda post'
CREATE TABLE "t_post" (
    "id" SERIAL,
    "content" TEXT NOT NULL,
    "like" INTEGER DEFAULT 0,
    PRIMARY KEY ("id")    
);

CREATE TABLE "like" (
    "id" SERIAL,
    "post_id" INTEGER,
    "user_id" INTEGER,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("post_id") REFERENCES "post" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE
);

SELECT * FROM "t_post";
SELECT * FROM "like";
INSERT INTO "t_post" ("content") VALUES ('this is firsszt test post');

CREATE OR REPLACE FUNCTION update_like()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
    BEGIN
        UPDATE "t_post" SET "like" = "like" + 1
        WHERE "id" = NEW."post_id";
        RETURN NEW;
    END
$$

CREATE OR REPLACE TRIGGER update_like_trigger
AFTER INSERT
ON "like"
FOR EACH ROW
EXECUTE FUNCTION update_like();

INSERT INTO "like" ("post_id", "user_id") VALUES (1, 2);