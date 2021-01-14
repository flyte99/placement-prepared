
//header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
//header("Content-Type: application/json; charset=UTF-8");
//$rest_json = file_get_contents("php://input");
//$_POST = json_decode($rest_json, true);
//$conn = mysqli_connect("localhost", "zn011920_admin", "", "zn011920_e_learning_system");
//$query = "INSERT INTO userfeedback(name,email, feedback) VALUES('" . $_POST['name'] . "','" . $_POST['email'] . "','" . $_POST['feedback'] . "')";
//$result = @mysqli_query($conn, $query);
//if ($result) {
//    echo json_encode(["sent" => 1,]);
//} else {
//    echo json_encode(["sent" => 0,]);
//}
//?>

<?php
$servername = "localhost:3306";
$database = "zn011920_e_learning_system";
$username = "zn011920_admin";
$password = "Iv89j9#PW0^D";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo “Connected successfully”;

mysqli_close($conn);

?>
