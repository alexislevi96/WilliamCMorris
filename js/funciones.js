//Pasas el div o elemento que queres scrollear y el offset para contemplar la barra, etc
function scroll(element, offset){
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset; 

    window.scrollTo({
        top: yCoordinate + yOffset,
        behavior: 'smooth'
    });  
}

