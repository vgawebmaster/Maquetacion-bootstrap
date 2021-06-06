import  scrollTopButton from "./boton_scroll.js";
const d = document, w = window;
// d.addEventListener("readystatechange", (e) =>{
//     scrollTopButton(".scroll-top-btn");
    
    
//     });

d.addEventListener("DOMContentLoaded", (e) =>{
w.scrollTo(0,0);

scrollTopButton(".scroll-top-btn");

});

// w.addEventListener("load", (e) =>{

// scrollTopButton(".scroll-top-btn");
    
//     });


/*Menu*/
((d)=>{
  const $btnMenu = d.querySelector('.navbar-toggler'),
  $header = d.querySelector('header'),  $navMenu = d.querySelector('#navbarNavAltMarkup');

 
  $btnMenu.addEventListener('click', (e)=>{
  $btnMenu.firstElementChild.classList.toggle('none');
  $btnMenu.lastElementChild.classList.toggle('none');
  let scrollTop = window.pageYOffset || d.documentElement.scrollTop;
  if ($btnMenu.firstElementChild.classList.contains('none') && !$header.classList.contains('bg-second-color')) {
    $header.classList.add('bg-second-color');
  }else if (scrollTop < 38){
    $header.classList.remove('bg-second-color');

  }


    // if (!$header.classList.contains('bg-second-color') || $navMenu.classList.contains('show')) $header.classList.toggle('bg-second-color');

  });



  
  d.addEventListener('click', (e) => {
    let breakpoint = w.matchMedia('(max-width: 991px)'); //interesante
      if(!e.target.matches('.menu a') || !breakpoint.matches) return false;

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
    
		console.log("El Navegador admite service workers");
    w.addEventListener("load", e=>{

    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
    });

  }