<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/employee_cards/php/connection.php';
    require_once $_SERVER['DOCUMENT_ROOT'] . '/employee_cards/php/Employee.php';
    
    /* $mysql is ready */

$query = "SELECT * FROM employees";
// WHERE id = '" . $_POST["id"] . "'";
$result = mysqli_query($mysqli, $query);

while($row = mysqli_fetch_assoc($result)) {
    $arr = array(
        $data['id'] => $row['id'];
        $data['name'] = $row['name'];
    );
    echo json_encode($arr);
}    



// function getEmployeeById($id) {
    // while($row = mysqli_fetch_assoc($result)) {
    //     $data['id'] = $row['id'];
    //     $data['name'] = $row['name'];
    //     $data['position'] = $row['position'];
    //     $data['phone']  = $row['phone'];
    // }
// }