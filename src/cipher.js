/*Se crea la variable const cipher donde contiene la funcion parfa realizar el cifrado */
const cipher = {  
  encode:function (offset,mensaje){

    if (typeof offset !== 'number' || typeof mensaje !== 'string'){
      throw TypeError();
    }
    else{
      let nuevapalabra= "";
    
      for(let i=0;i<mensaje.length;i++){
        if(mensaje.charCodeAt(i)>=65&&mensaje.charCodeAt(i)<=90){
          nuevapalabra+=String.fromCharCode((mensaje.charCodeAt(i)+offset-65)%26+65);
        }
        else if(mensaje.charCodeAt(i)>=97&&mensaje.charCodeAt(i)<=122){
          nuevapalabra+=String.fromCharCode((mensaje.charCodeAt(i)+offset-97)%26+97);
        }
        else{
          nuevapalabra+=String.fromCharCode(mensaje.charCodeAt(i));
        }
      }
      return nuevapalabra;
    }

  },

  decode:function (offset,mensaje){

    if (typeof offset === 'number' && typeof mensaje === 'string'){
      let nuevapalabra= "";

      for(let i=0;i<mensaje.length;i++){
        if(mensaje.charCodeAt(i)>=65&&mensaje.charCodeAt(i)<=90){
          nuevapalabra+=String.fromCharCode((mensaje.charCodeAt(i)-offset-90)%26+90);
        }else if(mensaje.charCodeAt(i)>=97&&mensaje.charCodeAt(i)<=122){
          nuevapalabra+=String.fromCharCode((mensaje.charCodeAt(i)+(26-offset%26)-97)%26+97);
        }
      }
      return nuevapalabra; 
    }else { 
      throw TypeError();
    } 
  }
}

export default cipher;
