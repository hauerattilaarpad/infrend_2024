-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3306
-- Létrehozás ideje: 2024. Máj 14. 13:13
-- Kiszolgáló verziója: 8.2.0
-- PHP verzió: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `infotermdb`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `car`
--

DROP TABLE IF EXISTS `car`;
CREATE TABLE IF NOT EXISTS `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `licensePlate` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `fuelType` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `fuelConsuption` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `startingKm` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `car`
--

INSERT INTO `car` (`id`, `licensePlate`, `type`, `fuelType`, `fuelConsuption`, `startingKm`) VALUES
(1, 'HLF4568', 'Sedan', 'Fort GT', '15', '10000'),
(2, 'BCD234', 'BMW M3', 'Benzin', '7', '12000'),
(3, 'CDE456', 'Volkswagen Golf IV', 'Dízel', '9', '24000'),
(4, 'DEF567', 'Toyota Corolla', 'Benzin', '6', '23123'),
(5, 'EFG678', 'Honda Civic', 'Benzin', '4', '63476'),
(6, 'FGH789', 'Ford Focus', 'Dízel', '7', '222220'),
(7, 'GHI890', 'Audi A4', 'Benzin', '3', '1234322'),
(8, 'HIJ901', 'Mercedes-Benz C-Class', 'Dízel', '12', '123476'),
(9, 'IJK012', 'Fiat 500', 'Benzin', '20', '250000'),
(10, 'UOP482', 'Nissan GTR', 'Diesel', '10', '12000');
(52, 'JUF234', 'Skoda Octavia', 'Dízel', '10', '123000'),

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `driver`
--

DROP TABLE IF EXISTS `driver`;
CREATE TABLE IF NOT EXISTS `driver` (
  `id` int NOT NULL AUTO_INCREMENT,
  `driversLicenseId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `licenseExpireDate` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `dateOfBirth` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `driver`
--

INSERT INTO `driver` (`id`, `driversLicenseId`, `name`, `address`, `licenseExpireDate`, `dateOfBirth`) VALUES
(1, 'DL123456', 'John Doe', '123 Main St, City', '2025-12-31', '1990-05-15'),
(2, 'DL654321', 'Jane Smith', '456 Elm St, Town', '2023-06-30', '1985-08-20'),
(3, 'DL987654', 'Michael Johnson', '789 Oak St, Village', '2024-10-15', '1978-03-10'),
(4, 'DL456789', 'Emily Brown', '321 Pine St, Town', '2026-02-28', '1995-11-25'),
(5, 'DL246810', 'Sarah Wilson', '654 Cedar St, City', '2023-09-20', '1982-07-05'),
(6, 'DL135792', 'Christopher Lee', '987 Maple St, Village', '2025-11-30', '1992-04-18'),
(7, 'DL987123', 'Jessica Garcia', '159 Walnut St, City', '2024-04-15', '1987-09-12'),
(8, 'DL369258', 'David Martinez', '753 Birch St, Town', '2026-07-31', '1998-01-08'),
(9, 'DL123434', 'Kiss Mariann', '4400 Nyíregyháza, Szent István tér 20.', '2024-08-03', '1984-09-08'),
(10, 'DL123498', 'Tóth József', '5000 Szolnok, Ady Endre út 16.', '2026-01-15', '1970-06-28');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `travel`
--

DROP TABLE IF EXISTS `travel`;
CREATE TABLE IF NOT EXISTS `travel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `driverId` int DEFAULT NULL,
  `carId` int DEFAULT NULL,
  `date` date NOT NULL,
  `type` enum('céges','magán') COLLATE utf8mb4_hungarian_ci NOT NULL DEFAULT 'céges',
  `startPlace` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `endPlace` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `traveledDistance` int NOT NULL,
  `newKm` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_09617892de3f42f060df71781c7` (`driverId`),
  KEY `FK_10f3fe8014c0044e93a12a526e9` (`carId`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `travel`
--

INSERT INTO `travel` (`id`, `driverId`, `carId`, `date`, `type`, `startPlace`, `endPlace`, `traveledDistance`, `newKm`) VALUES
(1, 1, 1, '2024-05-10', 'céges', 'Budapest', 'Debrecen', 220, 10220),
(2, 2, 2, '2024-05-11', 'magán', 'Debrecen', 'Szeged', 320, 12320),
(3, 3, 3, '2024-05-12', 'céges', 'Szeged', 'Győr', 400, 9400),
(4, 4, 4, '2024-05-13', 'magán', 'Győr', 'Miskolc', 310, 11310),
(5, 5, 5, '2024-05-14', 'céges', 'Miskolc', 'Pécs', 450, 5450),
(6, 6, 6, '2024-05-15', 'magán', 'Pécs', 'Székesfehérvár', 280, 13280),
(7, 7, 7, '2024-05-16', 'céges', 'Székesfehérvár', 'Kecskemét', 170, 9670),
(8, 8, 8, '2024-05-17', 'magán', 'Kecskemét', 'Nyíregyháza', 390, 10890),
(9, 9, 9, '2024-05-18', 'céges', 'Nyíregyháza', 'Szolnok', 310, 4710),
(10, 10, 10, '2024-05-19', 'magán', 'Szolnok', 'Budapest', 110, 11610),
(11, 9, 5, '2023-01-20', 'magán', 'Szombathely', 'Budapest', 2000, 3100),
(12, 8, 10, '2024-05-20', 'céges', 'Miskolc', 'Pécs', 300, 45000),
(13, 8, 10, '2024-05-20', 'céges', 'Pécs', 'Miskolc', 300, 45300),
(14, 9, 5, '2023-01-24', 'magán', 'Miskolc', 'Debrecen', 80, 45000),
(15, 9, 5, '2023-01-24', 'magán', 'Debrecen', 'Miskolc', 80, 45080),
(16, 4, 5, '2023-01-05', 'céges', 'Miskolc', 'Budapest', 200, 45800),
(17, 4, 5, '2023-01-05', 'céges', 'Budapest', 'Miskolc', 200, 46000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
