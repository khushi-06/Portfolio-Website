// ----------------toogle icon navbar-------------------------------
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}


// scroll section for link---------------------------

let sections = document.querySllelectorAll ('section');
let navlinks = document.querySllelectorAll ('header nav a');

window.onscroll = ()=> {
    sections.forEach (sec=>{
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute ('id');

        if(top>=offset&& top <offset+height){
            navlinks.forEach(links=>  {
                links.classlist.remove('active');
                document.querySelector('header nav a[href* ='+ id +']').classlist.add('active');
            });
        };
    });
// -------------------------sticky navbar------------------------
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);




    // ----------------remove  toogle icon and  navbar when click on navbar link(scroll)-------------------------------

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  
    
};

// <!-- scroll reveal -->

ScrollReveal({ 
    // reset: true,
    distance :'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* --------------typed js-----------*/

    // const typed= new Typed ('.multiple-text',
    // {
    //     strings : ['Frontend Developer', 'UI/UX Designer','Graphics Designer'],
    //     typespeed: 100,
    //     backSpeed:100,
    //     backDelay: 1000,
    //     loop :true,

    // });

    const typed =newTyped( '.multiple-text',{
        strings : ['Frontend Developer', 'UI/UX Designer','Graphics Designer'],
        typeSpeed: 100,
        backSpeed:100,
        backDelay: 1000,
        loop :true,

    });

