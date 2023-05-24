var contactsLink = document.querySelectorAll('.contact-link')
var contactPreview = document.getElementById('contacts-telephone')

var navs = document.querySelectorAll('.navs')


var transitionBox = document.getElementById('transition-box')


navs.forEach(function (nav) {
    nav.addEventListener('click', function () {
        
        var file = this.getAttribute('href');

        if (file == 'index.html') {
            transitions('to-index', 'index.html')
            
        } else if (file == 'portofolio.html') {
            transitions('to-portofolio', 'portofolio.html')

        } else if (file == 'profile.html') {
            transitions('to-profile', 'profile.html')
            
        } else if (file == 'contact.html') {
            transitions('to-contact', 'contact.html')
        }

    })

})

contactsLink.forEach(function (element) {
    
    element.addEventListener('mouseover', function() {
        var idValue = this.getAttribute('id');
        contactPreview.setAttribute('src', './assets/images/' + idValue + '-preview.png');
    })

    element.addEventListener('mouseleave', function () {
        
        contactPreview.setAttribute('src', './assets/images/telephone.svg');
    })
});


// TRANSITIONS
function transitions(classname, to) {
    transitionBox.classList.add(classname)
    setTimeout(function () {
        window.location.href = to
    }, 1500)
    
}
