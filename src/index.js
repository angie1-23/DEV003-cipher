import cipher from './cipher.js';

// Variables que guardan el mensaje de llegada y el offset codificado//
const tex_us= document.getElementById("Accion_bt_cod");
tex_us.addEventListener("click", function(){
//Hacemos una funcion para retornar en Codificado//
  const mensaje= document.getElementById("Texto-del-usuario").value;
  const offset = parseInt(document.getElementById("Offset").value);
  document.getElementById("Texto-Codificado").value = cipher.encode(offset,mensaje);   
});

// Variables que guardan el mensaje de llegada y el offset decodificado//
const tex_us1=document.getElementById("Accion_bt_dif");
tex_us1.addEventListener("click",function(){ 
  const mensaje= document.getElementById("Texto-del-usuario").value;
  const offset = parseInt(document.getElementById("Offset").value);
  document.getElementById("Texto-Codificado").value = cipher.decode(offset,mensaje);
});

// Accion para el error //
// function validar (){
//   const mensaje= document.getElementById("Texto-del-usuario").value;
//   const letras =new (/^[a-zA-Z]+$/);

//   if (!letras.test(mensaje.value));
//     Val=true;
//   return alert("solo letras");
// };


