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

const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')

const testimonials = [
    {
        name: 'Serenity Rowe',
        photo: 'testimonialpeople/serenity.jpeg',
        text:
        "Absolutely love these cute animals!",
    },
    {
        name: 'Evan Clein',
        photo: 'testimonialpeople/evan.jpeg',
        text:
        "Never realized I could find my best friend in the easiest way possible! Fully support Paws 4 You!",
    },
    {
        name: 'Imran Gold',
        photo: 'testimonialpeople/imran.jpeg',
        text:
        "THANK YOU THANK YOU THANK YOU PAWS 4 YOU! I have never been more in love with my little puppy and I know I'm going to build a great future with the little guy!"
    },
    {
        name: 'Serenity Rowe',
        photo: 'testimonialpeople/serenity.jpeg',
        text:
        "Absolutely love these cute animals!",
    },
    {
        name: 'Evan Clein',
        photo: 'testimonialpeople/evan.jpeg',
        text:
        "Never realized I could find my best friend in the easiest way possible! Fully support Paws 4 You!",
    },
    {
        name: 'Imran Gold',
        photo: 'testimonialpeople/imran.jpeg',
        text:
        "THANK YOU THANK YOU THANK YOU PAWS 4 YOU! I have never been more in love with my little puppy and I know I'm going to build a great future with the little guy!"
    },
    {
        name: 'Serenity Rowe',
        photo: 'testimonialpeople/serenity.jpeg',
        text:
        "Absolutely love these cute animals!",
    },
    {
        name: 'Evan Clein',
        photo: 'testimonialpeople/evan.jpeg',
        text:
        "Never realized I could find my best friend in the easiest way possible! Fully support Paws 4 You!",
    },
    {
        name: 'Imran Gold',
        photo: 'testimonialpeople/imran.jpeg',
        text:
        "THANK YOU THANK YOU THANK YOU PAWS 4 YOU! I have never been more in love with my little puppy and I know I'm going to build a great future with the little guy!"
    },
]

let idx = 1

function updateTestimonial() {
    const {name, photo, text} = testimonials[idx];

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name

    idx++

    if(idx > testimonial.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)