window.addEventListener('DOMContentLoaded',function(){
  let req = new XMLHttpRequest();
  let alarmHere = '/js/notice-alarm.json'
  req.open('GET',alarmHere);
  req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200){
      putText(this.responseText);
      // console.log(this.responseText);
    }
  }
  req.send();
  
  function putText(almText){
    let aLtitle = new Array();
    let aLdate = new Array();
    let alarmUl = document.querySelector('.cast-list');
    
    let alarmText = JSON.parse(almText);
    
    for(let i=0; i<alarmText.length; i++){
      aLtitle = alarmText[i].title;
      aLdate = alarmText[i].date;

      let liTag = document.createElement('li');
      let title = document.createElement('a');
      let date = document.createElement('p');
      alarmUl.append(liTag);
      liTag.appendChild(title);
      liTag.appendChild(date);
      title.appendChild(document.createTextNode(aLtitle));
      date.appendChild(document.createTextNode(aLdate));

    }
    var birthA = document.querySelectorAll('.cast-list li a');
    var birthP = document.querySelectorAll('.cast-list li p');
    for(let k=0; k<birthA.length; k++){
      birthA[k].className = 'board-link'
      birthP[k].className = 'board-post-date'
    }
  }

})
