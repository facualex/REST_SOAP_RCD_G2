<?php
require __DIR__ . "/../../bootstrap.php";
require __DIR__ . "/../../NameFunctions.php";

// Access Control Request Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// TODO: ASEGURARNOS DE QUE SOLO SE PUEDA HACER POST A ESTA RUTA 
// Ambos meotodos seran post a la api, entonces tiene que haber un archivo centralizado
// en donde se evalue los parametros que se estan pasando.
// Evaluar rutas. Si es post a /api/rest/getDv -> obtener dv
// Si es post a /api/rest/splitNames -> hacer split names

$_POST = json_decode(file_get_contents("php://input"), true);
$namesObject = new Functions\Names\NameFunctions($_POST["names"]);

echo json_encode(array(
    "names" => $_POST["names"],
    'success' => true,
    'data' => $namesObject->splitNames()
));