/* Add class active to header on scroll */
let header = document.querySelector("header")

window.onscroll=function(){
    if(this.scrollY >= 50){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

let nav_links = document.getElementById("links");

function Open_close_Menu(){
    nav_links.classList.toggle("active")
}



function more(){
   var dots = document.querySelector('.dots'),
       more = document.querySelector('.more'),
       button = document.getElementById('button');

       if(dots.style.display == 'none'){
        dots.style.display = 'block';
        more.style.display = 'none';
        button.innerHTML = 'read more';
       }else{
        dots.style.display = 'none';
        more.style.display = 'inline';
        button.innerHTML = 'read less';
       }
}



