let carrito = {
    id: "default",
    img: "deefault",
    des: "default",
    precio: 0.00,
    cantidad: 0
};
let precioTotal = 0;
let cantidadTotal = 0;
let compraImg;
let compraDes;

function anadirCarrito(id, img, des, precio, cantidad) {
    carrito.id = id;
    carrito.img = img;
    carrito.des = des;
    carrito.precio = parseFloat(precio);
    carrito.cantidad = parseInt(cantidad);
}

for (var i = 0; i < document.getElementsByClassName("product").length; i++) {
    document.getElementsByClassName("product")[i].onclick = function() {
        this.dataset.cantidad++;
        anadirCarrito(this.dataset.idproducto, this.dataset.img, this.dataset.des, this.dataset.precio, this.dataset.cantidad);
        precioTotal = precioTotal + carrito.precio;
        //Añadir al <p> con el id precioTotal la cantidad total de dinero
        document.getElementById("precioTotal").innerHTML = "" + precioTotal.toFixed(2);
        cantidadTotal = cantidadTotal + 1;
        document.getElementById("cantidadTotal").innerHTML = "" + cantidadTotal;
        if (this.dataset.cantidad <= 1) {
            //Agregar div con contenido unico de carrito de compras (solo puede existir 1)
            var compra = document.createElement("div");
            compra.setAttribute("id", carrito.id);
            document.getElementById("carritoDeCompras").appendChild(compra);
            agregarElementos(this.dataset.cantidad);
        } else {
            agregarElementos();
        }
    }
}

function actualizador() {
    //Agregar imagen a carrito de compras
    compraImg = document.createElement("img");
    compraImg.setAttribute("src", carrito.img);
    document.getElementById(carrito.id).appendChild(compraImg);
    //Agregar Boton "+" a carrito de compras
    compraDes = document.createElement("button");
    compraDes.setAttribute("class", "mas");
    compraDes.setAttribute("id", "mas" + carrito.id);
    compraDes.setAttribute("onclick", "sumar(this.id)");
    compraDes.innerHTML = "+";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Cantidad a carrito de compras
    compraDes = document.createElement("p");
    compraDes.setAttribute("class", "cantidad");
    compraDes.innerHTML = carrito.cantidad;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Boton "-" a carrito de compras
    compraDes = document.createElement("button");
    compraDes.setAttribute("class", "menos");
    compraDes.setAttribute("id", "menos" + carrito.id);
    compraDes.setAttribute("onclick", "restar(this.id)");
    compraDes.innerHTML = "-";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar PALABRA Cantidad a carrito de compras
    compraDes = document.createElement("p");
    compraDes.setAttribute("class", "cantidad");
    compraDes.innerHTML = "Cantidad: ";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Producto a carrito de compras
    compraDes = document.createElement("h2");
    compraDes.innerHTML = "Producto: " + carrito.id;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Descripción a carrito de compras
    compraDes = document.createElement("p");
    compraDes.innerHTML = carrito.des;;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Precio a carrito de compras
    compraDes = document.createElement("h3");
    compraDes.innerHTML = "Precio: " + carrito.precio;
    document.getElementById(carrito.id).appendChild(compraDes);
}

function agregarElementos() {
    if (carrito.cantidad != 1) {
        for (i = 0; i < 8; i++) {
            document.getElementById(carrito.id).removeChild(document.getElementById(carrito.id).childNodes[0]);
        }
    }
    actualizador();
}

function eliminarElementos() {
    if (carrito.cantidad == 0) {
        document.getElementById("carritoDeCompras").removeChild(document.getElementById(carrito.id));
    } else {
        for (i = 0; i < 8; i++) {
            document.getElementById(carrito.id).removeChild(document.getElementById(carrito.id).childNodes[0]);
        }
        actualizador();
    }
}

function sumar(idBoton) {
    for (var j = 0; j < document.getElementsByClassName("product").length; j++) {
        if (document.getElementById(idBoton).parentNode.id == document.getElementsByClassName("product")[j].dataset.idproducto) {
            break;
        }
    }
    var nuevaData = document.getElementsByClassName("product")[j].dataset;
    nuevaData.cantidad++;
    anadirCarrito(nuevaData.idproducto, nuevaData.img, nuevaData.des, nuevaData.precio, nuevaData.cantidad);
    agregarElementos(carrito.cantidad);
    cantidadTotal = cantidadTotal + 1;
    precioTotal = precioTotal + carrito.precio;
    //Añadir al <p> con el id precioTotal la cantidad total de dinero
    document.getElementById("precioTotal").innerHTML = "" + precioTotal.toFixed(2);
    document.getElementById("cantidadTotal").innerHTML = "" + cantidadTotal;
}

function restar(idBoton) {
    for (var j = 0; j < document.getElementsByClassName("product").length; j++) {
        if (document.getElementById(idBoton).parentNode.id == document.getElementsByClassName("product")[j].dataset.idproducto) {
            break;
        }
    }
    var nuevaData = document.getElementsByClassName("product")[j].dataset;
    nuevaData.cantidad--;
    anadirCarrito(nuevaData.idproducto, nuevaData.img, nuevaData.des, nuevaData.precio, nuevaData.cantidad);
    eliminarElementos(carrito.cantidad);
    cantidadTotal = cantidadTotal - 1;
    precioTotal = precioTotal - carrito.precio;
    //Añadir al <p> con el id precioTotal la cantidad total de dinero
    document.getElementById("precioTotal").innerHTML = "" + precioTotal.toFixed(2);
    document.getElementById("cantidadTotal").innerHTML = "" + cantidadTotal;
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByClassName("myLI2");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("product")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function myFunctionRNG() {
    var input1, filter1, ul, li, a, i, l, txtValue1, cadena;
    var regex = /\b(19[0-9]{2}|20[0-2][0-9]|2030)\b/g;
    input1 = document.getElementById("rng");
    filter1 = input1.value;
    ul = document.getElementById("myUL2");
    li = ul.getElementsByClassName("myLI2");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("product")[0];
        txtValue1 = a.textContent || a.innerText;
        //cadena = txtValue1.substring(txtValue1.indexOf(filter1), txtValue1.indexOf(filter1) + filter1.length + 1);
          if(IsNumeric(Math.floor(filter1))){
          cadena = txtValue1.match(regex);
          cadena = Math.floor(cadena)
          filter1 = Math.floor(filter1)
            if (cadena <= filter1 && cadena >= 1900) {
                li[i].style.display = "";
                l=i;
            } else {
                li[i].style.display = "none";
            }
          } else {
            li[i].style.display = "none";
          }
    }
}
function myFunctionRP() {
    var precio, MIPrice, MAPrice, ul, li, a, i, cadena;
    var regex = /\$\d+(\.\d{1,2})?/;
    MIPrice = document.getElementById("MIPrice").value;
    MAPrice = document.getElementById("MAPrice").value;
    ul = document.getElementById("myUL2");
    li = ul.getElementsByClassName("myLI2");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("product")[0];
        cadena = a.textContent || a.innerText;
        precio = parseFloat(cadena.match(regex)[0].replace(/\$/g, ""));
        if(precio >= MIPrice && precio <= MAPrice){
          li[i].style.display = "";
        }else {
          li[i].style.display = "none";
        }
    }
}

function IsNumeric(val) {
    return Number(parseFloat(val)) === val;
}
function mOver(obj) {
    obj.innerHTML = "8==========D Chupate esa"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse aqui"
  }
  const allRanges = document.querySelectorAll(".range-wrap");
  allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");
  
    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });
    setBubble(range, bubble);
  });
  
  function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
  
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }

