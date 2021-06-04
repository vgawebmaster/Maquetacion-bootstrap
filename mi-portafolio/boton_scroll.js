
const d = document, w = window;
export default function scrollTopButton(btn) {

  const $scrollBtn = d.querySelector(btn),
  $header = d.querySelector("header"),
  $btnMenu = d.querySelector('.navbar-toggler'), $navMenu = d.querySelector('#navbarNavAltMarkup');
  w.addEventListener("scroll", e =>{
    
  
    if ($navMenu.classList.contains('show')) {
      return;
    }
    let scrollTop = window.pageYOffset || d.documentElement.scrollTop;
console.log("test", scrollTop);
    if (scrollTop > 600) {
      $scrollBtn.classList.remove('hidden');

    }else{

      $scrollBtn.classList.add('hidden');
    }


    if (scrollTop > 75) {
      $header.classList.remove('bg-transparent');
      $header.classList.add('bg-second-color');
      
      $header.classList.add('bg-md-second-color');
    } else {
      $header.classList.remove('bg-second-color');
      $header.classList.remove('bg-md-second-color');
    }

  });

  d.addEventListener("click", e => {

    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0
        // left:0

      });
    }
    
  })

}