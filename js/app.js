var pantalla=document.querySelectorAll('.pantalla span')[0];
var memoria=0;
function onBoton(element){
  element.style.padding="0.7%";

}
function offBoton(element){
  element.style.padding="0%"
}
//punto 5
function imprimirNumero(id){
if(pantalla.innerHTML.length<9){
  if(pantalla.value != 0){
    pantalla.innerHTML=pantalla.value+id;
    pantalla.value=Number(pantalla.innerHTML);
  }else{
    pantalla.innerHTML=id
    pantalla.value=id;
  }
  return pantalla.value
}
}
//punto 6
function reinicio(){
  pantalla.innerHTML="0";
  pantalla.value=0;
  memoria = 0;
}
//punto 7
function decimal(numero){
  if (numero%1 == 0 && numero !=NaN){
    imprimirNumero("0.")
  }
  else{
    alert("operación no permitida")
  }
  return pantalla.value
}
//punto 8
function signo(){
  valor1=Number(pantalla.value);
  resultado=valor1*(-1)
  return resultado;
}
//punto 9
function validacion(valor){
  if (valor.length>8){
    pantalla.innerHTML="Error"
  }else{
    pantalla.innerHTML=valor
    pantalla.value=valor;
  }
}
function operar(){
  var valor1=Number(pantalla.value);

  pantalla.innerHTML="0";
  pantalla.value=0;
  return valor1
}

function respuesta(orden,valor1,valor2){
switch (orden) {
  case "mas":
    resultado = valor1 + valor2;
    return resultado;
    break;
  case "menos":
    resultado = valor1 - valor2;
    return resultado
  break;
  case "por":
    resultado = valor1*valor2;
    return resultado
  break;
  case "dividido":
    resultado=valor1/valor2;
    return resultado
  break;
  default:
    resultado=orden
    return resultado
  }

}

var calculadora = {
    inicio: function(){
      pantalla.innerHTML="0";
      pantalla.value=0;
      memoria=0;
      this.asignarEventoBotones('numero','operacion');
    },
    asignarEventoBotones: function(selector1,selector2){
      var teclasNumCalculadora = document.getElementsByClassName(selector1);
      var teclasOpCalculadora = document.getElementsByClassName(selector2);
      var ac = document.getElementById('on');
      var punto = document.getElementById('punto')
      var igual = document.getElementById('igual')
      var signo = document.getElementById('sign')
      for (var i=0;i<teclasNumCalculadora.length;i++){
        teclasNumCalculadora[i].onmousedown=this.eventoOnBoton;
        teclasNumCalculadora[i].onmouseup=this.eventoOffBoton;
        teclasNumCalculadora[i].onclick=this.eventoImprimirNumero;
      }
      for (var i=0;i<teclasOpCalculadora.length;i++){
        teclasOpCalculadora[i].onmousedown=this.eventoOnBoton;
        teclasOpCalculadora[i].onmouseup=this.eventoOffBoton
        teclasOpCalculadora[i].onclick=this.eventoOperacion;
      }
      ac.onclick = reinicio;
      punto.onclick = this.eventoDecimal;
      igual.onclick = this.eventoIgual;
      signo.onmousedown = this.eventoOnBoton;
      signo.onmouseup = this.eventoOffBoton;
      signo.onclick = this.eventoSigno;

    },
    eventoOnBoton: function(event){
      onBoton(event.target);
    },
    eventoOffBoton: function(event){
      offBoton(event.target);
    },
    eventoImprimirNumero: function(event){
      imprimirNumero(event.target.id);
    },
    eventoDecimal: function(event){
      decimal(Number(pantalla.value));
    },
    eventoOperacion: function(event){
      valor1=operar();
      orden = event.target.id
      memoria=valor1

    },
    eventoIgual: function (event){
      valor2=Number(pantalla.value);
      var resultado = respuesta(orden,valor1,valor2);
      validacion(resultado.toString());
      pantalla.value=0;
    },
    eventoSigno: function (event){
      resultado = signo();
      validacion(resultado.toString());
      pantalla.value=resultado;
    }

}

calculadora.inicio();
