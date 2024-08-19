let numeroescondido = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignartexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificaintento(){
    let numerousuario = parseInt(document.getElementById('valorusuario').value);
    
    if (numerousuario === numeroescondido){
        asignartexto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if(numerousuario > numeroescondido){
                asignartexto('p', 'Numero escondido es menor');
            } else{
                asignartexto('p', 'Numero escondido es mayor')
            }
            intentos++;
            limpiarcaja();
        }
    return;
}

function condicionesiniciales(){
    asignartexto('h1','EL JUEGO DEL NUMERO ESCONDIDO');
    asignartexto('p',`Escoge un numero entre el 1 y el ${numeroMaximo}`);
    numeroescondido = generanumeroescondido();
    intentos = 1;
}

function reiniciarjuego(){
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesiniciales();

function limpiarcaja(){
    document.querySelector('#valorusuario').value = '';
}

function generanumeroescondido() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeros);
    /*Si el numero generado esta en la lista*/
    if (listaNumeros.lenght == numeroMaximo){
        asignartexto('p','Ya se sortearon todos los numeros posibles');
    }

    if (listaNumeros.includes(numeroGenerado)){
        return generanumeroescondido();
    } else{
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}


