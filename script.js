// Scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));

        if(alvo){
            alvo.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efeito ao rolar a página
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.2
});

sections.forEach(sec=>{
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all .8s ease";
    observer.observe(sec);
});

// Título piscando
const logo = document.querySelector(".logo");

setInterval(()=>{
    logo.style.textShadow = "0 0 20px #356eff";
    setTimeout(()=>{
        logo.style.textShadow = "none";
    },500);
},3000);
