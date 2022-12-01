const cipher = {
  encode:function (){
      var mensaje = document.getElementById("Texto del usuario").value;
      var nuevapalabra= "";
      for(var i=0;i<mensaje.length;i++){
        if(mensaje.charCodeAt(i)>=65&&mensaje.charCodeAt(i)<=90){
          nuevapalabra+=String.fromCharCode((mensaje.charCodeAt(i)+13-65)%26+65);
        }else{
          nuevapalabra+=String.fromCharCode(mensaje.charCodeAt(i));
        }
      }
      alert(nuevapalabra);
    }
  /*decode:function (){
      var mensaje = document.getElementById("Texto del usuario").value;
      var offset = document.getElementById("Offset").value;
      var nuevapalabra= "";
      for(var i=0;i<mensaje.length;i++){
        if(mensaje.charCodeAt(i)>=65&&mensaje.charCodeAt(i)<=90){
          nuevapalabra+=String.fromCharCode((mensaje.charCodeAt(i)+(26-offset%26)-65)%26+65);
        }else{
          nuevapalabra+=String.fromCharCode(mensaje.charCodeAt(i));
        }
      }
      alert(nuevapalabra);
    }*/
};

export default cipher;
