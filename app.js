function agregarContacto() {
  var nombre =document.getElementById("nombre").value;
  var telefono =document.getElementById("telefono").value;

  if (nombre === "" || telefono === "") {

    alert ("porfavor complete ambos espacios");
return;
    }
    var contacto = document.createElement("p");
    contacto.innerHTML = nombre + " - " + telefono;
    document.getElementById("contactos").appendChild(contacto);

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
}