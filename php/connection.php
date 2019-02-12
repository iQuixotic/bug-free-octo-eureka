<?php

include 'secret.php';

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);


 // App root
 define('APPROOT', dirname(dirname(__FILE__)));

//  // URL root
//  define('URLROOT', 'http://localhost/prep_files/php/auth');

//  // Site name
//  define('SITENAME', 'Blogger');

//  // App version
//  define('APPVERSION', '1.0.0');