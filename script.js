const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')
const hour = document.querySelector('.horas')

const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const continuar = document.querySelector('#continuar')
const resetar = document.querySelector('#resetar')

let miliNum = 0
let segNum = 0
let minNum = 0
let hourNum = 0
let INTERVALO

function start() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
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
            if (minNum < 10) { minNum = "0" + minNum }
            min.innerHTML = "" + minNum;
        }
        if (minNum == 59) {
            minNum = -1;
        }
        if ((miliNum == 0) && (segNum == 0) && (minNum == 0)) {
            hourNum++;
            if (hourNum < 10) { hourNum = "0" + hourNum }
            hour.innerHTML = hourNum;
        }
    }, 10)

    iniciar.style.display = 'none';
    pausar.style.display = 'inline-block';
}

function pause(){
    clearInterval(INTERVALO)

    pausar.style.display = 'none';
    continuar.style.display = 'inline-block';
}

function continua(){
    start()

    continuar.style.display = 'none';
    pausar.style.display = 'inline-block';
}

function reset() {
    clearInterval(INTERVALO)

    iniciar.style.display = 'inline-block';
    pausar.style.display = 'none';
    continuar.style.display = 'none';

    miliNum = 0
    segNum = 0
    minNum = 0
    miliseg.innerHTML = '00'
    seg.innerHTML = '00'
    min.innerHTML = '00'
}