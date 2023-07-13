-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-07-2023 a las 19:32:22
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
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id_carrera` int(11) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  `carrera` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id_departamento` int(11) NOT NULL,
  `id_universidad` int(11) NOT NULL,
  `departamento` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritas`
--

CREATE TABLE `favoritas` (
  `id_favorita` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_universidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id_solicitud` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_universidad` int(11) NOT NULL,
  `solicitud` text NOT NULL,
  `estado` enum('aceptada','rechazada','pendiente','senguda instancia') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `correo_universidad` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `universidades`
--

INSERT INTO `universidades` (`id_universidad`, `nombre_universidad`, `direccion_universidad`, `maps_universidad`, `localidad_universidad`, `web_universidad`, `gestion_universidad`, `zona_universidad`, `correo_universidad`) VALUES
(1, 'Universidad Nacional de La Defensa', 'Maipu 262', 'https://goo.gl/maps/QWR84PeaJ9zBuh3t6', 'Monserrat', 'https://www.undef.edu.ar', 'Publica', 'Capital Federal', 'comunicacion@undef.edu.ar'),
(2, 'Instituto Universitario de la Policia Federal Argentina', 'Rosario 532', 'https://goo.gl/maps/2CRgJJw2zZQUsPdEA', 'Caballito', 'https://www.iupfa.edu.ar', 'Publica', 'Capital Federal', 'academica@iupfa.edu.ar'),
(3, 'Instituto Universitario Nacional de Derechos Humanos Madres de Plaza Mayo', 'Defensa 119', 'https://goo.gl/maps/WVBLWMrJ9tCS7ixw6', 'Monserrat', 'http://www.iunma.edu.ar', 'Publica', 'Capital Federal', 'mesadeentradasiunma@gmail.com'),
(4, 'Facultad Latinoamericana de Ciencias Sociales', 'Tucuman 1966', 'https://goo.gl/maps/3NK1RTNh5irT3CY6A', 'Balvanera', 'https://www.flacso.org.ar', 'Publica', 'Capital Federal', 'comunicacion@flacso.edu.ar'),
(5, 'Instituto de Ense?anza Superior del Ejercito', 'Av. Cabildo 65', 'https://goo.gl/maps/HC6dMtgvZH4ihcBK7', 'Palermo', 'https://fe.undef.edu.ar', 'Publica', 'Capital Federal', 'informes@fe.undef.edu.ar'),
(6, 'Instituto Universitario Naval', 'Av. Antartida Argentina 425', 'https://goo.gl/maps/e2aZhEeScAA34SE49', 'Puerto Madero', 'https://www.universidades.com.ar/instituto-universitario-naval', 'Publica', 'Capital Federal', 'comunicacion@iun.edu.ar'),
(7, 'Instituto Universitario de Gendarmeria Nacional', 'Av. Paseo Colon 533', 'https://goo.gl/maps/5dF4rz7Mgykt46cM9', 'Monserrat', 'https://www.iugna.edu.ar', 'Publica', 'Capital Federal', 'info@iugna.edu.ar'),
(8, 'Universidad Nacional de Las Artes', 'Azcuenaga 1129', 'https://goo.gl/maps/ru5yiaZaGxrMMxAA6', 'Barrio Norte, Recoleta', 'https://una.edu.ar', 'Publica', 'Capital Federal', 'comunicacion@una.edu.ar'),
(9, 'Universidad Pedagogica Nacional', 'Piedras 1080', 'https://goo.gl/maps/irD3RWVMaU6vdNbC7', 'San Telmo', 'https://unipe.edu.ar', 'Publica', 'Capital Federal', 'informes@unipe.edu.ar'),
(10, 'Fundaci?n Barcelo - Instituto Universitario Ciencias de la Salud ', 'Av. Gral. Las Heras 1907', 'https://goo.gl/maps/KMEXhq34QLwAjfC66', 'Recoleta', 'https://www.barcelo.edu.ar', 'Publica', 'Capital Federal', 'informes@barcelo.edu.ar'),
(11, 'Instituto Universitario CEMIC', 'Valdenegro 4337', 'https://goo.gl/maps/Fzp3W61Pc4KuBvd48', 'Saavedra', 'https://www.cemic.edu.ar/instituto-universitario.php', 'Publica', 'Capital Federal', 'decanato@iuc.edu.ar'),
(12, 'Universidad Favaloro', 'Av. Entre R?os 495', 'https://goo.gl/maps/Preo4CpTj3KAg2CXA', 'Monserrat', 'https://www.favaloro.edu.ar', 'Privada', 'Capital Federal', 'informes@favaloro.edu.ar'),
(13, 'ESEADE - Universidad de Emprendedores', 'Uriarte 2472', 'https://goo.gl/maps/x4Dpb8xvM9kZBXry5', 'Palermo', 'https://www.eseade.edu.ar', 'Privada', 'Capital Federal', 'info@eseade.edu.ar'),
(14, 'Universidad Catolica Argentina', 'Av. Alicia Moreau de Justo 1400', 'https://goo.gl/maps/DhoPdoaLgJkePUAM9', 'Puerto Madero', 'https://uca.edu.ar/es/home', 'Privada', 'Capital Federal', 'comunicacion@uca.edu.ar'),
(15, 'Universidad John F. Kennedy', 'Parral 221', 'https://goo.gl/maps/gbWiUaf6BSXkMGYo7', 'Parque Centenario', 'https://www.kennedy.edu.ar', 'Privada', 'Capital Federal', 'alumnos@kennedy.edu.ar'),
(16, 'Universidad del Museo Social Argentino', 'Av. Corrientes 1723', 'https://goo.gl/maps/CscRhbEdpWXTrC2s8', 'Monserrat', 'https://www.umsa.edu.ar', 'Privada', 'Capital Federal', 'informes@umsa.edu.ar'),
(17, 'Universidad Maimonides', 'Hidalgo 775', 'https://goo.gl/maps/wpPfM3AcmiqiEXGTA', 'Caballito', 'https://www.maimonides.edu', 'Privada', 'Capital Federal', 'informes@maimonides.edu'),
(18, 'Universidad Metropolitana para la Educaci?n y el Trabajo', 'Sarmiento 2037', 'https://goo.gl/maps/RoXyk1WM4UoYMo2A7', 'Balvanera', 'https://umet.edu.ar', 'Privada', 'Capital Federal', 'info@umet.edu.ar'),
(19, 'Universidad Torcuato Di Tella', 'Av. Pres. Figueroa Alcorta 7350', 'https://goo.gl/maps/n39ycYATHuftfjEt9', 'Nunez', 'https://www.utdt.edu', 'Privada', 'Capital Federal', 'informes@utdt.edu.ar'),
(20, 'Universidad del Cine', 'Dr. Jose Modesto Giuffra 330', 'https://goo.gl/maps/UBJja4abgCqauNRL9', 'San Telmo', 'https://ucine.edu.ar', 'Privada', 'Capital Federal', 'info@ucine.edu.ar'),
(21, 'Universidad del CEMA', 'Av. Cordoba 374', 'https://goo.gl/maps/b57iRDQhUuoAYkvv9', 'Monserrat', 'https://ucema.edu.ar', 'Privada', 'Capital Federal', 'comunicacion@ucema.edu.ar'),
(22, 'Instituto Universitario del Hospital Italiano', 'Potosi 4234', 'https://goo.gl/maps/64Waxfe385CX5wPz9', 'Almagro', 'https://instituto.hospitalitaliano.edu.ar', 'Privada', 'Capital Federal', 'instituto.universitario@hospitalitaliano.org.ar'),
(23, 'Instituto Universitario de Salud Mental', 'Maure 1850', 'https://goo.gl/maps/UxDRazPs41rYg3CF9', 'Palermo', 'https://www.iusam.edu.ar/', 'Privada', 'Capital Federal', 'investigacion@iusam.edu.ar'),
(24, 'Universidad ISALUD', 'Venezuela 931', 'https://goo.gl/maps/rfco4qHBGJPxEXLX9', 'Monserrat', 'https://www.isalud.edu.ar/inicio', 'Privada', 'Capital Federal', 'informes@isalud.edu.ar'),
(25, 'Instituto Universitario IDEA', 'Viamonte 570', 'https://goo.gl/maps/oQxroMx4VNx738xT6', 'Monserrat', 'https://www.idea.org.ar/', 'Privada', 'Capital Federal', 'info@idea.org.ar'),
(26, 'Escuela Argentina de Negocios', 'Av. Cordoba 1690', 'https://goo.gl/maps/J5a2TYJq4sqoHBnF7', 'Monserrat', 'https://front.ean.edu.ar/', 'Privada', 'Capital Federal', 'informes@ean.edu.ar'),
(27, 'Instituto Universitario River Plate', 'Av. Pres. Figueroa Alcorta 7597', 'https://goo.gl/maps/5oMPo2DY7wWa8LMQ9', 'Nunez', 'https://iuriverplate.edu.ar/', 'Privada', 'Capital Federal', 'info@iuriverplate.edu.ar'),
(28, 'Universita Di Bologna', 'Marcelo Torcuato de Alvear 1149', 'https://goo.gl/maps/NxJ8sjXuxy6wVX6h9', 'Monserrat', 'https://ba.unibo.it/es', 'Privada', 'Capital Federal', 'buenosaires.informes@unibo.it'),
(29, 'Facultad de Agronom?a (Universidad de Buenos Aires)', 'Av. San Mart?n 4453', 'https://goo.gl/maps/Fqiqe1fMEWY2zofE8', 'Villa del Parque', 'https://www.agro.uba.ar', 'P?blica', 'Capital Federal', 'informes@agro.uba.ar'),
(30, 'Facultad de Arquitectura, Dise?o y Urbanismo (Universidad de Buenos Aires)', 'Av. Int. G?iraldes 2160', 'https://goo.gl/maps/gqhqycEXk4eapbbz6', 'Ciudad Universitaria', 'https://www.fadu.uba.ar', 'P?blica', 'Capital Federal', 'informes@fadu.uba.ar'),
(31, 'Facultad de Ciencias Econ?micas (Universidad de Buenos Aires)', 'Av. C?rdoba 2122', 'https://goo.gl/maps/AsvrNB6xWpwhkAoR6', 'Balvanera', 'https://www.economicas.uba.ar', 'P?blica', 'Capital Federal', 'consultas@fce.uba.ar'),
(32, 'Facultad de Ciencias Exactas y Naturales (Universidad de Buenos Aires)', 'Av. Int. G?iraldes 2160', 'https://goo.gl/maps/pRZ1u6zPSWnapmMF6', 'Ciudad Universitaria', 'https://exactas.uba.ar', 'P?blica', 'Capital Federal', 'comunicacion@de.fcen.uba.ar'),
(33, 'Facultad de Ciencias Sociales (Universidad de Buenos Aires - S1)', 'Marcelo Torcuato de Alvear 2230', 'https://goo.gl/maps/XPP7XFUdnhS5kFidA', 'Barrio Norte, Recoleta', 'https://www.sociales.uba.ar', 'P?blica', 'Capital Federal', 'estudiantesgrado@sociales.uba.ar'),
(34, 'Facultad de Ciencias Veterinarias (Universidad de Buenos Aires)', 'Av. Chorroar?n 280', 'https://goo.gl/maps/hdpQ86DN4sDVGYQW9', 'Villa del Parque', 'http://www.fvet.uba.ar', 'P?blica', 'Capital Federal', 'alumnos@fvet.uba.ar'),
(35, 'Facultad de Derecho (Universidad de Buenos Aires)', 'Av. Pte. Figueroa Alcorta 2263', 'https://goo.gl/maps/xMEnYZCVEiQRHmWx7', 'Barrio Norte, Recoleta', 'http://www.derecho.uba.ar', 'P?blica', 'Capital Federal', 'estudiantiles@derecho.uba.ar'),
(36, 'Facultad de Farmacia y Bioqu?mica (Universidad de Buenos Aires)', 'Jun?n 954', 'https://goo.gl/maps/wMAEFzq6UEJpogbF6', 'Barrio Norte, Recoleta', 'http://www.ffyb.uba.ar', 'P?blica', 'Capital Federal', 'alumnos@ffyb.uba.ar'),
(37, 'Facultad de Filosof?a y Letras (Universidad de Buenos Aires)', 'Puan 480', 'https://goo.gl/maps/ysqXPho2sgpbWoxS9', 'Caballito', 'http://www.filo.uba.ar', 'P?blica', 'Capital Federal', 'alumnos@filo.uba.ar'),
(38, 'Facultad de Ingenier?a (Universidad de Buenos Aires)', 'Av. Paseo Col?n 850', 'https://goo.gl/maps/wSYz6Nm5Xsfyqj3J8', 'Puerto Madero', 'https://www.ingenieria.uba.ar', 'P?blica', 'Capital Federal', 'comunicacion@fi.uba.ar'),
(39, 'Facultad de Medicina (Universdad de Buenos Aires)', 'Paraguay 2155', 'https://goo.gl/maps/hXiyX5wKqYcLrWA58', 'Barrio Norte, Recoleta', 'https://www.fmed.uba.ar', 'P?blica', 'Capital Federal', 'diralumnos@fmed.uba.ar'),
(40, 'Facultad de Odontolog?a (Universidad de Buenos Aires)', 'Marcelo Torcuato de Alvear 2142', 'https://goo.gl/maps/8nMANt3we2q9WHgU9', 'Barrio Norte, Recoleta', 'http://odontologia.uba.ar', 'P?blica', 'Capital Federal', 'info@odontologia.uba.ar'),
(41, 'Facultad de Psicolog?a (Universidad de Buenos Aires)', 'Av. Hip?lito Yrigoyen 3242', 'https://goo.gl/maps/chdzXdBppFExPcHL6', 'Balvanera', 'http://www.psi.uba.ar', 'P?blica', 'Capital Federal', 'diralu@psi.uba.ar'),
(42, 'Universidad Argentina de La Empresa', 'Lima 757', 'https://goo.gl/maps/e6JXXNNu31oAekkXA', 'Monserrat', 'https://www.uade.edu.ar', 'Privada', 'Capital Federal', 'ingreso@uade.edu.ar'),
(43, 'Instituto Universitario de Seguridad Maritima', 'Corrientes 180', 'https://goo.gl/maps/8HAN72GD2rLfL9Yv5', 'Olivos', 'https://iusm.edu.ar', 'Publica', 'Zona Norte', 'informes.iusm@gmail.com'),
(44, 'Universidad Nacional General Sarmiento', 'Juan Maria Gutierrez 1150', 'https://goo.gl/maps/CeNpBqBo4usfGLqY7', 'Los Polvorines', 'https://www.ungs.edu.ar/', 'Publica', 'Zona Norte', 'info@ungs.edu.ar'),
(45, 'Universidad Nacional del General San Martin', 'Av. 25 de Mayo 1169', 'https://goo.gl/maps/WB7ETyV3wAbjMpxYA', 'San Mart?n', 'https://www.unsam.edu.ar/', 'Publica', 'Zona Norte', 'info@unsam.edu.ar'),
(46, 'Universidad Nacional Raul Scalabrini Ortiz', 'Colectora Panamericana 1925', 'https://goo.gl/maps/amhMeuYLbxrj291A7', 'Boulogne', 'https://www.unso.edu.ar/', 'Publica', 'Zona Norte', 'inscripciones.cejup@unsanisidro.edu.ar'),
(47, 'Universidad de San Andres', 'Vito Dumas 284', 'https://goo.gl/maps/x5qbQGiLgpNeK7dg6', 'Victoria', 'https://www.udesa.edu.ar/', 'Privada', 'Zona Norte', 'info@udesa.edu.ar'),
(48, 'Universidad Pedagogica UNIPE', 'Av. Dr. Honorio Pueyrredon 1837', 'https://goo.gl/maps/QpfA7wqwPqNLM7ZS8', 'Villa Rosa', 'https://unipe.edu.ar/', 'Privada', 'Zona Norte', 'info@unipe.edu.ar'),
(49, 'Universidad de San Isidro Dr. Placido Marin', 'Av. del Libertador 17175', 'https://goo.gl/maps/6DeXXh8TYwMM98p59', 'Beccar', 'https://usi.edu.ar/', 'Privada', 'Zona Norte', 'institucional@usi.edu.ar'),
(50, 'IAE Business School - Universidad Austral', 'Mariano Acosta y Ruta Prov. 8', 'https://goo.gl/maps/eJM8VFiinKM5WcFA6', 'Pilar', 'https://www.iae.edu.ar/', 'Privada', 'Zona Norte', 'info@iae.edu.ar'),
(51, 'Universidad del Salvador', 'Champagnat 1599', 'https://goo.gl/maps/nLhE14BAGC7T8QcM9', 'Pilar', 'https://pilar.usal.edu.ar/', 'Privada', 'Zona Norte', 'info@usal.edu.ar'),
(52, 'Universidad de Flores ', 'Belgrano 1528', 'https://goo.gl/maps/hxro7bVYP5KQW9ct9', 'San Miguel', 'https://www.uflo.edu.ar/', 'Privada', 'Zona Norte', 'informes@uflo.edu.ar'),
(53, 'Escuela Argentina de Negocios (S. ZN)', 'Av. Santa Fe 2162', 'https://goo.gl/maps/DDLguRxQXvdtQYqU8', 'Martinez', 'https://front.ean.edu.ar/', 'Privada', 'Zona Norte', 'nformes@ean.edu.ar'),
(54, 'Universidad Austral', 'Mariano Acosta 1611', 'https://goo.gl/maps/ZjzLwbqHJVKX8fBS8', 'Pilar', 'https://www.austral.edu.ar/', 'Privada', 'Zona Norte', 'info@austral.edu.ar'),
(55, 'Universidad Abierta Interamericana (S. ZN)', 'Solis 1', 'https://goo.gl/maps/njCWxENbswV1HWxW7', 'Tigre', 'https://uai.edu.ar/', 'Privada', 'Zona Norte', 'ingreso@uai.edu.ar'),
(56, 'Universidad Nacional Arturo Jauretche', 'Av. Calchaqui 6200', 'https://goo.gl/maps/zvPVdTkTqwnn5DFN6', 'Florencio Varela', 'https://www.unaj.edu.ar/', 'Publica', 'Zona Sur', 'infovirtual@unaj.edu.ar'),
(57, 'Universidad Nacional de Avellaneda', 'Espa?a 350', 'https://goo.gl/maps/3HJmsUi75WuBVENX7', 'Avellaneda', 'https://undav.edu.ar/index.php', 'Publica', 'Zona Sur', 'prensa@undav.edu.ar'),
(58, 'Universidad Nacional de Lomas de Zamora', 'Av. Juan XXIII', 'https://goo.gl/maps/dW479c2eDciiqNiu5', 'Lomas de Zamora', 'https://www.unlz.edu.ar/', 'Publica', 'Zona Sur', 'info@unlz.edu.ar'),
(59, 'Universidad Provincial de Ezeiza', 'Alfonsina Storni 41', 'https://goo.gl/maps/fhSdtF4H3r7gzW8BA', 'Ezeiza', 'https://web.upe.edu.ar/', 'Publica', 'Zona Sur', 'comunicacion@upe.edu.ar'),
(60, 'Universidad Nacional de Quilmes', 'Roque Saenz Pe?a 352', 'https://goo.gl/maps/k1XprsEaeBf7Z1Pc6', 'Bernal', 'http://www.unq.edu.ar/', 'Publica', 'Zona Sur', 'info@unq.edu.ar'),
(61, 'Universidad Nacional de Lanus', '29 de septiembre 3901', 'https://goo.gl/maps/5fMU58aNz9gDztVN8', 'Remedios de Escalada', 'http://www.unla.edu.ar/', 'Publica', 'Zona Sur', 'info@unla.edu.ar'),
(62, 'Universidad Notarial Argentina', 'Av. 51 435', 'https://goo.gl/maps/bGzZBDT2GVJ4RXS26', 'La Plata', 'http://www.universidadnotarial.edu.ar/', 'Privada', 'Zona Sur', 'consultas@universidadnotarial.edu.ar'),
(63, 'Universidad Nacional de La Matanza', 'Florencio Varela 1903', 'https://goo.gl/maps/zLL49LK3QhNDDyVX7', 'San Justo', 'https://www.unlam.edu.ar/', 'Publica', 'Zona Oeste', 'alumnos@unlam.edu.ar'),
(64, 'Universidad Nacional de Moreno', 'Av. Bartolome Mitre 1891', 'https://goo.gl/maps/cyHZuf7jsRR9neYCA', 'Moreno', 'http://www.unm.edu.ar/', 'Publica', 'Zona Oeste', 'unm@unm.edu.ar'),
(65, 'Universidad Nacional de Jose C. Paz', 'Leandro N. Alem 4731', 'https://goo.gl/maps/SLmu1igcEwQvUAdD6', 'Jos? C. Paz', 'https://www.unpaz.edu.ar/', 'Publica', 'Zona Oeste', 'biblioteca@unpaz.edu.ar'),
(66, 'Universidad Tecno?gica Nacional - Regional Haedo', 'Paris 532', 'https://goo.gl/maps/cowQN6QENXEZdTy47', 'Haedo', 'https://www.frh.utn.edu.ar/', 'Publica', 'Zona Oeste', 'info@utnhaedo.edu.ar'),
(67, 'Universidad Nacional de Hurlingham', 'Manuel Origone 151', 'https://goo.gl/maps/PJP3sJeYjksYXAXt8', 'Villa Tesei', 'https://unahur.edu.ar/', 'Publica', 'Zona Oeste', 'bienestaryextension@unahur.edu.ar'),
(68, 'Universidad de Moron', 'Gral. Machado 854', 'https://goo.gl/maps/7VoTxLxytr6frrLNA', 'Mor?n', 'https://www.unimoron.edu.ar/', 'Privada', 'Zona Oeste', 'mesadeentradas@unimoron.edu.ar'),
(69, 'Universidad Abierta Interamericana (S. ZO - Castelar)', 'Gdor. Inocencio Arias 3550', 'https://goo.gl/maps/4Yzkw7izud9YKy876', 'Castelar', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste', 'ingreso@uai.edu.ar'),
(70, 'Universidad Abierta Interamericana (S. ZO - Ituzaingo)', 'Gral. Alvear 1075', 'https://goo.gl/maps/qP7B6eaCcDfbGVFU8', 'Ituzaingo', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste', 'ingreso@uai.edu.ar'),
(71, 'Universidad Abierta Interamericana (S. ZO - Ituzaingo 2)', 'Av. 24 de Octubre 569', 'https://goo.gl/maps/Moq5GF9TtjcAJyLTA', 'Ituzaingo', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste', 'ingreso@uai.edu.ar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `mail_user` varchar(255) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `password_user` varchar(255) NOT NULL,
  `date_user` varchar(255) NOT NULL,
  `direction_user` varchar(255) NOT NULL,
  `tel_user` int(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `verificado` int(11) DEFAULT NULL,
  `id_universidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `verificationcode`
