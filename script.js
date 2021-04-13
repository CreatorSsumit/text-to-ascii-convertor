var text = document.querySelector('h1')

document.addEventListener('keypress', (e) => {

    text.textContent = e.which
})

document.addEventListener('keydown', (e) => {
    text.textContent = e.which
})