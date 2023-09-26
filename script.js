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
// -------------------------sticky notes------------------------
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);




    // ----------------remove  toogle icon and  navbar when click on navbar link(scroll)-------------------------------

    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');  




};