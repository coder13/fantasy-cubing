-- CreateTable
CREATE TABLE `Competitions` (
    `id` VARCHAR(32) NOT NULL DEFAULT '',
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `cityName` VARCHAR(50) NOT NULL DEFAULT '',
    `countryId` VARCHAR(50) NOT NULL DEFAULT '',
    `information` MEDIUMTEXT NULL,
    `year` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `month` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `day` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `endMonth` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `endDay` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `cancelled` INTEGER NOT NULL DEFAULT 0,
    `eventSpecs` LONGTEXT NULL,
    `wcaDelegate` MEDIUMTEXT NULL,
    `organiser` MEDIUMTEXT NULL,
    `venue` VARCHAR(240) NOT NULL DEFAULT '',
    `venueAddress` VARCHAR(120) NULL,
    `venueDetails` VARCHAR(120) NULL,
    `external_website` VARCHAR(200) NULL,
    `cellName` VARCHAR(45) NOT NULL DEFAULT '',
    `latitude` INTEGER NULL,
    `longitude` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Continents` (
    `id` VARCHAR(50) NOT NULL DEFAULT '',
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `recordName` CHAR(3) NOT NULL DEFAULT '',
    `latitude` INTEGER NOT NULL DEFAULT 0,
    `longitude` INTEGER NOT NULL DEFAULT 0,
    `zoom` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Countries` (
    `id` VARCHAR(50) NOT NULL DEFAULT '',
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `continentId` VARCHAR(50) NOT NULL DEFAULT '',
    `iso2` CHAR(2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Events` (
    `id` VARCHAR(6) NOT NULL DEFAULT '',
    `name` VARCHAR(54) NOT NULL DEFAULT '',
    `rank` INTEGER NOT NULL DEFAULT 0,
    `format` VARCHAR(10) NOT NULL DEFAULT '',
    `cellName` VARCHAR(45) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formats` (
    `id` CHAR(1) NOT NULL DEFAULT '',
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `sort_by` VARCHAR(255) NOT NULL,
    `sort_by_second` VARCHAR(255) NOT NULL,
    `expected_solve_count` INTEGER NOT NULL,
    `trim_fastest_n` INTEGER NOT NULL,
    `trim_slowest_n` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Persons` (
    `id` VARCHAR(10) NOT NULL DEFAULT '',
    `subid` TINYINT NOT NULL DEFAULT 1,
    `name` VARCHAR(80) NULL,
    `countryId` VARCHAR(50) NOT NULL DEFAULT '',
    `gender` CHAR(1) NULL DEFAULT '',

    PRIMARY KEY (`id`, `subid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RanksAverage` (
    `personId` VARCHAR(10) NOT NULL DEFAULT '',
    `eventId` VARCHAR(6) NOT NULL DEFAULT '',
    `best` INTEGER NOT NULL DEFAULT 0,
    `worldRank` INTEGER NOT NULL DEFAULT 0,
    `continentRank` INTEGER NOT NULL DEFAULT 0,
    `countryRank` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`personId`, `eventId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RanksSingle` (
    `personId` VARCHAR(10) NOT NULL DEFAULT '',
    `eventId` VARCHAR(6) NOT NULL DEFAULT '',
    `best` INTEGER NOT NULL DEFAULT 0,
    `worldRank` INTEGER NOT NULL DEFAULT 0,
    `continentRank` INTEGER NOT NULL DEFAULT 0,
    `countryRank` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`personId`, `eventId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Results` (
    `competitionId` VARCHAR(32) NOT NULL DEFAULT '',
    `eventId` VARCHAR(6) NOT NULL DEFAULT '',
    `roundTypeId` CHAR(1) NOT NULL DEFAULT '',
    `pos` SMALLINT NOT NULL DEFAULT 0,
    `best` INTEGER NOT NULL DEFAULT 0,
    `average` INTEGER NOT NULL DEFAULT 0,
    `personName` VARCHAR(80) NULL,
    `personId` VARCHAR(10) NOT NULL DEFAULT '',
    `personCountryId` VARCHAR(50) NULL,
    `formatId` CHAR(1) NOT NULL DEFAULT '',
    `value1` INTEGER NOT NULL DEFAULT 0,
    `value2` INTEGER NOT NULL DEFAULT 0,
    `value3` INTEGER NOT NULL DEFAULT 0,
    `value4` INTEGER NOT NULL DEFAULT 0,
    `value5` INTEGER NOT NULL DEFAULT 0,
    `regionalSingleRecord` CHAR(3) NULL,
    `regionalAverageRecord` CHAR(3) NULL,

    PRIMARY KEY (`competitionId`, `eventId`, `roundTypeId`, `personId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoundTypes` (
    `id` CHAR(1) NOT NULL DEFAULT '',
    `rank` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `cellName` VARCHAR(45) NOT NULL DEFAULT '',
    `final` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `championships` (
    `id` INTEGER NOT NULL DEFAULT 0,
    `competition_id` VARCHAR(191) NOT NULL,
    `championship_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eligible_country_iso2s_for_championship` (
    `id` BIGINT NOT NULL DEFAULT 0,
    `championship_type` VARCHAR(191) NOT NULL,
    `eligible_country_iso2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