--

CREATE TABLE `verificationcode` (
  `user_code` int(11) NOT NULL,
  `mail_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id_carrera`),
  ADD KEY `id_departamento` (`id_departamento`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id_departamento`),
  ADD KEY `id_universidad` (`id_universidad`);

--
-- Indices de la tabla `favoritas`
--
ALTER TABLE `favoritas`
  ADD PRIMARY KEY (`id_favorita`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_universidad` (`id_universidad`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id_solicitud`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_universidad` (`id_universidad`);

--
-- Indices de la tabla `universidades`
--
ALTER TABLE `universidades`
  ADD PRIMARY KEY (`id_universidad`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_universidad` (`id_universidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id_carrera` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id_departamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `favoritas`
--
ALTER TABLE `favoritas`
  MODIFY `id_favorita` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `universidades`
--
ALTER TABLE `universidades`
  MODIFY `id_universidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD CONSTRAINT `carreras_ibfk_1` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`);

--
-- Filtros para la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD CONSTRAINT `departamentos_ibfk_1` FOREIGN KEY (`id_universidad`) REFERENCES `universidades` (`id_universidad`);

--
-- Filtros para la tabla `favoritas`
--
ALTER TABLE `favoritas`
  ADD CONSTRAINT `favoritas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `favoritas_ibfk_2` FOREIGN KEY (`id_universidad`) REFERENCES `universidades` (`id_universidad`);

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`id_universidad`) REFERENCES `universidades` (`id_universidad`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_universidad`) REFERENCES `universidades` (`id_universidad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
