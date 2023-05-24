var seePortfolioBtn = document.getElementById('see-portofolio-btn');
var welcomeContainer = document.getElementById('welcome')
var welcomeName = document.getElementById('welcome-name')
var welcomeFrame = document.querySelectorAll('.welcome-frames')
var welcomeHi = document.getElementById('welcome-hi')

seePortfolioBtn.addEventListener('click', () => {
    transitionBox.classList.add('to-portofolio')
    setTimeout(function () {
        window.location.href = 'portofolio.html'
    }, 1500)
})

seePortfolioBtn.addEventListener('mouseover', () => {
    welcomeContainer.classList.add('see')
    welcomeName.classList.add('see')
    welcomeHi.classList.add('see')
})

seePortfolioBtn.addEventListener('mouseleave', () => {
    welcomeContainer.classList.remove('see')
    welcomeName.classList.remove('see')
    welcomeHi.classList.remove('see')
})