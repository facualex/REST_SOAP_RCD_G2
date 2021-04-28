<?php
namespace Functions\Names;

class NameFunctions {
    private $names;

    public function __construct(string $names)
    {
        try {
            if(!$names) {
                throw new \Exception('El parámetro names es obligatorio para utlizar las funciones.');
            }

            $this->names = $names;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function splitNames()
    {
        $namesArray = explode(" ", $this->names);
        $lastNames =  array_slice($namesArray, -2);
        $names = array_slice($namesArray, 0, -2);
     
         return array(
             'names' => $names,
             'lastNames' => $lastNames 
         );
    }
}