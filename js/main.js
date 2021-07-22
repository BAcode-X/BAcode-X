const cards = document.querySelectorAll('.card-btn');
const home = document.querySelector('#home')
const about = document.querySelector('#about')


cards[0].classList.add('active')


// add active class
const addActiveClass = () => {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                removeClass();
                card.classList.add('active')
            })
        })
    }
    // call the function
addActiveClass();


const removeClass = () => {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

window.addEventListener('scroll', () => {
    const triggerTop = window.innerHeight / 5 * 2

    const aboutTop = about.getBoundingClientRect().top
    const homeTop = home.getBoundingClientRect().top


    if (aboutTop < triggerTop) {
        about.classList.add('active')
    } else {
        about.classList.remove('active')
    }

})