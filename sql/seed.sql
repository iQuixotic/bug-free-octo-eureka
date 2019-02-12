DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO `employees` VALUES ('Ip Mann', '	ip@yahoo.com', 'President', '567.565.0697');
INSERT INTO `employees` VALUES ('Canada Sky', 'cancan75@yahoo.com', 'Vice President', '950.967.4556');
INSERT INTO `employees` VALUES ('Benjamin Kennedy', 'benj@yahoo.com', 'Owner', '456.767.8888');
INSERT INTO `employees` VALUES ('Jeremy Honover', 'polly@gmail.com', 'Salesman', '777.888.0596');
INSERT INTO `employees` VALUES ('Berry Griffin', 'berry@gmail.com', 'Salesman', '777.950.6879');
INSERT INTO `employees` VALUES ('Corgie Thomas', 'thomas78@gmail.com', 'Oil Tech', '455.547.5464');
INSERT INTO `employees` VALUES ('Trump Collin', 'realTrump777@gmail.com', 'Oil Tech', '978.697.9409');
