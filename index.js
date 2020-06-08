const icon=document.querySelector(".icon")
const navelink=document.querySelectorAll(".nav__link")
icon.addEventListener('click',()=>{
document.body.classList.toggle("nav-open")
})

navelink.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove("nav-open")
    })
})
