var lista_productos = [];
function cargarProductos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status = 200) {
                var json_text = this.responseText;
                lista_productos = JSON.parse(json_text);
                imprimir_productos(lista_productos);
            }
        }
    };
    xhr.open('GET', 'api/controllers/productos.php', true);
    xhr.send();
}

function imprimir_productos(lista_productos) {
    var productos_div = document.getElementById('lista-productos');
    var productos_html = '<ul>';
    for (var i = 0; i < lista_productos.length; i++) {
        productos_html += '<li>';
        productos_html += lista_productos[i].nombre;
        productos_html += '  $';
        productos_html += lista_productos[i].precio;
        productos_html += '<button class="btn btn-success" title="Agregar" onclick="agregarCarrito(' + lista_productos[i].id + ')">';
        productos_html += '+';
        productos_html += '</button>';
        productos_html += '</li>';
    }
    productos_html += '</ul>';
    productos_div.innerHTML = productos_html;
}

function agregarCarrito(id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status = 200) {
                var respuesta = JSON.parse(this.responseText);
                new Noty({
                    type: 'success',
                    layout: 'topRight',
                    text: respuesta.message
                }).show();
//                var json_text = this.responseText;
//                lista_productos = JSON.parse(json_text);
//                imprimir_productos(lista_productos);
            }
        }
    };
    xhr.open('POST', 'api/controllers/agregar_carrito.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('producto_id=' + id);
}
