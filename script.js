// para melhorar a leitura, coloquei todas as variáveis aqui
let timerAtual, timer, min, sec;

function funcaoTimer() {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    min= min<10 ? '0' + min :min;
    sec= sec<10 ? '0' + sec :sec;
    display.textContent = min + ':' + sec;
    
    if (min <= 00 && sec<=00) {//condiçao para parar o display
        clearInterval(timerAtual);
        var x = document.createElement("AUDIO");
        x.setAttribute('src','numb.mp3');
        x.autoplay = true;                
    }
    if (--timer<0) {
        timer = duration;
    } 
}


function startTimer(duration, display) {
  timer= duration
  // atribui o timer a variavel "timerAtual" para fazer o clear depois
  timerAtual = setInterval(funcaoTimer, 1000);
}



function pararContagem() {
 if (timerAtual != undefined) {
       console.log("parando contagem");
       clearInterval(timerAtual);
 }
}

function iniciarContagem() { 
    var fourmin = 60* 60; //conversão para segundos
    display = document.querySelector('#timer'); //elemento para exibir o timer no document html
    
    // aqui verifica se já existe o timer e faz o clear ////////
    pararContagem();
    
    startTimer(fourmin, display); //inicia as functions ou chama as functions
    document.getElementById("btn").onclick = iniciarContagem;
}