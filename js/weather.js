window.addEventListener('DOMContentLoaded',function(){
  let date = new Date();
  let FullYear = String(date.getFullYear());
  let Month = String(date.getMonth()+1).padStart(2,0);
  let Day = String(date.getDate()).padStart(2,0);
  let Today = FullYear+Month+Day;

  const castBox = document.querySelector('.utility-weather');
  let statusText,rainIcon,locText;
  rainIcon=[
    '<span class="material-symbols-outlined">sunny</span>',
    '<span class="material-symbols-outlined">rainy</span>',
    '<span class="material-symbols-outlined">weather_snowy</span>',
  ];
  let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
  let params = {
    type:['getUltraSrtNcst','getVilageFcst'],
    key:'1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D',
    pageNo: '1',
    numOfRows:'1000',
    dataType:'JSON',
    baseDate: Today,
    baseTime: '0600',
    nx:'60',
    ny:'127'
  }
  url=`${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.baseDate}&base_time=${params.baseTime}&nx=${params.nx}&ny=${params.ny}`
  // console.log(url);

  async function getPosts(){
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    return data;
  }
  async function setPosts(){
    const posts = await getPosts();
    const datas = posts.response.body.items.item;
    // const castEl = document.createElement('div');
    // const tr = document.createElement('tr');
    // castEl.classList.add('test');
    // castBox.appendChild(castEl);
    // castEl.appendChild(tr);
    console.log(datas);
    let cast={
      rain: datas[0].obsrValue,
      rainInfo: function(){
        let info = this.rain;
        if(info == 0){
          statusText = '맑음';
          rainIcon = rainIcon[0]
        }else if(info == 1){
          statusText = '비';
          rainIcon = rainIcon[1];
        }else if(info == 2){
          statusText = '눈/비';
          rainIcon = rainIcon[2];
        }else if(info == 3){
          statusText = '눈';
          rainIcon = rainIcon[2];
        }
      },
      temperature: datas[3].obsrValue,
      nx:datas[0].nx,
      ny:datas[0].ny,
      loc:function(){
        let point = [this.nx, this.ny];
        console.log(point);
        if(point[0] == 60 && point[1] == 127){
          locText = '서울특별시'
        }
      }
    }
    cast.rainInfo();
    cast.loc();

    castBox.innerHTML=`
      <p class="weather-local">${locText}</p>
      <p class="weather-status">${statusText}${rainIcon}</p>
      <p class="weather-temp">${cast.temperature}˚</p>
      <a href="https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084"><span class="material-symbols-outlined">info</span></a>
    `;
  }
  setPosts();

})