<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Selective\BasePath\BasePathMiddleware;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . "/../RutFunctions.php";
require __DIR__ . "/../NameFunctions.php";

$app = AppFactory::create();

// Middlewares
$app->addRoutingMiddleware();
$app->add(new BasePathMiddleware($app));
$app->addErrorMiddleware(true, false, false);

// API Routes
$app->post('/api/rest/getDv', function (Request $request, Response $response, array $args) {
    $params = (array)$request->getParsedBody();

    // Validar parametros, rut es requerido
     if (!$params["rut"]) {
        $response->getBody()->write(json_encode(array(
            "success" => false,
            "error" => "El parámetro rut es requerido",
        )));
        
        return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
    }

    $rutObject = new Functions\Rut\RutFunctions($params["rut"]);
    $verifierDigit = $rutObject->getVerifierDigit();

    $response->getBody()->write(json_encode(array(
        "success" => true,
        "data" => $verifierDigit,
    )));

    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/api/rest/splitNames', function (Request $request, Response $response, array $args) {
    $params = (array)$request->getParsedBody();

    // Validar parametros, names es requerido
    if (!$params["names"]) {
        $response->getBody()->write(json_encode(array(
            "success" => false,
            "error" => "El parámetro names es requerido",
        )));
        
        return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
    }

    $namesObject = new Functions\Names\NameFunctions($params["names"]);
    $splittedNames = $namesObject->splitNames();

    $response->getBody()->write(json_encode(array(
        "success" => true,
        "data" => $splittedNames,
    )));

    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();