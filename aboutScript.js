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

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle
        ('active')
    })
})
