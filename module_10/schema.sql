-- Active: 1747413784645@@127.0.0.1@5432@conservation_db
CREATE TABLE "rangers" (
    "id" SERIAL,
    "name" VARCHAR(50) NOT NULL,
    "region" VARCHAR(25) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "species" (
    "id" SERIAL,
    "common_name" VARCHAR(50) NOT NULL,
    "scientific_name" VARCHAR(50),
    "discovery_date" DATE,
    "conservation_status" VARCHAR(25),
    PRIMARY KEY ("id")
);


CREATE TABLE "sightings" (
    "id" SERIAL,
    "species_id" INTEGER NOT NULL,
    "ranger_id" INTEGER NOT NULL,
    "location" VARCHAR(50) NOT NULL,
    "sighting_time" TIMESTAMP NOT NULL,
    "notes" TEXT,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("ranger_id") REFERENCES "rangers" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("species_id") REFERENCES "species" ("id") ON DELETE CASCADE
);



-- testing

DROP TABLE "rangers", "species", "sightings";