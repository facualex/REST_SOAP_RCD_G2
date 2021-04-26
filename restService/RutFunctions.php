<?php
namespace Functions\Rut;

class RutFunctions {
    private $rut;

    public function __construct(string $rut)
    {
        try {
            if(!$rut) {
                throw new \Exception('El parámetro rut es obligatorio para utlizar las funciones.');
            }

            $this->rut = $rut;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    private function cleanRut($incluyeDigitoVerificador) {
        //Eliminamos espacios al principio y final
		$originalRut = trim($this->rut);

		//En caso de existir, eliminamos ceros ("0") a la izquierda
		$originalRut = ltrim($originalRut, '0');

		$input		= str_split($originalRut);
		$cleanedRut	= '';

		foreach ($input as $key => $chr) {

			//Digito Verificador
			if ((($key + 1) == count($input)) && ($incluyeDigitoVerificador)){
				if (is_numeric($chr) || ($chr == 'k') || ($chr == 'K'))
					$cleanedRut .= '-'.strtoupper($chr);
				else
					return false;
			}

			//Números del RUT
			elseif (is_numeric($chr))
					$cleanedRut .= $chr;
		}
		
		if (strlen($cleanedRut) < 3)
			return false;
		
		return $cleanedRut;
    }

    public function getVerifierDigit()
    {
        //Preparamos el RUT recibido
		$numero = $this->cleanRut(false);

		//Calculamos el dígito verificador
		$txt		= array_reverse(str_split($numero));
		$sum		= 0;
		$factors	= array(2,3,4,5,6,7,2,3,4,5,6,7);

		foreach($txt as $key => $chr) {
			$sum += $chr * $factors[$key];
		}
		
		$a			= $sum % 11;
		$b			= 11-$a;
		
		if($b == 11)
			$digitoVerificador	= 0;
		elseif($b == 10)
			$digitoVerificador	= 'K';
		else
			$digitoVerificador = $b;

		//Convertimos el número a cadena para efectos de poder comparar
		$digitoVerificador = (string)$digitoVerificador;

		return $digitoVerificador;
        return $this->cleanRut($this->rut);
    }
}