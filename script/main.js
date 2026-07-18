


document.addEventListener("DOMContentLoaded", function() {

    // Mobile Menu Hambuger
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", function() {
        const isOpen = nav.classList.toggle("open");
        // keeps the button's aria-expanded attribute in sync for screen readers
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link){
        link.addEventListener("click", function(){
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // sticky nav shadow on scroll
    const headerContainer = document.querySelector(".header-container");
    window.addEventListener("scroll", function(){
        if(window.scrollY > 10) {
            headerContainer.classList.add("scrolled");
        }else {
            headerContainer.classList.remove("scrolled");
        }
    });

    // scroll-triggered reveal animations
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // only animate once
            }
        });
        },
        { threshold: 0.15 } // fires when ~15% of the section is visible
    );
    revealEls.forEach(function (el) {
        revealObserver.observe(el);
    });

    //   faq
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function(item){
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function (){
            const alreadyOpen = item.classList.contains("open");
            // close aq item first
            faqItems.forEach(function (i){
                i.classList.remove("open");
            });

            // ...then reopen this one, unless it was the one already open
            // (this makes it act like a "single open item at a time" accordion)

            if (!alreadyOpen) {
                item.classList.add("open");
            }
        });
    });
    document.getElementById("year").innerHTML = new Date().getFullYear();
});
