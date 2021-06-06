<!DOCTYPE html>
<html>

<head>
    <title>SOAP</title>
    <link rel="StyleSheet" href="estilos.css" type="text/css">
    <link rel="StyleSheet" href="estilos2.css" type="text/css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Allerta' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Averia Gruesa Libre' rel='stylesheet'>
<?php
    include_once 'lib/nusoap.php';
?>
</head>

<body>

<div id="root">
        <div class="header">SOAP WebService Client</div>
        <div class="container">
            <div class="input-group-container">
                <div class="input-group">
                    <div class="main-rut-group">
                        <label for="main-rut">
                            RUT
                            <span class="sin-dv-span">(sin digito verificador)</span>
                        </label>
                        <form action="index.php" method="GET">
                        <input name="rut" placeholder="Ejemplo: 12345678" class="main-rut" id="main-rut" autocomplete="off">
                    </div>
                </div>
                <?php
                    if(isset($_GET["rut"])){
                        $cliente = new nusoap_client("http://localhost:8080/WSRUT/WSdv?wsdl",true);
                        $n1=$_GET["rut"];
                        $par=array('n1'=>$n1);
                        $res=$cliente->call("devolverDV",$par);
                        foreach($res as $clave){
                            echo "DIGITO VERIFICADOR: ".$clave;
                        }
                    }
                    
                ?>
                <button class="calculate-button" name="botonxd">Calcular DV</button>

                </form>
            </div>
        </div>
    </div>

    <div id="root">
        <div class="container">
            <div class="input-group-container">
                <div class="input-group">
                    <div class="main-rut-group">
                        <label for="main-rut">
                            Split Nombre Propio
                            <span class="sin-dv-span">(Ingrese su nombre completo con espacios entre si.)</span>
                        </label>
                        <form action="index.php" method="GET">
                        <input name="nombre" placeholder="Ejemplo: juanito marcelo perez rojas" class="main-rut" id="main-rut" autocomplete="off">
                        
                    </div>
                </div>
                <?php

                    if(isset($_GET["nombre"])){
                        
                        echo "Nombre: ".$_GET["nombre"]."<br>";
                        $cliente = new nusoap_client("http://localhost:8080/WSRUT/WSdv?wsdl",true);
                        $n1=$_GET["nombre"];
                        $string = explode(" ",$n1);

                        $par=array('n1'=>$n1);
                        $res=$cliente->call("SplitNombrePropio",$par);
                        if(count($string)<=2)
                        {
                            echo"<script>
                            
                                    window.alert(' Porfavor escriba, a lo menos, 1 nombre y dos apellidos');
                                    window.location.assign('index.php');
                        
                                </script>";


                        }
                        if(count($string) <= 3)
                        {

                            foreach($res as $clave){ 
                                foreach($clave as $clave2){
                                    foreach($clave2 as $clave3 => $nani){
                                        echo"<br>";
                                        if(gettype($clave3)=="string"){
                                            echo "◐ ".$clave3."S<br>";
                                            if(gettype($nani) == "array"){
                                                foreach($nani as $clave4){
                                                    echo "----◐".$clave4."<br>";
                                                }

                                            }else{
                                                echo "----◐".$nani."<br>";
                                            }                                      
                                        }
                                        
                                    }
                                }
                            }
                        }else{

                            foreach($res as $clave){
                                foreach($clave as $clave2){
                                    foreach($clave2 as $clave3 => $nani){
                                        echo"<br>";
                                        echo "◐ ".$clave3."S: ";
                                        foreach($nani as $clave4){
                                            echo"<br>";
                                            echo "----◐".$clave4;
                                        }
                                        
                                    }
                                }
                            }
                        }
                    }
                
                ?>
                <button class="calculate-button">Split Nombre Propio</button>
                </form>
            </div>
        </div>
    </div>
                
    <div class="cont">
        <img src="https://i.postimg.cc/DZSs9Q6K/Logo-UTEM.png" width="200">
        <div class="texto">
            En este programa trabajaremos con dos servicios web de tipo SOAP.
            <p>Trabajo creado por: </p>
            <div class="alum">
            <p>Facundo Alexandre Buchelli</p>
            <p>Rodrigo Alvarez Abello </p>
            <p>Jose Calfuen Salazar </p>
            <p>Esteban Hernandez Muñoz </p>
            <p>Mauricio Quiroz Carvajal </p>

            </div> 
        </div>

    </div>
    

    

</body>


</html>

