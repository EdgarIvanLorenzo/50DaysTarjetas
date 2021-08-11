window.onload=()=>{
    const container=document.getElementsByClassName('container')[0];

    //Evento de mouseover en el container global
    container.addEventListener('mouseover',(elemento)=>{
        //Accedemos al elemento al cual se ejecuta ele evento y agregamos la clase
        elemento.target.classList.add('active');
    },true);

    //Evento de moouseout al div global que contiene todos los elementos
    container.addEventListener('mouseout',(elemento)=>{
        //Accedemos al elemento al cual se ejecuta ele evento y eliminamos la clase
        elemento.target.classList.remove('active');
    },true);
}