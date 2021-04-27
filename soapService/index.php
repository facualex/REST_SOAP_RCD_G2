<?php
require 'vendor/autoload.php';

$server = new soap_server();
$namespace = "names:namesservicewsdl";

// Config
$server->configureWSDL('SOAP Names Web Service', $namespace);
$server->schemaTargetNamespace = $namespace;

$server->wsdl->addComplexType(
    'nameArray',
    'complexType',
    'array',
    '',
    'SOAP-ENC:Array',
    array(),
    array(
        array(
            'ref' => 'SOAP-ENC:arrayType',
            'wsdl:arrayType' => 'xsd:string[]'
        )
    ),
    'xsd:string'
);

$server->wsdl->addComplexType(
    'userNames',
    'complexType',
    'struct',
    'sequence',
    '',
    array(
        'names' => array('name' => 'names', 'type' => 'tns:nameArray'),
        'lastNames' => array('name' => 'lastNames', 'type' => 'tns:nameArray'),
    )
);


$server->register("splitNames", array("name" => "xsd:string"), array("return" => "tns:userNames"), $namespace);

function splitNames($names) {
    return array(
        'names' => array('Facundo'),
        'lastNames' => array('Alexandre', 'Buchelli')
    );

    // Split string names, get two last. Those are the last names. The rest are names
}

$server->service(file_get_contents("php://input"));