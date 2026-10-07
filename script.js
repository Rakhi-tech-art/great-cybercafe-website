document.addEventListener("DOMContentLoaded",()=>{
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}})},{threshold:.12});
 document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el=>observer.observe(el));
 const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();
 const current=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".nav-link").forEach(link=>{if(link.getAttribute("href")===current) link.classList.add("active")});
 document.querySelectorAll(".navbar .nav-link").forEach(link=>link.addEventListener("click",()=>{const menu=document.querySelector("#nav"); if(menu?.classList.contains("show")){const bs=bootstrap.Collapse.getInstance(menu);bs?.hide()}}));
 const form=document.querySelector("#contactForm");
 if(form){form.addEventListener("submit",e=>{e.preventDefault();const msg=document.querySelector("#successMessage");if(msg){msg.classList.remove("d-none");form.reset();setTimeout(()=>msg.classList.add("d-none"),5000)}})}
});