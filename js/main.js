//Changing the navbar styles on page scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//FAQs accordions, display the paragraph on plus icon click
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon on toggle to +/-
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

//displaying nav menu on nav icon click
const navmenu = document.querySelector(".nav__menu");
const navmenuBtn = document.querySelector("#open-menu-button");
const navmenuCloseBtn = document.querySelector("#close-menu-button");

navmenuBtn.addEventListener('click', () => {
    navmenu.style.display = "flex";
    navmenuCloseBtn.style.display = "inline-block";
    navmenuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    navmenu.style.display = "none";
    navmenuCloseBtn.style.display = "none";
    navmenuBtn.style.display = "inline-block";
}

navmenuCloseBtn.addEventListener('click', closeNav);