-- data insertion
INSERT INTO "rangers" VALUES
(1, 'Alice Green', 'Northern Hills'),
(2, 'Bob White', 'River Delta'),
(3, 'Carol King', 'Mountain Range');

INSERT INTO "species" VALUES
(1, 'Snow Leopard', 'Panthera uncia', '1775-01-01', 'Endangered'),
(2, 'Bengal Tiger', 'Panthera tigris tigris', '1758-01-01', 'Endangered'),
(3, 'Red Panda', 'Ailurus fulgens', '1825-01-01', 'Vulnerable'),
(4, 'Asiatic Elephant', 'Elephas maximus indicus', '1758-01-01', 'Endangered');

INSERT INTO "sightings" VALUES 
(1, 1, 1, 'Peak Ridge', '2024-05-10 07:45:00', 'Camera trap image captured'),
(2, 2, 2, 'Bankwood Area', '2024-05-12 16:20:00', 'Juvenile seen'),
(3, 3, 3, 'Bamboo Grove East', '2024-05-15 09:10:00', 'Feeding observed'),
(4, 1, 2, 'Snowfall Pass', '2024-05-18 18:30:00', NULL);   

-- Problem 01
INSERT INTO "rangers" VALUES 
(4, 'Derek Fox', 'Coastal Plains');

-- Problem 02
SELECT COUNT(DISTINCT "species_id") AS "unique_species_count" FROM "sightings";

-- Problem 03
SELECT * FROM "sightings" WHERE "location" LIKE '%Pass%';
SELECT * FROM "sightings" WHERE "location" ILIKE '%pass%';

-- Problem 04
SELECT "rangers"."name", COUNT("rangers"."id") AS "total_sightings" FROM "rangers"
JOIN "sightings" ON "rangers"."id" = "sightings"."ranger_id"
GROUP BY "rangers"."id"
ORDER BY "rangers"."name";

-- Problem 05
SELECT "species"."common_name" FROM "species"
LEFT JOIN "sightings" ON "species"."id" = "sightings"."species_id"
WHERE "sightings"."id" IS NULL;

-- Problem 06
SELECT "species"."common_name", "sightings"."sighting_time", "rangers"."name" FROM "sightings"
JOIN "species" ON "sightings"."species_id" = "species"."id"
JOIN "rangers" ON "sightings"."ranger_id" = "rangers"."id"
ORDER BY "sightings"."sighting_time" DESC
LIMIT 2;

-- Problem 07
UPDATE "species" SET "conservation_status" = 'Historic'
WHERE "discovery_date" < '1800-01-01';

-- Problem 08
SELECT "id",
CASE 
    WHEN "sighting_time"::TIME < '12:00:00'  THEN 'Mornig'
    WHEN "sighting_time"::TIME < '17:00:00' THEN 'Afternoon'
    ELSE 'Evening'
END
FROM  "sightings";

-- Problem 09
DELETE FROM "rangers"
WHERE "id" IN (
    SELECT "rangers"."id" FROM "rangers"
    LEFT JOIN "sightings" ON "rangers"."id" = "sightings"."ranger_id"
    WHERE "sightings"."id" IS NULL
);
