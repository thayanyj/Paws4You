const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 90) {
        nav.classList.add('active')
    } 
    else {
        nav.classList.remove('active')
    }
}
//SUNNY
const imgsSunny = document.getElementById('sunny')
const leftBtnSunny = document.getElementById('left')
const rightBtnSunny = document.getElementById('right')

const imgSunny = document.querySelectorAll('#sunny img')

console.log(imgSunny)

let idxSunny = 0
let intervalSunny = setInterval(run, 3000)

function run() {
    idxSunny++
    changeImageSunny()
}
function changeImageSunny() {
    if (idxSunny > imgSunny.length - 1) {
        idxSunny = 0
    } else if(idxSunny < 0) {
        idxSunny = imgSunny.length - 1
    }
    imgsSunny.style.transform = `translateX(${-idxSunny * 500}px)`
}

function resetIntervalSunny() {
    clearInterval(intervalSunny)
    intervalSunny = setInterval(run, 3000)
}

rightBtnSunny.addEventListener('click', () => {
    idxSunny++
    changeImageSunny()
    resetIntervalSunny()
})

leftBtnSunny.addEventListener('click', () => {
    idxSunny--
    changeImageSunny()
    resetIntervalSunny()
}) 
//SUNNY

//COCO
const imgsCoco = document.getElementById('coco')
const leftBtnCoco = document.getElementById('left2')
const rightBtnCoco = document.getElementById('right2')

const imgCoco = document.querySelectorAll('#coco img')

console.log(imgCoco)

let idxCoco = 0
let intervalCoco = setInterval(run, 3000)

function run() {
    idxCoco++
    changeImageCoco()
}
function changeImageCoco() {
    if (idxCoco > imgCoco.length - 1) {
        idxCoco = 0
    } else if(idxCoco < 0) {
        idxCoco = imgCoco.length - 1
    }
    imgsCoco.style.transform = `translateX(${-idxCoco * 500}px)`
}

function resetIntervalCoco() {
    clearInterval(intervalCoco)
    intervalCoco = setInterval(run, 3000)
}

rightBtnCoco.addEventListener('click', () => {
    idxCoco++
    changeImageCoco()
    resetIntervalCoco()
})

leftBtnCoco.addEventListener('click', () => {
    idxCoco--
    changeImageCoco()
    resetIntervalCoco()
}) 
//COCO

//DONALD
const imgsDonald = document.getElementById('donald')
const leftBtnDonald = document.getElementById('left3')
const rightBtnDonald = document.getElementById('right3')

const imgDonald = document.querySelectorAll('#donald img')

console.log(imgDonald)

let idxDonald = 0
let intervalDonald = setInterval(run, 3000)

function run() {
    idxDonald++
    changeImageDonald()
}
function changeImageDonald() {
    if (idxDonald > imgDonald.length - 1) {
        idxDonald = 0
    } else if(idxDonald < 0) {
        idxDonald = imgDonald.length - 1
    }
    imgsDonald.style.transform = `translateX(${-idxDonald * 500}px)`
}

function resetIntervalDonald() {
    clearInterval(intervalDonald)
    intervalDonald = setInterval(run, 3000)
}

rightBtnDonald.addEventListener('click', () => {
    idxDonald++
    changeImageDonald()
    resetIntervalDonald()
})

leftBtnDonald.addEventListener('click', () => {
    idxDonald--
    changeImageDonald()
    resetIntervalDonald()
}) 
//DONALD

//COOPER
const imgsCooper = document.getElementById('cooper')
const leftBtnCooper = document.getElementById('left4')
const rightBtnCooper = document.getElementById('right4')

const imgCooper = document.querySelectorAll('#cooper img')

console.log(imgCooper)

let idxCooper = 0
let intervalCooper = setInterval(run, 3000)

function run() {
    idxCooper++
    changeImageCooper()
}
function changeImageCooper() {
    if (idxCooper > imgCooper.length - 1) {
        idxCooper = 0
    } else if(idxCooper < 0) {
        idxCooper = imgCooper.length - 1
    }
    imgsCooper.style.transform = `translateX(${-idxCooper * 500}px)`
}

function resetIntervalCooper() {
    clearInterval(intervalCooper)
    intervalCooper = setInterval(run, 3000)
}

rightBtnCooper.addEventListener('click', () => {
    idxCooper++
    changeImageCooper()
    resetIntervalCooper()
})

leftBtnCooper.addEventListener('click', () => {
    idxCooper--
    changeImageCooper()
    resetIntervalCooper()
}) 
//COOPER

//WAFFLE
const imgsWaffle = document.getElementById('waffle')
const leftBtnWaffle = document.getElementById('left5')
const rightBtnWaffle = document.getElementById('right5')

