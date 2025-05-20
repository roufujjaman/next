SELECT * FROM "user";
SELECT * FROM "post";

SELECT "user_id", "title" FROM "user"
JOIN "post" ON "user"."id" = "post"."user_id";



SELECT "user"."id", "username", "title" FROM "user"
LEFT JOIN "post" ON "user"."id" = "post"."user_id";

SELECT * FROM "user"
FULL JOIN "post" ON "user"."id" = "post"."user_id";

SELECT * FROM "user"
CROSS JOIN "post";

SELECT * FROM  "user"
NATURAL JOIN "post";