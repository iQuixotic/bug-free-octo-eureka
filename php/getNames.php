<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/employee_cards/php/connection.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/employee_cards/php/Employee.php';
    
/* $mysql is ready */
$query = "SELECT * FROM employees";
$result = mysqli_query($mysqli, $query);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    $rows[] = array(
    'id' => $row['id'], 
    'name' => $row['name']
    );
}    

echo json_encode($rows);