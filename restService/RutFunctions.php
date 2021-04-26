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

		$splittedRut		= str_split($originalRut);
		$cleanRut	= '';

		foreach ($splittedRut as $key => $chr) {

			//Digito Verificador
			if ((($key + 1) == count($splittedRut)) && ($incluyeDigitoVerificador)){
				if (is_numeric($chr) || ($chr == 'k') || ($chr == 'K'))
					$cleanRut .= '-'.strtoupper($chr);
				else
					return false;
			}

			//Números del RUT
			elseif (is_numeric($chr))
					$cleanRut .= $chr;
		}
		
		if (strlen($cleanRut) < 1)
			return false;
		
		return $cleanRut;
    }

    public function getVerifierDigit()
    {
		$rutToNumber = $this->cleanRut(false);

		// Verifier digit algorithm 
		$splittedRut		= array_reverse(str_split($rutToNumber));
		$sum		= 0;
		$factors	= array(2,3,4,5,6,7,2,3,4,5,6,7);

		foreach($splittedRut as $key => $chr) {
			$sum += $chr * $factors[$key];
		}
		
		$a	= $sum % 11;
		$b = 11-$a;
		
		if($b == 11)
			$dv	= 0;
		elseif($b == 10)
			$dv	= 'K';
		else
			$dv = $b;

		$dv = (string)$dv;

		return $dv;
    }
}