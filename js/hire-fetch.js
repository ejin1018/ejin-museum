let date = new Date();
let FullYear = String(date.getFullYear());
let StFullYear = String(FullYear-1);
let Month = String(date.getMonth()+1).padStart(2,0);
let Day = String(date.getDate()).padStart(2,0);
let Today = FullYear+Month+Day;
let Stday = StFullYear+Month+Day;
console.log(Today);
console.log(Stday);


var url = 'https://www.museum.go.kr/site/main/openapi/archive/post/category/category_54';
var queryParams = '?' + encodeURIComponent('startdt') + '='+ encodeURIComponent(Stday);
queryParams += '&' + encodeURIComponent('enddt') + '=' + encodeURIComponent(Today);
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + '1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D';
queryParams += '&' + encodeURIComponent('pagesize') + '=' + encodeURIComponent('6');

// 링크는 문제없으나 !!! CORS 오류남 !!!

// https://www.museum.go.kr/site/main/openapi/archive/post/category/category_54?startdt=20220201&enddt=20230201
// https://www.museum.go.kr/site/main/openapi/archive/post/category/category_54?startdt=20220201&enddt=20230201&serviceKey=1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D&pagesize=6

async function getPosts(){
  const res = await fetch(`${url}${queryParams}`);
  const data = await res.text();
  console.log(data)
}
getPosts();