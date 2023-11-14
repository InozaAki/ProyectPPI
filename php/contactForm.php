<?php
include "./conexion.php";

$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$insertar = "INSERT INTO contact(nombre, telefono, correo, mensaje) VALUES 
('$nombre', '$telefono', '$correo', '$mensaje')";

$resultado = mysqli_query($conexion, $insertar);

if(!$resultado){
    echo'<script>
    alert("Error de contacto!");
    window.history.go(-1);
    </script>';
}else{
    echo'<script>
    alert("Información de contacto enviada! :)");
    window.history.go(-1);
    </script>';
}

mysqli_close($conexion);