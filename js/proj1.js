window.addEventListener('DOMContentLoaded',()=>{
  console.log('ready');

  let goTopBtn = document.querySelector('.top-fix');
  goTopBtn.addEventListener('click',()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  })

  let utilBtns = document.querySelectorAll('.utility-btn');
  let utilArrow = document.querySelectorAll('.arrow-down');
  let utilSubs = document.querySelectorAll('.util-sub-list');
  let utilMuseum = document.querySelector('.util-museum');
  let utilLang = document.querySelector('.util-lang');

  utilBtns.forEach((utilBtn,index)=>{
    utilBtn.addEventListener('mouseenter',()=>{
      if(index == 3){
        utilBtn.style.background = '#222';
        utilBtn.style.color = '#fff';
        utilArrow[0].style.margin = '0 0  -1px 10px';
        utilArrow[0].style.borderBottomColor = '#fff';
        utilArrow[0].style.borderLeftColor = '#fff';
        utilArrow[0].style.transform = 'rotate(135deg)';

        utilSubs[0].style.display = 'block';
      }else if(index == 4){
        utilBtn.style.background = '#222';
        utilBtn.style.color = '#fff';
        utilArrow[1].style.margin = '0 0  -1px 10px';
        utilArrow[1].style.borderBottomColor = '#fff';
        utilArrow[1].style.borderLeftColor = '#fff';
        utilArrow[1].style.transform = 'rotate(135deg)';

        utilSubs[1].style.display = 'block';
      }
    });

    utilMuseum.addEventListener('mouseleave',()=>{
      utilBtns[3].style.background = '#fff';
      utilBtns[3].style.color = '#222';
      utilArrow[0].style.margin = '0 0  3px 10px';
      utilArrow[0].style.borderBottomColor = '#222';
      utilArrow[0].style.borderLeftColor = '#222';
      utilArrow[0].style.transform = 'rotate(-45deg)';
  
      utilSubs[0].style.display = 'none';
    });
    utilLang.addEventListener('mouseleave',()=>{
      utilBtns[4].style.background = '#fff';
      utilBtns[4].style.color = '#222';
      utilArrow[1].style.margin = '0 0  3px 10px';
      utilArrow[1].style.borderBottomColor = '#222';
      utilArrow[1].style.borderLeftColor = '#222';
      utilArrow[1].style.transform = 'rotate(-45deg)';
  
      utilSubs[1].style.display = 'none';
    });
  });
  
  let topBtns = document.querySelectorAll('.gnb-top-btn');
  let midMenu = document.querySelectorAll('.gnb-mid-list');
  let midBtns = document.querySelectorAll('.gnb-mid-btn');
  let botMenu = document.querySelectorAll('.gnb-bot-list');
  
  topBtns.forEach((topBtn)=>{
    topBtn.addEventListener('mouseenter',()=>{
      midMenu.forEach((midmenu)=>{
        midmenu.classList.remove('gnb-mid-on');
      });

      if(topBtn.nextElementSibling){
        let thisMid = topBtn.nextElementSibling.firstElementChild;
        thisMid.classList.add('gnb-mid-on');
      }
    });
  });
  midMenu.forEach((midmenu)=>{
    midmenu.addEventListener('mouseleave',()=>{
      midmenu.classList.remove('gnb-mid-on');
    });
  });
  midBtns.forEach((midBtn)=>{
    midBtn.addEventListener('mouseenter',()=>{
      botMenu.forEach((botmenu)=>{
        botmenu.classList.remove('gnb-bot-on');
      });
      if(midBtn.nextElementSibling){
        let thisBot = midBtn.nextElementSibling;
        thisBot.classList.add('gnb-bot-on');
      }
    });
  });

  //exhibition slide
  let ExhUl = document.querySelector('.nationExh-list');
  let ExhLi = document.querySelectorAll('.nationExh-list li');
  let nowIndex = 0;
  let liLength = ExhLi.length;
  let prev = document.querySelector('.nExh-prev');
  let next = document.querySelector('.nExh-next');
  let liWidth = 315;
  let liMargin = 60;

  ExhUl.style.width = (liWidth + liMargin) * liLength + 'px' ;
  
  function ExhMove(num){
    ExhUl.style.left = - num * (liWidth + liMargin) + 'px';
    nowIndex = num;
  }
  
  prev.addEventListener('click',()=>{
    if(nowIndex !== 0){
      ExhMove(nowIndex - 1);
    }
  });
  next.addEventListener('click',()=>{
    if(nowIndex !== liLength - 4){
      ExhMove(nowIndex + 1);
    }
  });
})