<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . "/../RutFunctions.php";
require __DIR__ . "/../NameFunctions.php";

$app = AppFactory::create();

// Add Error Handling Middleware
$app->addErrorMiddleware(true, false, false);

// API Routes
$app->get('/api/rest/getDv', function (Request $request, Response $response, array $args) {
    $rutObject = new Functions\Rut\RutFunctions("22167744");
    $verifierDigit = $rutObject->getVerifierDigit();

    $response->getBody()->write($verifierDigit);
    return $response;
});

$app->post('/api/rest/splitNames', function (Request $request, Response $response, array $args) {
    $params = (array)$request->getParsedBody();
    $namesObject = new Functions\Names\NameFunctions($params["names"]);
    $splittedNames = $namesObject->splitNames();

    $response->getBody()->write(json_encode(array(
        "success" => true,
        "data" => $splittedNames,
    )));

    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();