const imgWaffle = document.querySelectorAll('#waffle img')

console.log(imgWaffle)

let idxWaffle = 0
let intervalWaffle = setInterval(run, 3000)

function run() {
    idxWaffle++
    changeImageWaffle()
}
function changeImageWaffle() {
    if (idxWaffle > imgWaffle.length - 1) {
        idxWaffle = 0
    } else if(idxWaffle < 0) {
        idxWaffle = imgWaffle.length - 1
    }
    imgsWaffle.style.transform = `translateX(${-idxWaffle * 500}px)`
}

function resetIntervalWaffle() {
    clearInterval(intervalWaffle)
    intervalWaffle = setInterval(run, 3000)
}

rightBtnWaffle.addEventListener('click', () => {
    idxWaffle++
    changeImageWaffle()
    resetIntervalWaffle()
})

leftBtnWaffle.addEventListener('click', () => {
    idxWaffle--
    changeImageWaffle()
    resetIntervalWaffle()
}) 
//WAFFLE

//ELSA
const imgsElsa = document.getElementById('elsa')
const leftBtnElsa = document.getElementById('left6')
const rightBtnElsa = document.getElementById('right6')

const imgElsa = document.querySelectorAll('#elsa img')

console.log(imgElsa)

let idxElsa = 0
let intervalElsa = setInterval(run, 3000)

function run() {
    idxElsa++
    changeImageElsa()
}
function changeImageElsa() {
    if (idxElsa > imgElsa.length - 1) {
        idxElsa = 0
    } else if(idxElsa < 0) {
        idxElsa = imgElsa.length - 1
    }
    imgsElsa.style.transform = `translateX(${-idxElsa * 500}px)`
}

function resetIntervalElsa() {
    clearInterval(intervalElsa)
    intervalElsa = setInterval(run, 3000)
}

rightBtnElsa.addEventListener('click', () => {
    idxElsa++
    changeImageElsa()
    resetIntervalElsa()
})

leftBtnElsa.addEventListener('click', () => {
    idxElsa--
    changeImageElsa()
    resetIntervalElsa()
}) 
//ELSA

//OREO
const imgsOreo = document.getElementById('oreo')
const leftBtnOreo = document.getElementById('left7')
const rightBtnOreo = document.getElementById('right7')

const imgOreo = document.querySelectorAll('#oreo img')

console.log(imgOreo)

let idxOreo = 0
let intervalOreo = setInterval(run, 3000)

function run() {
    idxOreo++
    changeImageOreo()
}
function changeImageOreo() {
    if (idxOreo > imgOreo.length - 1) {
        idxOreo = 0
    } else if(idxOreo < 0) {
        idxOreo = imgOreo.length - 1
    }
    imgsOreo.style.transform = `translateX(${-idxOreo * 500}px)`
}

function resetIntervalOreo() {
    clearInterval(intervalOreo)
    intervalOreo = setInterval(run, 3000)
}

rightBtnOreo.addEventListener('click', () => {
    idxOreo++
    changeImageOreo()
    resetIntervalOreo()
})

leftBtnOreo.addEventListener('click', () => {
    idxOreo--
    changeImageOreo()
    resetIntervalOreo()
}) 
//OREO

//SIMBA
const imgsSimba = document.getElementById('simba')
const leftBtnSimba = document.getElementById('left8')
const rightBtnSimba = document.getElementById('right8')

const imgSimba = document.querySelectorAll('#simba img')

console.log(imgSimba)

let idxSimba = 0
let intervalSimba = setInterval(run, 5000)

function run() {
    idxSimba++
    changeImageSimba()
}
function changeImageSimba() {
    if (idxSimba > imgSimba.length - 1) {
        idxSimba = 0
    } else if(idxSimba < 0) {
        idxSimba = imgSimba.length - 1
    }
    imgsSimba.style.transform = `translateX(${-idxSimba * 500}px)`
}

function resetIntervalSimba() {
    clearInterval(intervalSimba)
    intervalSimba = setInterval(run, 5000)
}

rightBtnSimba.addEventListener('click', () => {
    idxSimba++
    changeImageSimba()
    resetIntervalSimba()
})

leftBtnSimba.addEventListener('click', () => {
    idxSimba--
    changeImageSimba()
    resetIntervalSimba()
}) 
//SIMBA

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const x = e.clientX
        const y = e.clientY

        const getOffsetTop = element => {
            let offsetTop = 0;
            while(element) {
              offsetTop += element.offsetTop;
              element = element.offsetParent;
            }
            return offsetTop;
        }

        const someElement = document.getElementById('someElementId');
        const X = getOffsetTop(someElement);

        const buttonTop = e.target.X
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle) 
    })
})