<?php
namespace Src\Functions;

class RutFunctions {
    private $rut = null;

    public function __construct($rut)
    {
        try {
            if(!$rut) {
                throw new Exception('El parámetro "rut" es obligatorio para utlizar las funciones.');
            }

            $this->rut = cleanRut($rut);
        } catch (Exception $e) {
            exit($e->getMessage());
        }
    }

    private function cleanRut($rut) {
        return $this->rut;
    }

    public function getVerifierDigit()
    {
        return $this->rut;
    }
}