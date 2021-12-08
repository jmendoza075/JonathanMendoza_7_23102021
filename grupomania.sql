-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: grupomania
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` text,
  `date_cre` date NOT NULL,
  `publication_id` int NOT NULL,
  `utilisateur_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `publication_id` (`publication_id`),
  KEY `utilisateur_id` (`utilisateur_id`),
  CONSTRAINT `commentaire_ibfk_1` FOREIGN KEY (`publication_id`) REFERENCES `publication` (`id`) ON DELETE CASCADE,
  CONSTRAINT `commentaire_ibfk_2` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaire`
--

LOCK TABLES `commentaire` WRITE;
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
INSERT INTO `commentaire` VALUES (51,'John\'s comment','2021-12-08',125,44),(52,'In eu massa in ante faucibus placerat in imperdiet nunc. Quisque porta nibh vitae nisl commodo ullamcorper','2021-12-08',125,149),(53,'Curabitur iaculis, magna pharetra porttitor porta, lectus massa consectetur elit, nec luctus nunc lacus a odio. Aliquam est du','2021-12-08',125,45),(54,'Nullam ornare nunc pulvinar sagittis luctus. Pellentesque vitae diam magna. Cras eu facilisis ex. Nam auctor quis dolor sit amet ','2021-12-08',127,148),(55,'Sed pellentesque pretium quam, in eleifend orci hendrerit a. Donec porta nibh eget felis maximus vehicula. Aliquam felis eros, finibus dapibus faucibus non','2021-12-08',128,150);
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publication`
--

DROP TABLE IF EXISTS `publication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `date_cre` date NOT NULL,
  `date_mod` date DEFAULT NULL,
  `utilisateur_id` int NOT NULL,
  `comment` text,
  `type` enum('image','video') DEFAULT NULL,
  `text` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `utilisateur_id` (`utilisateur_id`),
  CONSTRAINT `publication_ibfk_1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publication`
--

LOCK TABLES `publication` WRITE;
/*!40000 ALTER TABLE `publication` DISABLE KEYS */;
INSERT INTO `publication` VALUES (125,'Lorem ipsum dolor sit amet, consectetur adipiscing elit.','2021-12-08',NULL,134,NULL,NULL,'Nam maximus eros vel finibus euismod. Etiam ultrices, leo nec egestas scelerisque, lacus dolor luctus risus, eu pretium mi mauris vitae sapien. Sed vel faucibus magna. Pellentesque eget dui nunc','http://localhost:8081/middleware/media/icon.png1638969874648.png','Jonathan'),(126,'Vestibulum varius dapibus efficitur. In rhoncus dapibus magna,','2021-12-08',NULL,149,NULL,NULL,'Nam sodales risus at gravida congue. Integer volutpat volutpat magna, ac convallis lacus vehicula ac. Morbi a sagittis tellus. Morbi pharetra facilisis est eget laoreet. Nunc dolor massa, porta at enim id, vehicula tempus augue.','http://localhost:8081/middleware/media/slide2.jpg1638977927082.jpg','admin2'),(127,'Maecenas eu libero sed enim imperdiet maximus','2021-12-08',NULL,45,NULL,NULL,'Proin aliquet, arcu vel convallis suscipit, mauris metus dignissim dolor, condimentum accumsan lorem lacus eu nunc. Sed a eros non dolor auctor ullamcorper vel non ipsum. Aenean efficitur dui arcu, elementum varius nunc scelerisque nec. Aenean erat mi, elementum ','http://localhost:8081/middleware/media/RailImage.jpg1638978560625.jpg','Robert'),(128,'Curabitur in molestie lacus. Fusce ut molestie nisl, nec porta nunc. Duis auctor orci eu est efficitur, sed tincidunt sapien aliquet.','2021-12-08',NULL,150,NULL,NULL,'Maecenas eu libero sed enim imperdiet maximus. Proin aliquet, arcu vel convallis suscipit, mauris metus dignissim dolor, condimentum accumsan lorem lacus eu nunc. Sed a eros non dolor auctor ullamcorper vel non ipsum. Aenean efficitur dui arcu, elementum varius nunc scelerisque nec. Aenean erat mi, elementum vitae cursus eget, gravida sed lectus. Duis at mollis sem, sit amet varius tellus','http://localhost:8081/middleware/media/slide1.jpg1638980135254.jpg','Jay'),(129,'Aenean ornare scelerisque diam, euismod aliquet nisl posuere sit amet. Quisque ultricies ex a ultricies maximus.','2021-12-08','2021-12-08',150,NULL,NULL,'te ullamcorper vulputate. Curabitur in molestie lacus. Fusce ut molestie nisl, nec porta nunc. Duis auctor orci eu est efficitur, sed tincidunt sapien aliquet.','http://localhost:8081/middleware/media/icon.png1638981229024.png','Jay');
/*!40000 ALTER TABLE `publication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (44,'Snow','John','ppp@ppp.com','$2b$10$wncl55YVSWqjq3/6o8MLLul6vn7hgb/j4.EEDCQBwmckop8HJ9PYy',NULL),(45,'Smith','Robert','newuser@gmail.com','$2b$10$LjgOtrT5KBcY3.N20S0xoe4fiugx2z//7C9bwHpRGwQl0E3uIn1T2',NULL),(134,'Mendoza','Jonathan','jmendoza075@gmail.com','$2b$10$P5WdsH7qGY1Txr0cs61GLulZVCt17NBVX967jsaD5p8U4Gs6eVA5a','admin'),(148,'adminNom','adminPrenom','admin@admin.com','$2b$10$UU4oMUrHchbAfarU3RRgYuKhTvHelAF72O.qdlpHZJEEVx/.qx9mO','admin'),(149,'admin2','admin2','admin2@admin.com','$2b$10$1ZIU6/GrENo6ltTUOFLeYeDufHCfm/zKM5kpuK9u7UXgMe6tO9rZO','admin'),(150,'Norman','Jay','jay@jay.com','$2b$10$/LRuwqp7O7JBf64qHrW6Oe2tnt/DKebqiK5H9lOZbQqbuSst0Ozpy',NULL);
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-08 18:17:58
