const images = document.querySelectorAll('.display img')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', showImg)
    button.addEventListener('click', showButton)
})

function showImg(e) {
    images.forEach(image => {
        if (image.classList.contains('active')) {
            image.classList.remove('active')
        } else if (image.classList.contains(e.target.id))
            image.classList.add('active')
    })
}

function showButton(e) {
    buttons.forEach(btn => {
        if (btn.classList.contains('btn-active')) {
            btn.classList.remove('btn-active')
        } else if (btn.classList.contains(e.target.id))
            btn.classList.add('btn-active')
    })
}