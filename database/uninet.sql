-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-08-2023 a las 19:58:45
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `uninet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `universidades`
--

CREATE TABLE `universidades` (
  `id_universidad` int(11) NOT NULL,
  `nombre_universidad` varchar(255) NOT NULL,
  `direccion_universidad` varchar(255) NOT NULL,
  `maps_universidad` varchar(255) NOT NULL,
  `localidad_universidad` varchar(255) NOT NULL,
  `web_universidad` varchar(255) NOT NULL,
  `gestion_universidad` varchar(255) NOT NULL,
  `zona_universidad` varchar(255) NOT NULL,
  `correo_universidad` varchar(255) DEFAULT NULL,
  `point` point NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `universidades`
--

INSERT INTO `universidades` (`id_universidad`, `nombre_universidad`, `direccion_universidad`, `maps_universidad`, `localidad_universidad`, `web_universidad`, `gestion_universidad`, `zona_universidad`, `correo_universidad`, `point`) VALUES
(1, 'Universidad Nacional de La Defensa', 'Maipu 262', 'https://goo.gl/maps/QWR84PeaJ9zBuh3t6', 'Monserrat', 'https://www.undef.edu.ar', 'Publica', 'Capital Federal', 'comunicacion@undef.edu.ar', 0x),
(2, 'Instituto Universitario de la Policia Federal Argentina', 'Rosario 532', 'https://goo.gl/maps/2CRgJJw2zZQUsPdEA', 'Caballito', 'https://www.iupfa.edu.ar', 'Publica', 'Capital Federal', 'academica@iupfa.edu.ar', 0x),
(3, 'Instituto Universitario Nacional de Derechos Humanos Madres de Plaza Mayo', 'Defensa 119', 'https://goo.gl/maps/WVBLWMrJ9tCS7ixw6', 'Monserrat', 'http://www.iunma.edu.ar', 'Publica', 'Capital Federal', 'mesadeentradasiunma@gmail.com', 0x),
(4, 'Facultad Latinoamericana de Ciencias Sociales', 'Tucuman 1966', 'https://goo.gl/maps/3NK1RTNh5irT3CY6A', 'Balvanera', 'https://www.flacso.org.ar', 'Publica', 'Capital Federal', 'comunicacion@flacso.edu.ar', 0x),
(5, 'Instituto de Enseñanza Superior del Ejercito', 'Av. Cabildo 65', 'https://goo.gl/maps/HC6dMtgvZH4ihcBK7', 'Palermo', 'https://fe.undef.edu.ar', 'Publica', 'Capital Federal', 'informes@fe.undef.edu.ar', 0x),
(6, 'Instituto Universitario Naval', 'Av. Antartida Argentina 425', 'https://goo.gl/maps/e2aZhEeScAA34SE49', 'Puerto Madero', 'https://www.universidades.com.ar/instituto-universitario-naval', 'Publica', 'Capital Federal', 'comunicacion@iun.edu.ar', 0x),
(7, 'Instituto Universitario de Gendarmeria Nacional', 'Av. Paseo Colon 533', 'https://goo.gl/maps/5dF4rz7Mgykt46cM9', 'Monserrat', 'https://www.iugna.edu.ar', 'Publica', 'Capital Federal', 'info@iugna.edu.ar', 0x),
(8, 'Universidad Nacional de Las Artes', 'Azcuenaga 1129', 'https://goo.gl/maps/ru5yiaZaGxrMMxAA6', 'Barrio Norte, Recoleta', 'https://una.edu.ar', 'Publica', 'Capital Federal', 'comunicacion@una.edu.ar', 0x),
(9, 'Universidad Pedagogica Nacional', 'Piedras 1080', 'https://goo.gl/maps/irD3RWVMaU6vdNbC7', 'San Telmo', 'https://unipe.edu.ar', 'Publica', 'Capital Federal', 'informes@unipe.edu.ar', 0x),
(10, 'Fundación Barceló - Instituto Universitario Ciencias de la Salud ', 'Av. Gral. Las Heras 1907', 'https://goo.gl/maps/KMEXhq34QLwAjfC66', 'Recoleta', 'https://www.barcelo.edu.ar', 'Publica', 'Capital Federal', 'informes@barcelo.edu.ar', 0x),
(11, 'Instituto Universitario CEMIC', 'Valdenegro 4337', 'https://goo.gl/maps/Fzp3W61Pc4KuBvd48', 'Saavedra', 'https://www.cemic.edu.ar/instituto-universitario.php', 'Publica', 'Capital Federal', 'decanato@iuc.edu.ar', 0x),
(12, 'Universidad Favaloro', 'Av. Entre R?os 495', 'https://goo.gl/maps/Preo4CpTj3KAg2CXA', 'Monserrat', 'https://www.favaloro.edu.ar', 'Privada', 'Capital Federal', 'informes@favaloro.edu.ar', 0x),
(13, 'ESEADE - Universidad de Emprendedores', 'Uriarte 2472', 'https://goo.gl/maps/x4Dpb8xvM9kZBXry5', 'Palermo', 'https://www.eseade.edu.ar', 'Privada', 'Capital Federal', 'info@eseade.edu.ar', 0x),
(14, 'Universidad Catolica Argentina', 'Av. Alicia Moreau de Justo 1400', 'https://goo.gl/maps/DhoPdoaLgJkePUAM9', 'Puerto Madero', 'https://uca.edu.ar/es/home', 'Privada', 'Capital Federal', 'comunicacion@uca.edu.ar', 0x),
(15, 'Universidad John F. Kennedy', 'Parral 221', 'https://goo.gl/maps/gbWiUaf6BSXkMGYo7', 'Parque Centenario', 'https://www.kennedy.edu.ar', 'Privada', 'Capital Federal', 'alumnos@kennedy.edu.ar', 0x),
(16, 'Universidad del Museo Social Argentino', 'Av. Corrientes 1723', 'https://goo.gl/maps/CscRhbEdpWXTrC2s8', 'Monserrat', 'https://www.umsa.edu.ar', 'Privada', 'Capital Federal', 'informes@umsa.edu.ar', 0x),
(17, 'Universidad Maimonides', 'Hidalgo 775', 'https://goo.gl/maps/wpPfM3AcmiqiEXGTA', 'Caballito', 'https://www.maimonides.edu', 'Privada', 'Capital Federal', 'informes@maimonides.edu', 0x),
(18, 'Universidad Metropolitana para la Educación y el Trabajo', 'Sarmiento 2037', 'https://goo.gl/maps/RoXyk1WM4UoYMo2A7', 'Balvanera', 'https://umet.edu.ar', 'Privada', 'Capital Federal', 'info@umet.edu.ar', 0x),
(19, 'Universidad Torcuato Di Tella', 'Av. Pres. Figueroa Alcorta 7350', 'https://goo.gl/maps/n39ycYATHuftfjEt9', 'Nunez', 'https://www.utdt.edu', 'Privada', 'Capital Federal', 'informes@utdt.edu.ar', 0x),
(20, 'Universidad del Cine', 'Dr. Jose Modesto Giuffra 330', 'https://goo.gl/maps/UBJja4abgCqauNRL9', 'San Telmo', 'https://ucine.edu.ar', 'Privada', 'Capital Federal', 'info@ucine.edu.ar', 0x),
(21, 'Universidad del CEMA', 'Av. Cordoba 374', 'https://goo.gl/maps/b57iRDQhUuoAYkvv9', 'Monserrat', 'https://ucema.edu.ar', 'Privada', 'Capital Federal', 'comunicacion@ucema.edu.ar', 0x),
(22, 'Instituto Universitario del Hospital Italiano', 'Potosi 4234', 'https://goo.gl/maps/64Waxfe385CX5wPz9', 'Almagro', 'https://instituto.hospitalitaliano.edu.ar', 'Privada', 'Capital Federal', 'instituto.universitario@hospitalitaliano.org.ar', 0x),
(23, 'Instituto Universitario de Salud Mental', 'Maure 1850', 'https://goo.gl/maps/UxDRazPs41rYg3CF9', 'Palermo', 'https://www.iusam.edu.ar/', 'Privada', 'Capital Federal', 'investigacion@iusam.edu.ar', 0x),
(24, 'Universidad ISALUD', 'Venezuela 931', 'https://goo.gl/maps/rfco4qHBGJPxEXLX9', 'Monserrat', 'https://www.isalud.edu.ar/inicio', 'Privada', 'Capital Federal', 'informes@isalud.edu.ar', 0x),
(25, 'Instituto Universitario IDEA', 'Viamonte 570', 'https://goo.gl/maps/oQxroMx4VNx738xT6', 'Monserrat', 'https://www.idea.org.ar/', 'Privada', 'Capital Federal', 'info@idea.org.ar', 0x),
(26, 'Escuela Argentina de Negocios', 'Av. Cordoba 1690', 'https://goo.gl/maps/J5a2TYJq4sqoHBnF7', 'Monserrat', 'https://front.ean.edu.ar/', 'Privada', 'Capital Federal', 'informes@ean.edu.ar', 0x),
(27, 'Instituto Universitario River Plate', 'Av. Pres. Figueroa Alcorta 7597', 'https://goo.gl/maps/5oMPo2DY7wWa8LMQ9', 'Nunez', 'https://iuriverplate.edu.ar/', 'Privada', 'Capital Federal', 'info@iuriverplate.edu.ar', 0x),
(28, 'Universita Di Bologna', 'Marcelo Torcuato de Alvear 1149', 'https://goo.gl/maps/NxJ8sjXuxy6wVX6h9', 'Monserrat', 'https://ba.unibo.it/es', 'Privada', 'Capital Federal', 'buenosaires.informes@unibo.it', 0x),
(29, 'Facultad de Agronomia (Universidad de Buenos Aires)', 'Av. San Mart?n 4453', 'https://goo.gl/maps/Fqiqe1fMEWY2zofE8', 'Villa del Parque', 'https://www.agro.uba.ar', 'P?blica', 'Capital Federal', 'informes@agro.uba.ar', 0x),
(30, 'Facultad de Arquitectura, Diseño y Urbanismo (Universidad de Buenos Aires)', 'Av. Int. G?iraldes 2160', 'https://goo.gl/maps/gqhqycEXk4eapbbz6', 'Ciudad Universitaria', 'https://www.fadu.uba.ar', 'P?blica', 'Capital Federal', 'informes@fadu.uba.ar', 0x),
(31, 'Facultad de Ciencias Económicas (Universidad de Buenos Aires)', 'Av. C?rdoba 2122', 'https://goo.gl/maps/AsvrNB6xWpwhkAoR6', 'Balvanera', 'https://www.economicas.uba.ar', 'P?blica', 'Capital Federal', 'consultas@fce.uba.ar', 0x),
(32, 'Facultad de Ciencias Exactas y Naturales (Universidad de Buenos Aires)', 'Av. Int. G?iraldes 2160', 'https://goo.gl/maps/pRZ1u6zPSWnapmMF6', 'Ciudad Universitaria', 'https://exactas.uba.ar', 'P?blica', 'Capital Federal', 'comunicacion@de.fcen.uba.ar', 0x),
(33, 'Facultad de Ciencias Sociales (Universidad de Buenos Aires - S1)', 'Marcelo Torcuato de Alvear 2230', 'https://goo.gl/maps/XPP7XFUdnhS5kFidA', 'Barrio Norte, Recoleta', 'https://www.sociales.uba.ar', 'P?blica', 'Capital Federal', 'estudiantesgrado@sociales.uba.ar', 0x),
(34, 'Facultad de Ciencias Veterinarias (Universidad de Buenos Aires)', 'Av. Chorroar?n 280', 'https://goo.gl/maps/hdpQ86DN4sDVGYQW9', 'Villa del Parque', 'http://www.fvet.uba.ar', 'P?blica', 'Capital Federal', 'alumnos@fvet.uba.ar', 0x),
(35, 'Facultad de Derecho (Universidad de Buenos Aires)', 'Av. Pte. Figueroa Alcorta 2263', 'https://goo.gl/maps/xMEnYZCVEiQRHmWx7', 'Barrio Norte, Recoleta', 'http://www.derecho.uba.ar', 'P?blica', 'Capital Federal', 'estudiantiles@derecho.uba.ar', 0x),
(36, 'Facultad de Farmacia y Bioqu?mica (Universidad de Buenos Aires)', 'Jun?n 954', 'https://goo.gl/maps/wMAEFzq6UEJpogbF6', 'Barrio Norte, Recoleta', 'http://www.ffyb.uba.ar', 'P?blica', 'Capital Federal', 'alumnos@ffyb.uba.ar', 0x),
(37, 'Facultad de Filosofía y Letras (Universidad de Buenos Aires)', 'Puan 480', 'https://goo.gl/maps/ysqXPho2sgpbWoxS9', 'Caballito', 'http://www.filo.uba.ar', 'P?blica', 'Capital Federal', 'alumnos@filo.uba.ar', 0x),
(38, 'Facultad de Ingeniería (Universidad de Buenos Aires)', 'Av. Paseo Col?n 850', 'https://goo.gl/maps/wSYz6Nm5Xsfyqj3J8', 'Puerto Madero', 'https://www.ingenieria.uba.ar', 'P?blica', 'Capital Federal', 'comunicacion@fi.uba.ar', 0x),
(39, 'Facultad de Medicina (Universdad de Buenos Aires)', 'Paraguay 2155', 'https://goo.gl/maps/hXiyX5wKqYcLrWA58', 'Barrio Norte, Recoleta', 'https://www.fmed.uba.ar', 'P?blica', 'Capital Federal', 'diralumnos@fmed.uba.ar', 0x),
(40, 'Facultad de Odontología (Universidad de Buenos Aires)', 'Marcelo Torcuato de Alvear 2142', 'https://goo.gl/maps/8nMANt3we2q9WHgU9', 'Barrio Norte, Recoleta', 'http://odontologia.uba.ar', 'P?blica', 'Capital Federal', 'info@odontologia.uba.ar', 0x),
(41, 'Facultad de Psicolog?a (Universidad de Buenos Aires)', 'Av. Hip?lito Yrigoyen 3242', 'https://goo.gl/maps/chdzXdBppFExPcHL6', 'Balvanera', 'http://www.psi.uba.ar', 'P?blica', 'Capital Federal', 'diralu@psi.uba.ar', 0x),
(42, 'Universidad Argentina de La Empresa', 'Lima 757', 'https://goo.gl/maps/e6JXXNNu31oAekkXA', 'Monserrat', 'https://www.uade.edu.ar', 'Privada', 'Capital Federal', 'ingreso@uade.edu.ar', 0x),
(43, 'Instituto Universitario de Seguridad Maritima', 'Corrientes 180', 'https://goo.gl/maps/8HAN72GD2rLfL9Yv5', 'Olivos', 'https://iusm.edu.ar', 'Publica', 'Zona Norte', 'informes.iusm@gmail.com', 0x),
(44, 'Universidad Nacional General Sarmiento', 'Juan Maria Gutierrez 1150', 'https://goo.gl/maps/CeNpBqBo4usfGLqY7', 'Los Polvorines', 'https://www.ungs.edu.ar/', 'Publica', 'Zona Norte', 'info@ungs.edu.ar', 0x),
(45, 'Universidad Nacional del General San Martin', 'Av. 25 de Mayo 1169', 'https://goo.gl/maps/WB7ETyV3wAbjMpxYA', 'San Mart?n', 'https://www.unsam.edu.ar/', 'Publica', 'Zona Norte', 'info@unsam.edu.ar', 0x),
(46, 'Universidad Nacional Raul Scalabrini Ortiz', 'Colectora Panamericana 1925', 'https://goo.gl/maps/amhMeuYLbxrj291A7', 'Boulogne', 'https://www.unso.edu.ar/', 'Publica', 'Zona Norte', 'inscripciones.cejup@unsanisidro.edu.ar', 0x),
(47, 'Universidad de San Andres', 'Vito Dumas 284', 'https://goo.gl/maps/x5qbQGiLgpNeK7dg6', 'Victoria', 'https://www.udesa.edu.ar/', 'Privada', 'Zona Norte', 'info@udesa.edu.ar', 0x),
(48, 'Universidad Pedagogica UNIPE', 'Av. Dr. Honorio Pueyrredon 1837', 'https://goo.gl/maps/QpfA7wqwPqNLM7ZS8', 'Villa Rosa', 'https://unipe.edu.ar/', 'Privada', 'Zona Norte', 'info@unipe.edu.ar', 0x),
(49, 'Universidad de San Isidro Dr. Placido Marin', 'Av. del Libertador 17175', 'https://goo.gl/maps/6DeXXh8TYwMM98p59', 'Beccar', 'https://usi.edu.ar/', 'Privada', 'Zona Norte', 'institucional@usi.edu.ar', 0x),
(50, 'IAE Business School - Universidad Austral', 'Mariano Acosta y Ruta Prov. 8', 'https://goo.gl/maps/eJM8VFiinKM5WcFA6', 'Pilar', 'https://www.iae.edu.ar/', 'Privada', 'Zona Norte', 'info@iae.edu.ar', 0x),
(51, 'Universidad del Salvador', 'Champagnat 1599', 'https://goo.gl/maps/nLhE14BAGC7T8QcM9', 'Pilar', 'https://pilar.usal.edu.ar/', 'Privada', 'Zona Norte', 'info@usal.edu.ar', 0x),
(52, 'Universidad de Flores ', 'Belgrano 1528', 'https://goo.gl/maps/hxro7bVYP5KQW9ct9', 'San Miguel', 'https://www.uflo.edu.ar/', 'Privada', 'Zona Norte', 'informes@uflo.edu.ar', 0x),
(53, 'Escuela Argentina de Negocios (S. ZN)', 'Av. Santa Fe 2162', 'https://goo.gl/maps/DDLguRxQXvdtQYqU8', 'Martinez', 'https://front.ean.edu.ar/', 'Privada', 'Zona Norte', 'nformes@ean.edu.ar', 0x),
(54, 'Universidad Austral', 'Mariano Acosta 1611', 'https://goo.gl/maps/ZjzLwbqHJVKX8fBS8', 'Pilar', 'https://www.austral.edu.ar/', 'Privada', 'Zona Norte', 'info@austral.edu.ar', 0x),
(55, 'Universidad Abierta Interamericana (S. ZN)', 'Solis 1', 'https://goo.gl/maps/njCWxENbswV1HWxW7', 'Tigre', 'https://uai.edu.ar/', 'Privada', 'Zona Norte', 'ingreso@uai.edu.ar', 0x),
(56, 'Universidad Nacional Arturo Jauretche', 'Av. Calchaqui 6200', 'https://goo.gl/maps/zvPVdTkTqwnn5DFN6', 'Florencio Varela', 'https://www.unaj.edu.ar/', 'Publica', 'Zona Sur', 'infovirtual@unaj.edu.ar', 0x),
(57, 'Universidad Nacional de Avellaneda', 'Espa?a 350', 'https://goo.gl/maps/3HJmsUi75WuBVENX7', 'Avellaneda', 'https://undav.edu.ar/index.php', 'Publica', 'Zona Sur', 'prensa@undav.edu.ar', 0x),
(58, 'Universidad Nacional de Lomas de Zamora', 'Av. Juan XXIII', 'https://goo.gl/maps/dW479c2eDciiqNiu5', 'Lomas de Zamora', 'https://www.unlz.edu.ar/', 'Publica', 'Zona Sur', 'info@unlz.edu.ar', 0x),
(59, 'Universidad Provincial de Ezeiza', 'Alfonsina Storni 41', 'https://goo.gl/maps/fhSdtF4H3r7gzW8BA', 'Ezeiza', 'https://web.upe.edu.ar/', 'Publica', 'Zona Sur', 'comunicacion@upe.edu.ar', 0x),
(60, 'Universidad Nacional de Quilmes', 'Roque Saenz Pe?a 352', 'https://goo.gl/maps/k1XprsEaeBf7Z1Pc6', 'Bernal', 'http://www.unq.edu.ar/', 'Publica', 'Zona Sur', 'info@unq.edu.ar', 0x),
(61, 'Universidad Nacional de Lanus', '29 de septiembre 3901', 'https://goo.gl/maps/5fMU58aNz9gDztVN8', 'Remedios de Escalada', 'http://www.unla.edu.ar/', 'Publica', 'Zona Sur', 'info@unla.edu.ar', 0x),
(62, 'Universidad Notarial Argentina', 'Av. 51 435', 'https://goo.gl/maps/bGzZBDT2GVJ4RXS26', 'La Plata', 'http://www.universidadnotarial.edu.ar/', 'Privada', 'Zona Sur', 'consultas@universidadnotarial.edu.ar', 0x),
(63, 'Universidad Nacional de La Matanza', 'Florencio Varela 1903', 'https://goo.gl/maps/zLL49LK3QhNDDyVX7', 'San Justo', 'https://www.unlam.edu.ar/', 'Publica', 'Zona Oeste', 'alumnos@unlam.edu.ar', 0x),
(64, 'Universidad Nacional de Moreno', 'Av. Bartolome Mitre 1891', 'https://goo.gl/maps/cyHZuf7jsRR9neYCA', 'Moreno', 'http://www.unm.edu.ar/', 'Publica', 'Zona Oeste', 'unm@unm.edu.ar', 0x),
(65, 'Universidad Nacional de Jose C. Paz', 'Leandro N. Alem 4731', 'https://goo.gl/maps/SLmu1igcEwQvUAdD6', 'Jos? C. Paz', 'https://www.unpaz.edu.ar/', 'Publica', 'Zona Oeste', 'biblioteca@unpaz.edu.ar', 0x),
(66, 'Universidad Tecno?gica Nacional - Regional Haedo', 'Paris 532', 'https://goo.gl/maps/cowQN6QENXEZdTy47', 'Haedo', 'https://www.frh.utn.edu.ar/', 'Publica', 'Zona Oeste', 'info@utnhaedo.edu.ar', 0x),
(67, 'Universidad Nacional de Hurlingham', 'Manuel Origone 151', 'https://goo.gl/maps/PJP3sJeYjksYXAXt8', 'Villa Tesei', 'https://unahur.edu.ar/', 'Publica', 'Zona Oeste', 'bienestaryextension@unahur.edu.ar', 0x),
(68, 'Universidad de Moron', 'Gral. Machado 854', 'https://goo.gl/maps/7VoTxLxytr6frrLNA', 'Mor?n', 'https://www.unimoron.edu.ar/', 'Privada', 'Zona Oeste', 'mesadeentradas@unimoron.edu.ar', 0x),
(69, 'Universidad Abierta Interamericana (S. ZO - Castelar)', 'Gdor. Inocencio Arias 3550', 'https://goo.gl/maps/4Yzkw7izud9YKy876', 'Castelar', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste', 'ingreso@uai.edu.ar', 0x),
(70, 'Universidad Abierta Interamericana (S. ZO - Ituzaingo)', 'Gral. Alvear 1075', 'https://goo.gl/maps/qP7B6eaCcDfbGVFU8', 'Ituzaingo', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste', 'ingreso@uai.edu.ar', 0x),
(71, 'Universidad Abierta Interamericana (S. ZO - Ituzaingo 2)', 'Av. 24 de Octubre 569', 'https://goo.gl/maps/Moq5GF9TtjcAJyLTA', 'Ituzaingo', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste', 'ingreso@uai.edu.ar', 0x),
(100, 'juan23', 'guemes 65', 'https://goo.gl/maps/Lh7dsf4EwRP2aMUn6', 'Ramos Mejia', 'http://parroquialjuan23.edu.ar/', 'Privada', 'Zona Oeste', 'julian.jar.rivero@gmail.com', 0x00000000010100000008d451c4d85141c09378d4f3c9484dc0),
(200, 'juan23', 'Guemes 65', 'https://goo.gl/maps/Lh7dsf4EwRP2aMUn6', 'Ramos Mejia', 'http://parroquialjuan23.edu.ar/', 'Privada', 'Zona Oeste', 'julian.jar.rivero@gmail.com', 0x00000000010100000000000000000024400000000000003440),
(201, '', '', '', '', '', '', '', NULL, 0x00000000010100000000000000000024400000000000003440);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `universidades`
--
ALTER TABLE `universidades`
  ADD PRIMARY KEY (`id_universidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `universidades`
--
ALTER TABLE `universidades`
  MODIFY `id_universidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
