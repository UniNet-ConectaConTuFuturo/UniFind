-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2023 a las 02:22:34
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

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
  `zona_universidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `universidades`
--

INSERT INTO `universidades` (`id_universidad`, `nombre_universidad`, `direccion_universidad`, `maps_universidad`, `localidad_universidad`, `web_universidad`, `gestion_universidad`, `zona_universidad`) VALUES
(1, 'Universidad Nacional de La Defensa', 'Maipu 262', 'https://goo.gl/maps/QWR84PeaJ9zBuh3t6', 'Monserrat', 'https://www.undef.edu.ar', 'Publica', 'Capital Federal'),
(2, 'Instituto Universitario de la Policia Federal Argentina', 'Rosario 532', 'https://goo.gl/maps/2CRgJJw2zZQUsPdEA', 'Caballito', 'https://www.iupfa.edu.ar', 'Publica', 'Capital Federal'),
(3, 'Instituto Universitario Nacional de Derechos Humanos Madres de Plaza Mayo', 'Defensa 119', 'https://goo.gl/maps/WVBLWMrJ9tCS7ixw6', 'Monserrat', 'http://www.iunma.edu.ar', 'Publica', 'Capital Federal'),
(4, 'Facultad Latinoamericana de Ciencias Sociales', 'Tucuman 1966', 'https://goo.gl/maps/3NK1RTNh5irT3CY6A', 'Balvanera', 'https://www.flacso.org.ar', 'Publica', 'Capital Federal'),
(5, 'Instituto de Ense?anza Superior del Ejercito', 'Av. Cabildo 65', 'https://goo.gl/maps/HC6dMtgvZH4ihcBK7', 'Palermo', 'https://fe.undef.edu.ar', 'Publica', 'Capital Federal'),
(6, 'Instituto Universitario Naval', 'Av. Antartida Argentina 425', 'https://goo.gl/maps/e2aZhEeScAA34SE49', 'Puerto Madero', 'https://www.universidades.com.ar/instituto-universitario-naval', 'Publica', 'Capital Federal'),
(7, 'Instituto Universitario de Gendarmeria Nacional', 'Av. Paseo Colon 533', 'https://goo.gl/maps/5dF4rz7Mgykt46cM9', 'Monserrat', 'https://www.iugna.edu.ar', 'Publica', 'Capital Federal'),
(8, 'Universidad Nacional de Las Artes', 'Azcuenaga 1129', 'https://goo.gl/maps/ru5yiaZaGxrMMxAA6', 'Barrio Norte, Recoleta', 'https://una.edu.ar', 'Publica', 'Capital Federal'),
(9, 'Universidad Pedagogica Nacional', 'Piedras 1080', 'https://goo.gl/maps/irD3RWVMaU6vdNbC7', 'San Telmo', 'https://unipe.edu.ar', 'Publica', 'Capital Federal'),
(10, 'Fundaci?n Barcelo - Instituto Universitario Ciencias de la Salud ', 'Av. Gral. Las Heras 1907', 'https://goo.gl/maps/KMEXhq34QLwAjfC66', 'Recoleta', 'https://www.barcelo.edu.ar', 'Publica', 'Capital Federal'),
(11, 'Instituto Universitario CEMIC', 'Valdenegro 4337', 'https://goo.gl/maps/Fzp3W61Pc4KuBvd48', 'Saavedra', 'https://www.cemic.edu.ar/instituto-universitario.php', 'Publica', 'Capital Federal'),
(12, 'Universidad Favaloro', 'Av. Entre R?os 495', 'https://goo.gl/maps/Preo4CpTj3KAg2CXA', 'Monserrat', 'https://www.favaloro.edu.ar', 'Privada', 'Capital Federal'),
(13, 'ESEADE - Universidad de Emprendedores', 'Uriarte 2472', 'https://goo.gl/maps/x4Dpb8xvM9kZBXry5', 'Palermo', 'https://www.eseade.edu.ar', 'Privada', 'Capital Federal'),
(14, 'Universidad Catolica Argentina', 'Av. Alicia Moreau de Justo 1400', 'https://goo.gl/maps/DhoPdoaLgJkePUAM9', 'Puerto Madero', 'https://uca.edu.ar/es/home', 'Privada', 'Capital Federal'),
(15, 'Universidad John F. Kennedy', 'Parral 221', 'https://goo.gl/maps/gbWiUaf6BSXkMGYo7', 'Parque Centenario', 'https://www.kennedy.edu.ar', 'Privada', 'Capital Federal'),
(16, 'Universidad del Museo Social Argentino', 'Av. Corrientes 1723', 'https://goo.gl/maps/CscRhbEdpWXTrC2s8', 'Monserrat', 'https://www.umsa.edu.ar', 'Privada', 'Capital Federal'),
(17, 'Universidad Maimonides', 'Hidalgo 775', 'https://goo.gl/maps/wpPfM3AcmiqiEXGTA', 'Caballito', 'https://www.maimonides.edu', 'Privada', 'Capital Federal'),
(18, 'Universidad Metropolitana para la Educaci?n y el Trabajo', 'Sarmiento 2037', 'https://goo.gl/maps/RoXyk1WM4UoYMo2A7', 'Balvanera', 'https://umet.edu.ar', 'Privada', 'Capital Federal'),
(19, 'Universidad Torcuato Di Tella', 'Av. Pres. Figueroa Alcorta 7350', 'https://goo.gl/maps/n39ycYATHuftfjEt9', 'Nunez', 'https://www.utdt.edu', 'Privada', 'Capital Federal'),
(20, 'Universidad del Cine', 'Dr. Jose Modesto Giuffra 330', 'https://goo.gl/maps/UBJja4abgCqauNRL9', 'San Telmo', 'https://ucine.edu.ar', 'Privada', 'Capital Federal'),
(21, 'Universidad del CEMA', 'Av. Cordoba 374', 'https://goo.gl/maps/b57iRDQhUuoAYkvv9', 'Monserrat', 'https://ucema.edu.ar', 'Privada', 'Capital Federal'),
(22, 'Instituto Universitario del Hospital Italiano', 'Potosi 4234', 'https://goo.gl/maps/64Waxfe385CX5wPz9', 'Almagro', 'https://instituto.hospitalitaliano.edu.ar', 'Privada', 'Capital Federal'),
(23, 'Instituto Universitario de Salud Mental', 'Maure 1850', 'https://goo.gl/maps/UxDRazPs41rYg3CF9', 'Palermo', 'https://www.iusam.edu.ar/', 'Privada', 'Capital Federal'),
(24, 'Universidad ISALUD', 'Venezuela 931', 'https://goo.gl/maps/rfco4qHBGJPxEXLX9', 'Monserrat', 'https://www.isalud.edu.ar/inicio', 'Privada', 'Capital Federal'),
(25, 'Instituto Universitario IDEA', 'Viamonte 570', 'https://goo.gl/maps/oQxroMx4VNx738xT6', 'Monserrat', 'https://www.idea.org.ar/', 'Privada', 'Capital Federal'),
(26, 'Escuela Argentina de Negocios', 'Av. Cordoba 1690', 'https://goo.gl/maps/J5a2TYJq4sqoHBnF7', 'Monserrat', 'https://front.ean.edu.ar/', 'Privada', 'Capital Federal'),
(27, 'Instituto Universitario River Plate', 'Av. Pres. Figueroa Alcorta 7597', 'https://goo.gl/maps/5oMPo2DY7wWa8LMQ9', 'Nunez', 'https://iuriverplate.edu.ar/', 'Privada', 'Capital Federal'),
(28, 'Universita Di Bologna', 'Marcelo Torcuato de Alvear 1149', 'https://goo.gl/maps/NxJ8sjXuxy6wVX6h9', 'Monserrat', 'https://ba.unibo.it/es', 'Privada', 'Capital Federal'),
(29, 'Instituto Universitario de Seguridad Maritima', 'Corrientes 180', 'https://goo.gl/maps/8HAN72GD2rLfL9Yv5', 'Olivos', 'https://iusm.edu.ar', 'Publica', 'Zona Norte'),
(30, 'Universidad Nacional General Sarmiento', 'Juan Maria Gutierrez 1150', 'https://goo.gl/maps/CeNpBqBo4usfGLqY7', 'Los Polvorines', 'https://www.ungs.edu.ar/', 'Publica', 'Zona Norte'),
(31, 'Universidad Nacional del General San Martin', 'Av. 25 de Mayo 1169', 'https://goo.gl/maps/WB7ETyV3wAbjMpxYA', 'San Mart?n', 'https://www.unsam.edu.ar/', 'Publica', 'Zona Norte'),
(32, 'Universidad Nacional Raul Scalabrini Ortiz', 'Colectora Panamericana 1925', 'https://goo.gl/maps/amhMeuYLbxrj291A7', 'Boulogne', 'https://www.unso.edu.ar/', 'Publica', 'Zona Norte'),
(33, 'Universidad de San Andres', 'Vito Dumas 284', 'https://goo.gl/maps/x5qbQGiLgpNeK7dg6', 'Victoria', 'https://www.udesa.edu.ar/', 'Privada', 'Zona Norte'),
(34, 'Universidad Pedagogica UNIPE', 'Av. Dr. Honorio Pueyrredon 1837', 'https://goo.gl/maps/QpfA7wqwPqNLM7ZS8', 'Villa Rosa', 'https://unipe.edu.ar/', 'Privada', 'Zona Norte'),
(35, 'Universidad de San Isidro Dr. Placido Marin', 'Av. del Libertador 17175', 'https://goo.gl/maps/6DeXXh8TYwMM98p59', 'Beccar', 'https://usi.edu.ar/', 'Privada', 'Zona Norte'),
(36, 'IAE Business School - Universidad Austral', 'Mariano Acosta y Ruta Prov. 8', 'https://goo.gl/maps/eJM8VFiinKM5WcFA6', 'Pilar', 'https://www.iae.edu.ar/', 'Privada', 'Zona Norte'),
(37, 'Universidad del Salvador', 'Champagnat 1599', 'https://goo.gl/maps/nLhE14BAGC7T8QcM9', 'Pilar', 'https://pilar.usal.edu.ar/', 'Privada', 'Zona Norte'),
(38, 'Universidad de Flores ', 'Belgrano 1528', 'https://goo.gl/maps/hxro7bVYP5KQW9ct9', 'San Miguel', 'https://www.uflo.edu.ar/', 'Privada', 'Zona Norte'),
(39, 'Escuela Argentina de Negocios (S. ZN)', 'Av. Santa Fe 2162', 'https://goo.gl/maps/DDLguRxQXvdtQYqU8', 'Martinez', 'https://front.ean.edu.ar/', 'Privada', 'Zona Norte'),
(40, 'Universidad Austral', 'Mariano Acosta 1611', 'https://goo.gl/maps/ZjzLwbqHJVKX8fBS8', 'Pilar', 'https://www.austral.edu.ar/', 'Privada', 'Zona Norte'),
(41, 'Universidad Abierta Interamericana (S. ZN)', 'Solis 1', 'https://goo.gl/maps/njCWxENbswV1HWxW7', 'Tigre', 'https://uai.edu.ar/', 'Privada', 'Zona Norte'),
(42, 'Universidad Nacional Arturo Jauretche', 'Av. Calchaqui 6200', 'https://goo.gl/maps/zvPVdTkTqwnn5DFN6', 'Florencio Varela', 'https://www.unaj.edu.ar/', 'Publica', 'Zona Sur'),
(43, 'Universidad Nacional de Avellaneda', 'Espa?a 350', 'https://goo.gl/maps/3HJmsUi75WuBVENX7', 'Avellaneda', 'https://undav.edu.ar/index.php', 'Publica', 'Zona Sur'),
(44, 'Universidad Nacional de Lomas de Zamora', 'Av. Juan XXIII', 'https://goo.gl/maps/dW479c2eDciiqNiu5', 'Lomas de Zamora', 'https://www.unlz.edu.ar/', 'Publica', 'Zona Sur'),
(45, 'Universidad Provincial de Ezeiza', 'Alfonsina Storni 41', 'https://goo.gl/maps/fhSdtF4H3r7gzW8BA', 'Ezeiza', 'https://web.upe.edu.ar/', 'Publica', 'Zona Sur'),
(46, 'Universidad Nacional de Quilmes', 'Roque Saenz Pe?a 352', 'https://goo.gl/maps/k1XprsEaeBf7Z1Pc6', 'Bernal', 'http://www.unq.edu.ar/', 'Publica', 'Zona Sur'),
(47, 'Universidad Nacional de Lanus', '29 de septiembre 3901', 'https://goo.gl/maps/5fMU58aNz9gDztVN8', 'Remedios de Escalada', 'http://www.unla.edu.ar/', 'Publica', 'Zona Sur'),
(48, 'Universidad Notarial Argentina', 'Av. 51 435', 'https://goo.gl/maps/bGzZBDT2GVJ4RXS26', 'La Plata', 'http://www.universidadnotarial.edu.ar/', 'Privada', 'Zona Sur'),
(49, 'Universidad Nacional de La Matanza', 'Florencio Varela 1903', 'https://goo.gl/maps/zLL49LK3QhNDDyVX7', 'San Justo', 'https://www.unlam.edu.ar/', 'Publica', 'Zona Oeste'),
(50, 'Universidad Nacional de Moreno', 'Av. Bartolome Mitre 1891', 'https://goo.gl/maps/cyHZuf7jsRR9neYCA', 'Moreno', 'http://www.unm.edu.ar/', 'Publica', 'Zona Oeste'),
(51, 'Universidad Nacional de Jose C. Paz', 'Leandro N. Alem 4731', 'https://goo.gl/maps/SLmu1igcEwQvUAdD6', 'Jos? C. Paz', 'https://www.unpaz.edu.ar/', 'Publica', 'Zona Oeste'),
(52, 'Universidad Tecno?gica Nacional - Regional Haedo', 'Paris 532', 'https://goo.gl/maps/cowQN6QENXEZdTy47', 'Haedo', 'https://www.frh.utn.edu.ar/', 'Publica', 'Zona Oeste'),
(53, 'Universidad Nacional de Hurlingham', 'Manuel Origone 151', 'https://goo.gl/maps/PJP3sJeYjksYXAXt8', 'Villa Tesei', 'https://unahur.edu.ar/', 'Publica', 'Zona Oeste'),
(54, 'Universidad de Moron', 'Gral. Machado 854', 'https://goo.gl/maps/7VoTxLxytr6frrLNA', 'Mor?n', 'https://www.unimoron.edu.ar/', 'Privada', 'Zona Oeste'),
(55, 'Universidad Abierta Interamericana (S. ZO - Castelar)', 'Gdor. Inocencio Arias 3550', 'https://goo.gl/maps/4Yzkw7izud9YKy876', 'Castelar', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste'),
(56, 'Universidad Abierta Interamericana (S. ZO - Ituzaingo)', 'Gral. Alvear 1075', 'https://goo.gl/maps/qP7B6eaCcDfbGVFU8', 'Ituzaingo', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste'),
(57, 'Universidad Abierta Interamericana (S. ZO - Ituzaingo 2)', 'Av. 24 de Octubre 569', 'https://goo.gl/maps/Moq5GF9TtjcAJyLTA', 'Ituzaingo', 'https://uai.edu.ar/', 'Privada', 'Zona Oeste');

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
  MODIFY `id_universidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

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
