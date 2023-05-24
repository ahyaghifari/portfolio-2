var profiles = document.querySelectorAll('.profiles')
var profilesPreview = document.querySelectorAll('.profiles-preview')

profiles.forEach(function (element) {
    element.addEventListener('click', function () {
        var idValue = this.getAttribute('id')
        profilesPreview.forEach(function (element) {
            element.classList.remove('active')
        })
        if (idValue == 'profil') {
            document.getElementById('profil-pribadi').classList.add('active')
        } else if (idValue == 'experiences') {
            document.getElementById('experiences-preview').classList.add('active')
        } else if (idValue == 'riwayat-pendidikan') {
            document.getElementById('riwayat-pendidikan-preview').classList.add('active')
        }
    })
})