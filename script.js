let list = document.querySelectorAll('.item')
let next = document.querySelector('.next')
let back = document.querySelector('.back')


let count = list.length
let action = 0


next.onclick = () => {
    let activeOld = document.querySelector('.action')
    activeOld.classList.remove('action')

    action = action >= count - 1 ? 0 : action + 1
    list[action].classList.add('action')
}

back.onclick = () => {
    let activeOld = document.querySelector('.action')
    activeOld.classList.remove('action')

    action = action <= 0 ? count - 1 : action - 1
    list[action].classList.add('action')

}


// Movimento do Scroll
// lógica de programação, que pode ser reutilizada, MOVIMENTO DO SCROLL
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})


const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))

// Variavel/Aplição para o main
const elemental = document.querySelectorAll('.hidd')
elemental.forEach((eloi) => myObserver.observe(eloi) )