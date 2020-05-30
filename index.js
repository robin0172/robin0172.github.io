const navetoggle=document.querySelector('.nav-toggle');
const naveLinks=document.querySelectorAll('.nav__link')
navetoggle.addEventListener("click",()=>{
    document.body.classList.toggle('nav-open')
})

naveLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open')
    })
})