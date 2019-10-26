<?php

require_once '../database/querys.php';

function insert_in_carrito($data) {
    $consulta = "INSERT INTO carritos VALUES(NULL, '" . $data['usuario_id'] . "', '" . $data['producto_id'] . "')";
    return insert_element($consulta);
}
