import  scrollTopButton from "./boton_scroll.js";
const d = document, w = window;
// d.addEventListener("readystatechange", (e) =>{
//     alert('test2');
    
    
//     });

d.addEventListener("DOMContentLoaded", (e) =>{
// alert('test1');
scrollTopButton(".scroll-top-btn");

});


// w.addEventListener("load", (e) =>{
//     alert('test3');
    
    
//     });


/*Menu*/
((d)=>{
  const $btnMenu = d.querySelector('.navbar-toggler');
  $btnMenu.addEventListener('click', (e)=>{
  $btnMenu.firstElementChild.classList.toggle('none');
  $btnMenu.lastElementChild.classList.toggle('none');

  
  });
  
  d.addEventListener('click', (e) => {
  
      if(!e.target.matches('.menu a')) return false;
  
      $btnMenu.click();
   
      
  });
  
  
  
  
  })(document);




  /*ContactForm*/
((d)=>{
  const $form = d.querySelector('.contact-form'),
  $loader = d.querySelector('.contact-form-loader'),
  $response = d.querySelector('.contact-form-response');

  $form.addEventListener('submit', (e)=>{
  e.preventDefault();
  $loader.classList.remove('none');
  fetch("https://formsubmit.co/ajax/3505f12a346a5e3d7afbf5296b36ff8a ", {
      method:"POST",
      body: new FormData(e.target)

  }

  
  ).then(res=> res.ok ? res.json() : Promise.reject(res)).then(json=> {
      console.log(json);
  
      location.hash = "#gracias";
      $form.reset();

  }).catch(
      err=>{
          console.log(err);
          let message = err.status.Text || "Ocurrio un error al enviar, intenta nuevamente";
          $response.querySelector("h3").innerHTML= `Error ${message}`;
 

      }
  ).finally(()=>{
      $loader.classList.add("none")

      setTimeout(() => {
          location.hash = "#close";
      }, 3000);

  });


  });
  

  
  
  


  })(document);


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }