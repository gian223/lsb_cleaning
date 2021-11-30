// Contact form script
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_8awoaac', 'template_ibsj93e', this)
            .then(function() {
                console.log('SUCCESS!');
                document.querySelector('#contact-name').value = '';
                document.querySelector('#contact-email').value = '';
                document.querySelector('#contact-message').value = '';
                document.querySelector('.contact-message').textContent = 'Thanks for your email, we will be in contact shortly.';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

const navigation = document.querySelector('.navigation');
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll === 0){
        // document.querySelector('.navigation__top').style.display = "block"
        $(".navigation__top").slideDown();
    }else{
        // document.querySelector('.navigation__top').style.display = "none"
        $(".navigation__top").slideUp();
    }
});


const link = document.querySelectorAll('.navigation__link');
for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', function (){
        [].forEach.call(link, function(active) {
            active.classList.remove("navigation__link-active");
        });
        link[i].classList.add("navigation__link-active");
        function scroll(location){
            findLocation = $('html, body').animate({scrollTop: $(`#section-${location}`).offset().top}, 1000);
            return findLocation;
        }
        link[i].classList.contains('navigation__link-home') ? scroll('home') : null;
        link[i].classList.contains('navigation__link-about') ? scroll('about') : null;
        link[i].classList.contains('navigation__link-services') ? scroll('services') : null;
        link[i].classList.contains('navigation__link-work') ? scroll('work') : null;
        link[i].classList.contains('navigation__link-contact') ? scroll('contact') : null;
    });
}


const linkSmall = document.querySelectorAll('.navigation-small__link');

    for(let i = 0; i < linkSmall.length; i++){
        linkSmall[i].addEventListener('click', function (){
            function scroll(location){
                findLocation = $('html, body').animate({scrollTop: $(`#section-${location}`).offset().top}, 1000);
                return findLocation;
            }
            linkSmall[i].classList.contains('navigation__link-home') ? scroll('home') : null;
            linkSmall[i].classList.contains('navigation__link-about') ? scroll('about') : null;
            linkSmall[i].classList.contains('navigation__link-services') ? scroll('services') : null;
            linkSmall[i].classList.contains('navigation__link-work') ? scroll('work') : null;
            linkSmall[i].classList.contains('navigation__link-contact') ? scroll('contact') : null;
            document.querySelector(".navigation-small__checkbox").checked = false;
        });

const exploreBtn = document.querySelector('.explore-work');
    exploreBtn.addEventListener('click', function(){
        [].forEach.call(link, function(active) {
            active.classList.remove("navigation__link-active");
        });
        document.querySelector('.navigation__link-work').classList.add("navigation__link-active");
        $('html, body').animate({scrollTop: $('#section-work').offset().top}, 1000);
    })

}
