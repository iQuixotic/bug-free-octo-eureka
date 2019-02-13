DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `employees` VALUES ('1', 'Ip Mann', '	ip@yahoo.com', 'President', '567.565.0697');
INSERT INTO `employees` VALUES ('2', 'Canada Sky', 'cancan75@yahoo.com', 'Vice President', '950.967.4556');
INSERT INTO `employees` VALUES ('17', 'Benjamin Kennedy', 'benj@yahoo.com', 'Owner', '456.767.8888');
INSERT INTO `employees` VALUES ('4', 'Jeremy Honover', 'polly@gmail.com', 'Salesman', '777.888.0596');
INSERT INTO `employees` VALUES ('5', 'Berry Griffin', 'berry@gmail.com', 'Salesman', '777.950.6879');
INSERT INTO `employees` VALUES ('6', 'Corgie Thomas', 'thomas78@gmail.com', 'Oil Tech', '455.547.5464');
INSERT INTO `employees` VALUES ('7', 'Trump Collin', 'realTrump777@gmail.com', 'Oil Tech', '978.697.9409');
INSERT INTO `employees` VALUES ('11', 'Terimal Traversy', 'teetee143@gmail.com', 'Head Mechanic', '495.405.4768');
INSERT INTO `employees` VALUES ('15', 'Tony Jefferson', 'jefferson_tony@gmail.com', 'Mechanic', '576.596.4958');
