const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')
const hour = document.querySelector('.horas')

let miliNum = 0
let segNum = 0
let minNum = 0
let hourNum = 0
let INTERVALO

function milissegundos() {
    miliNum++
    if (miliNum < 10) {
        miliseg.innerHTML = '0' + miliNum
    } else {
        miliseg.innerHTML = miliNum
    }

    if (miliNum == 99) {
        miliNum = 0
        segundos()
    }
}

function segundos() {
    segNum++
    if (segNum < 10) {
        seg.innerHTML = '0' + segNum
    } else {
        seg.innerHTML = segNum
    }

    if (segNum == 59) {
        segNum = 0
        minutos()
    }
}

function minutos() {
    minNum++
    if (minNum < 10) {
        min.innerHTML = '0' + minNum
    } else {
        min.innerHTML = minNum
    }

    if (minNum == 60){
        minNum = 0
        horas()
    }
}

function horas(){
    hourNum++
    if (hourNum < 10){
        hour.innerHTML = '0' + hourNum
    } else {
        hour.innerHTML = hourNum
    }
}

function start() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
        milissegundos()
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