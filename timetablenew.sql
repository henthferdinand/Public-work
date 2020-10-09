-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3306
-- Létrehozás ideje: 2020. Máj 03. 22:14
-- Kiszolgáló verziója: 8.0.18
-- PHP verzió: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `timetablenew`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kurzus`
--

DROP TABLE IF EXISTS `kurzus`;
CREATE TABLE IF NOT EXISTS `kurzus` (
  `Kurzus_kód` varchar(15) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Kurzus megnevezése` varchar(60) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Nap` varchar(12) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Kezdés` time NOT NULL,
  `Befejezés` time NOT NULL,
  `Terem` int(11) NOT NULL,
  `Előadó` varchar(40) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Szak` varchar(40) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Link` varchar(200) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Elmarad` tinyint(1) NOT NULL,
  `Elmarad_datum` date NOT NULL,
  PRIMARY KEY (`Kurzus_kód`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kurzus`
--

INSERT INTO `kurzus` (`Kurzus_kód`, `Kurzus megnevezése`, `Nap`, `Kezdés`, `Befejezés`, `Terem`, `Előadó`, `Szak`, `Link`, `Elmarad`, `Elmarad_datum`) VALUES
('tesztkurzus01', 'Teszt kurzus 01', 'Hétfő', '10:00:00', '11:30:00', 225, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus02', 'Teszt kurzus 02', 'Hétfő', '12:00:00', '13:30:00', 226, 'Próba Pál', 'Teszt Szak2', 'www.megnincs2.com', 0, '0000-00-00'),
('tesztkurzus03', 'Teszt kurzus 03', 'Hétfő', '14:00:00', '15:30:00', 229, 'Próba Pál', 'Teszt Szak3', 'www.megnincs3.com', 0, '0000-00-00'),
('tesztkurzus04', 'Teszt kurzus 04', 'Hétfő', '16:00:00', '16:30:00', 220, 'Teszt Tamás', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus05', 'Teszt kurzus 05', 'Kedd', '09:00:00', '11:15:00', 212, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus06', 'Teszt kurzus 06', 'Kedd', '12:00:00', '13:30:00', 226, 'Próba Pál', 'Teszt Szak2', 'www.megnincs2.com', 0, '0000-00-00'),
('tesztkurzus07', 'Teszt kurzus 07', 'Kedd', '14:15:00', '15:15:00', 229, 'Próba Pál', 'Teszt Szak3', 'www.megnincs3.com', 0, '0000-00-00'),
('tesztkurzus08', 'Teszt kurzus 08', 'Kedd', '16:00:00', '16:30:00', 220, 'Teszt Tamás', 'Teszt Szak', 'www.megnincs.com', 1, '2020-05-01'),
('tesztkurzus09', 'Teszt kurzus 09', 'Szerda', '10:00:00', '11:30:00', 225, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus10', 'Teszt kurzus 10', 'Szerda', '16:00:00', '16:30:00', 203, 'Teszt Tamás', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus11', 'Teszt kurzus 11', 'Szerda', '09:00:00', '11:15:00', 212, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus12', 'Teszt kurzus 12', 'Szerda', '16:00:00', '16:30:00', 201, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus13', 'Teszt kurzus 13', 'Csütörtök', '08:00:00', '09:30:00', 227, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus14', 'Teszt kurzus 14', 'Csütörtök', '12:00:00', '13:30:00', 223, 'Próba Pál', 'Teszt Szak2', 'www.megnincs2.com', 0, '0000-00-00'),
('tesztkurzus15', 'Teszt kurzus 15', 'Csütörtök', '16:00:00', '16:30:00', 205, 'Teszt Tamás', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus16', 'Teszt kurzus 16', 'Péntek', '12:00:00', '13:30:00', 226, 'Próba Pál', 'Teszt Szak2', 'www.megnincs2.com', 0, '0000-00-00'),
('tesztkurzus17', 'Teszt kurzus 17', 'Péntek', '14:15:00', '15:15:00', 223, 'Próba Pál', 'Teszt Szak3', 'www.megnincs3.com', 0, '0000-00-00'),
('tesztkurzus18', 'Teszt kurzus 18', 'Péntek', '16:00:00', '16:30:00', 203, 'Teszt Tamás', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00'),
('tesztkurzus19', 'Teszt kurzus 19', 'Péntek', '08:00:00', '09:30:00', 226, 'Próba Pál', 'Teszt Szak', 'www.megnincs.com', 0, '0000-00-00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Neptun kód` varchar(15) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Név` varchar(40) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Szak` varchar(60) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Jelszó` varchar(15) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Oktató` tinyint(1) NOT NULL,
  PRIMARY KEY (`Neptun kód`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`Neptun kód`, `Név`, `Szak`, `Jelszó`, `Oktató`) VALUES
('kih2ja', 'Hallgató Henrik', 'Teszt Szak', 'pass01', 0),
('od6pan', 'Hallgató Aladár', 'Teszt Szak3', 'pass02', 0),
('oktt4t', 'Teszt Tamás', '-', 'pass04', 1),
('piw2ja', 'Alvó András', 'Teszt Szak2', 'pass03', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `usertimetable`
--

DROP TABLE IF EXISTS `usertimetable`;
CREATE TABLE IF NOT EXISTS `usertimetable` (
  `id` int(11) NOT NULL,
  `Neptun_kód` varchar(15) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Kurzus_kód` varchar(15) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Nap` varchar(12) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `Kezdés` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `usertimetable`
--

INSERT INTO `usertimetable` (`id`, `Neptun_kód`, `Kurzus_kód`, `Nap`, `Kezdés`) VALUES
(0, 'kih2ja', 'tesztkurzus04', 'Hétfő', '16:00:00'),
(1, 'kih2ja', 'tesztkurzus08', 'Kedd', '16:00:00'),
(2, 'kih2ja', 'tesztkurzus18', 'Péntek', '16:00:00'),
(3, 'kih2ja', 'tesztkurzus09', 'Szerda', '10:00:00'),
(4, 'kih2ja', 'tesztkurzus11', 'Szerda', '09:00:00'),
(5, 'kih2ja', 'tesztkurzus12', 'Szerda', '16:00:00'),
(6, 'kih2ja', 'tesztkurzus15', 'Csütörtök', '16:00:00'),
(7, 'kih2ja', 'tesztkurzus01', 'Hétfő', '10:00:00'),
(8, 'kih2ja', 'tesztkurzus19', 'Péntek', '08:00:00'),
(9, 'kih2ja', 'tesztkurzus05', 'Kedd', '09:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
