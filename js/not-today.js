window.addEventListener('DOMContentLoaded',function(){
  let attention = document.querySelector('#layer');
  let notToday = document.querySelector('.not-today');
  let closeBtn = document.querySelector('.layer-close');
  let visited

  function setCookie(name,value,seven){
    let date = new Date();
    date.setDate(date.getDate()+seven);
    let expDate = date.toDateString();
    let bakeCookie = '';
    bakeCookie += name + '=' + value + ';' 
    bakeCookie += 'Expires=' + expDate;
    document.cookie = bakeCookie;
  }
  function delCookie(name,value){
    let date = new Date();
    let expDate = date.toDateString();
    date.setDate(date.getDate() - 1);
    let breakCookie = '';
    breakCookie += name + '=' + value + ';' 
    breakCookie += 'Expires=' + expDate;
    document.cookie = breakCookie;
  }
  function checkCookie(name){
    let allcookies = document.cookie.split(';');
    allcookies.forEach((eachCookie)=>{
      if(eachCookie.indexOf(name) > -1){
        visited = true;
      }
    });
    if(visited){
      attention.style.display = 'none';
    }else{
      attention.style.display = 'block';
    }
  }
  checkCookie('todayCookie');
  notToday.addEventListener('click',function(){
    setCookie('todayCookie','popup',7);
    attention.style.display = 'none';
  })
  closeBtn.addEventListener('click',function(){
    delCookie('todayCookie','popup');
  })
});