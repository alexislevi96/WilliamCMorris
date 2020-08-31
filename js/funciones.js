// Funcion que cambia de pagina al index desde institucional
// document.querySelector(".form-contact")
//     .addEventListener('click',()=>{
//         window.location.href = 'index.html';
//     });

document.querySelector(".scroll-contact")
    .addEventListener("click", scrollContact,true);
    
//Contemplar el anchor de la barra nav, para que se vea el texto de contacto
function scrollContact(e){
    document.querySelector(".contact").scrollIntoView(true);
}

// function gotoContact(){ 
//     // window.location.href = 'index.html';
//     console.log(window.location);
// }