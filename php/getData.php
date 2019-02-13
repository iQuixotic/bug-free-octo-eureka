<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/employee_cards/php/connection.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/employee_cards/php/Employee.php';
    
    /* $mysql is ready */

$query = "SELECT * FROM employees";
// WHERE id = '" . $_POST["id"] . "'";
$result = mysqli_query($mysqli, $query);

// class Sql {
//     public $name;
//     public $id;
//     public function __construct() {
//         $this->id = $id;
//         $this->name = $name;
//     }
    
// }
$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    // $myEmp = new stdClass();
    // $myEmp->id = $row['id'];
    // $myEmp->name = $row['name'];
    $rows[] = $row['name'];

    
    // echo "id: {$row['id']} name: {$row['name']} ";
}    
echo json_encode($rows);



// function getEmployeeById($id) {
    // while($row = mysqli_fetch_assoc($result)) {
    //     $data['id'] = $row['id'];
    //     $data['name'] = $row['name'];
    //     $data['position'] = $row['position'];
    //     $data['phone']  = $row['phone'];
    // }
// }



// while($row = mysqli_fetch_array($result)) {
//     $rows[] = "id: {$row['id']} name: {$row['name']} ";
//     // echo $rows;
//     echo json_encode($rows);
// }    
