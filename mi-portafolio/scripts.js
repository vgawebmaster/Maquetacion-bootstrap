/*Menu*/
((d)=>{
  const $btnMenu = d.querySelector('.navbar-toggler'),
  $menu = d.querySelector('.navbar-nav');
  console.log($menu);
  // console.log($btnMenu);
  // $btnMenu.addEventListener('click', (e)=>{
  // $btnMenu.firstElementChild.classList.toggle('none');
  // $btnMenu.lastElementChild.classList.toggle('none');
  // $menu.classList.toggle('is-active');
  
  // });
  
  d.addEventListener('click', (e) => {
  
      if(!e.target.matches('.navbar-nav a')) return false;
      $btnMenu.click();
      // console.log("test");
      // $btnMenu.firstElementChild.classList.remove('none');
      // $btnMenu.lastElementChild.classList.add('none');
      // $menu.classList.remove('is-active');
  
  });
  
  
  
  

})(document);