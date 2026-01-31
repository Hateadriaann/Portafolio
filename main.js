

document.addEventListener('DOMContentLoaded', ()=>{
  const estrellas = document.querySelectorAll('.estrella');
  const mensaje = document.getElementById('mensaje-rating');

  if(estrellas.length > 0){
    estrellas.forEach((estrella, index)=>{
      estrella.addEventListener('click', () => {

        estrellas.forEach((s, i) => {

          if(i <= index){
            s.classList.remove('fa-regular');
            s.classList.add('fa-solid');
            s.classList.add('activa');
          }else{
            s.classList.remove('fa-solid');
            s.classList.add('fa-regular');
            s.classList.remove('activa');
          }
        });

        if(mensaje){
          mensaje.style.display = 'block';
          mensaje.innerHTML = mensaje.innerHTML = `¡Gracias por darnos ${index + 1} estrellas! ⭐`;;
        }
      })
    });
  }
});