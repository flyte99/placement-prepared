<?php
require_once 'config.php';
$a = file_get_contents("php://input");
if (isset($a) && !empty($a)) {
    $request = json_decode($a);
    $sql = 'INSERT INTO users(name, email, university) VALUES(?, ?, ?)';
    $stmt = $conn->stmt_init();
    if ($stmt->prepare($sql)) {
        $stmt->bind_param('sss', $param_name, $param_email, $param_university);
        $param_name = $request->name;
        $param_email = $request->email;
        $param_university = $request->university;
        $stmt->execute();
    }
    $stmt->close();
}
echo $a;
$conn->close();
?>
