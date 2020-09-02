const pertenecientes = document.querySelector(".pertenecientes");
document.querySelector(".btnPertenecientes")
    .addEventListener("click", function(){scroll(pertenecientes,-100)},true);


const nuevosIngresantes = document.querySelector(".nuevosIngresantes");
document.querySelector(".btnIngresantes")
    .addEventListener("click", function(){scroll(nuevosIngresantes,-241)},true);

    
const documentacion = document.querySelector(".documentacion");
document.querySelector(".btnDocumentacion")
    .addEventListener("click", function(){scroll(documentacion,-241)},true);


// 
async function ircontact(){
    const contact = document.querySelector(".contact");
    document.querySelector(".scroll-contact")
        .addEventListener("click", function(){scroll(contact,-80)});
}