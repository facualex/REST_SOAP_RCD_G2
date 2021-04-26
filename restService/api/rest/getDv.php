<?php
require "../bootstrap.php";

// Access Control Request Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$rut = null;
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

if ($uri[1] !== 'api' && $uri[2] !== 'rest') {
    header("HTTP/1.1 404 Not Found");
    exit();
}

if (!isset($uri[3])) {
    echo json_encode(array(
        'success' => false,
        'error' => 'El rut es un parámetro requerido'
    ));
} else {
    $rut = (string) $uri[3];
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $rutObject = new RutFunctions($rut);

    echo json_encode(array(
        'success' => true,
        'data' => $rutObject.getVerifierDigit()
    ));

}
