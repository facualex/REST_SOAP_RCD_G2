<?php
require __DIR__ . "/../../bootstrap.php";
require __DIR__ . "/../../RutFunctions.php";

// Access Control Request Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$rut = null;
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// No sirve, pq la ruta puede ser dinamica
$uri = explode( '/', $uri);

// Evaluar uri
if ($uri[1] !== 'api' && $uri[2] !== 'rest') {
    header("HTTP/1.1 404 Not Found");
    exit();
}

$rutParam = key(array_slice($uri, -1, 1, true));

if (!isset($uri[4])) {
    header("HTTP/1.1 400 Bad Request");

    echo json_encode(array(
        'success' => false,
        'error' => 'El rut es un parámetro requerido'
    ));
} else {
    $rut = (string) $uri[$rutParam];
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $rutObject = new Functions\Rut\RutFunctions($rut);

    echo json_encode(array(
        'success' => true,
        'data' => $rutObject->getVerifierDigit()
    ));
}
