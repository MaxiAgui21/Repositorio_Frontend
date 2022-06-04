//Query de validaciones para nuestro formulario

function validaForm(){
  var valor = document.getElementById('Input1').value;
  if(valor == null || valor.length == 0) {
    alert('[ERROR] El campo Nombre de Usuario debe tener un valor...!');
      return false;
  }

  var valor2 = document.getElementById('Input2').value
    if (valor2 == null || valor2.length == 0 ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo Email address debe tener un valor..!');
      return false;
  }

  var valor3 = document.getElementById('Input3').value
  if (valor3 == null || valor3.length == 0 ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo Número de Teléfono debe tener un valor..!!');
      return false;
  }

  var valor4 = document.getElementById('Textarea1').value
  if (valor4 == null || valor4.length == 0 ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo Example textarea debe tener un valor...!');
      return false;
  }
  alert('Los datos han sido guardados, exitosamente...!!');
  return true;
}