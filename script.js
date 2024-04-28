const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')
const hour = document.querySelector('.horas')

let miliNum = 0
let segNum = 0
let minNum = 0
let hourNum = 0
let INTERVALO


function cronometro () {
    if (miliNum < 99) {
        miliNum++;
        if (miliNum < 10) { miliNum = "0" + miliNum }
        miliseg.innerHTML = "" + miliNum;
    }
    if (miliNum == 99) {
        miliNum = -1;
    }
    if (miliNum == 0) {
        segNum++;
        if (segNum < 10) { segNum = "0" + segNum }
        seg.innerHTML = "" + segNum;
    }
    if (segNum == 59) {
        segNum = -1;
    }
    if ((miliNum == 0) && (segNum == 0)) {
        minNum++;
        if (minNum < 10) { minNum = "0" + minNum}
        min.innerHTML = "" + minNum;
    }
    if (minNum == 59) {
        minNum = -1;
    }
    if ((miliNum == 0) && (segNum == 0) && (minNum == 0) ) {
        hourNum++;
        if (hourNum < 10) {hourNum = "0" + hourNum}
        hour.innerHTML = hourNum;
    }

}


function start() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
        cronometro()
    }, 10)

    // const troca = document.querySelector(".iniciar")
    // if(start = false){
    //     troca.innerHTML = "Pausar"
    //     clearInterval(INTERVALO)
    // }
}

function reset() {
    // const iniciar = document.querySelector(".iniciar")
    // iniciar.innerHTML = "Iniciar"
    
    clearInterval(INTERVALO)
    miliNum = 0
    segNum = 0
    minNum = 0
    miliseg.innerHTML = '00'
    seg.innerHTML = '00'
    min.innerHTML = '00'
}