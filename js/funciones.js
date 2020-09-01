const contact = document.querySelector(".contact");

//Boton Contact
document.querySelector(".scroll-contact")
    .addEventListener("click", function(){scroll(contact,-80)},true);
    
//Pasas el div o elemento que queres scrollear y el offset para contemplar la barra, etc
function scroll(element, offset){
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset; 

    window.scrollTo({
        top: yCoordinate + yOffset,
        behavior: 'smooth'
    });  
}



// function gotoContact(){ 
//     // window.location.href = 'index.html';
//     console.log(window.location);
// }