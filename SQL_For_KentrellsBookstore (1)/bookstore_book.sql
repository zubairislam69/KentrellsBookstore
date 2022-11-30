CREATE DATABASE  IF NOT EXISTS `bookstore` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bookstore`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bookstore
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `bookID` int(4) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(25) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `publication_date` varchar(10) NOT NULL,
  `publisherID` int(4) NOT NULL,
  `genre` varchar(60) DEFAULT NULL,
  `age_level` varchar(5) NOT NULL,
  `src` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bookID`),
  UNIQUE KEY `ISBN` (`isbn`),
  KEY `publisherID` (`publisherID`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'978-3-0487-2720-7','I AM NUMBER FOUR',13.37,'2010-08-03',1,'Young Adult, Science Fiction','13+','/images/img-1.jpg'),(2,'978-2-9724-1458-0','The Lost Hero',12.99,'2010-10-12',2,'Fantasy, Greek and Roman Mythology, Young Adult Fiction','10-14','/images/img-2.jpg'),(3,'978-2-6503-4657-8','Harry Potter and the Deathly Hallows',17.99,'2007-07-21',3,'Fantasy','11-15','/images/img-3.jpg'),(4,'978-2-8431-5389-1','The Maze Runner',14.99,'2009-10-06',4,'Fantasy','12+','/images/img-4.jpg'),(5,'978-1-7528-7579-5','Practical Magic',22.63,'1995-06-01',5,'Fiction','18+','/images/img-5.jpg'),(6,'978-0-4641-0708-8','How The Grinch Stole Christmas!',25.99,'1957-11-24',6,'Children\'s literature, Christmas Story','05-09','/images/img-6.jpg'),(7,'978-0-1755-8076-7','The Good, the Bad, and the Spooky',13.99,'2021-7-27',2,'Comedy, Humor, General Fiction','06-10','/images/img-7.jpg'),(8,'978-9-8169-1571-5','Harry Potter and the Philosopher\'s Stone',14.84,'1997-06-27',3,'Fantasy','12+','/images/img-8.jpg'),(9,'978-9-7267-7991-9','Llama Llama I Love You',7.99,'2014-12-26',6,'Valentines Day','01-03','/images/img-9.jpg'),(10,'978-4-4471-6812-7','Tis the Season: A Holiday Celebration',11.87,'2019-04-29',6,'Christmas Story','07-08','/images/img-10.jpg'),(11,'978-8-4827-2885-8','Harry Potter and the Chamber Of Secrets',14.95,'1998-07-08',3,'Fantasy','12+','/images/img-11.jpg'),(12,'978-2-4535-0261-4','Harry Potter and the Prisoner of Azkaban',14.35,'1999-07-08',3,'Fantasy','12+','/images/img-12.jpg'),(13,'978-0-0749-7335-6','Harry Potter and the Goblet Of Fire',12.36,'2000-07-08',3,'Fantasy','12+','/images/img-13.jpg'),(14,'978-0-6467-3236-7','Harry Potter and the Order of the Phoenix',13.48,'2001-06-23',3,'Fantasy','12+','/images/img-14.jpg'),(15,'978-6-7885-3150-9','Harry Potter and the Half-Blood Price',15.36,'2005-07-16',3,'Fantasy','12+','/images/img-15.jpg'),(16,'978-0-3073-4661-2','World War Z',15.36,'2007-10-16',7,'Horror, Survival, Apocalyptic','16+','/images/img-16.jpg'),(17,'978-0-3808-0734-5','Coraline',12.99,'2002-07-2',1,'Horror','12+','/images/img-17.jpg'),(18,'978-1-6152-3924-5','The Graveyard Book',7.99,'2018-12-24',1,'Horror','12+','/images/img-18.jpg'),(19,'978-0-0624-5936-7','The Ocean at the End of the Lane',7.99,'2013-06-18',8,'Horror, Dark Fantasy','13+','/images/img-19.jpg'),(20,'978-0-3077-4365-7','The Shining',8.99,'2012-06-26',9,'Horror, Thriller','16+','/images/img-20.jpg'),(21,'978-0-3077-4367-1','Salems Lot',11.99,'2011-12-27',9,'Horror','16+','/images/img-21.jpg'),(22,'978-1-5011-5674-8','Misery: A Novel',10.95,'2017-02-28',9,'Horror','14+','/images/img-22.jpg'),(23,'978-0-4399-6707-5','Smelly Socks',7.95,'2004-02-01',10,'Comedy, Humor, Children\'s Literature','3-8','/images/img-23.jpg'),(24,'978-0-5905-1694-5','Mmm, Cookies!',6.99,'2000-03-01',10,'Comedy, Humor, Children\'s Literature','3-8','/images/img-24.jpg'),(25,'978-0-5905-1450-7','We Share Everything',7.11,'1999-08-01',10,'Comedy, Humor, Children\'s Literature','3-8','/images/img-25.jpg'),(26,'978-0-4862-6865-1','A Christmas Carol',6.14,'1991-06-01',11,'Fairy tale, Children\'s literature, Novella, Christmas Story','3-8','/images/img-26.jpg'),(27,'978-0-4862-6865-0','A Christmas Tree',5.99,'1991-11-22',11,'Fairy tale, Children\'s literature, Novella, Christmas Story','3-8','/images/img-27.jpg'),(28,'978-1-3385-4695-8','Geronimo Stilton Classic Tales: A Christmas Carol',16.99,'2019-10-01',10,'Fairy tale, Children\'s literature, Christmas Story','6+','/images/img-28.jpg'),(29,'978-7-7822-8507-8','The Christmas Pig',16.99,'2021-10-21',10,'Fairy tale, Children\'s literature, Christmas Story','3-8','/images/img-29.jpg'),(30,'978-1-3387-3287-0','The Ickabog',19.99,'2021-10-10',10,'Children\'s literature, Christmas Story, Science Fiction','8+','/images/img-30.jpg'),(31,'978-1-6296-7156-7','The First Fighter Pilot',17.99,'2010-06-09',12,'History, War, Non-Fiction','12+','/images/img-31.jpg'),(32,'978-1-6296-7238-0','The First Fighter Pilot',7.99,'2022-05-05',12,'History, War, Non-Fiction','12+','/images/img-32.jpg'),(33,'978-1-4521-4003-2','Dead Mountain',8.99,'2022-05-05',13,'History, Survival, Non-Fiction','12+','/images/img-33.jpg'),(34,'978-0-7710-6035-9','The Spy and the Traitor',18.99,'2019-08-06',14,'History, Espionage, Non-Fiction','13+','/images/img-34.jpg'),(35,'978-0-2411-8686-2','Rogue Heroes: The History of the SAS',14.99,'2017-01-01',14,'History, War, Espionage, Non-Fiction','13+','/images/img-35.jpg'),(36,'978-0-07352-3318-8','Vimy: The Battle and the Legend',13.99,'2018-03-06',15,'Canadian History, War, Non-Fiction','14+','/images/img-36.jpg'),(37,'978-0-7352-3528-1','The Secret History of Soldiers',12.59,'2019-10-22',15,'Canadian History, War, Non-Fiction','14+','/images/img-37.jpg'),(38,'978-1-4431-1318-2','Finding Christmas',6.92,'2017-09-25',10,'Comedy, Humor, Children\'s Literature, Christmas Story','3-8','/images/img-38.jpg'),(39,'978-1-4431-7582-1','Sounds Like Christmas',8.99,'2019-10-01',10,'Comedy, Humor, Children\'s Literature, Christmas Story','3-8','/images/img-39.jpg'),(40,'978-1-4431-4617-3','So Much Snow!',7.55,'2016-09-01',10,'Comedy, Humor, Children\'s Literature, Christmas Story','3-8','/images/img-40.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 23:17:05
