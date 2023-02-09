let date = new Date();
let FullYear = String(date.getFullYear());
let StFullYear = String(FullYear-1);
let Month = String(date.getMonth()+1).padStart(2,0);
let Day = String(date.getDate()).padStart(2,0);
let Today = FullYear+Month+Day;
let Stday = StFullYear+Month+Day;
console.log(Today);
console.log(Stday);

var xhr = new XMLHttpRequest();
var url = 'https://www.museum.go.kr/site/main/openapi/archive/post/category/category_54';
var queryParams = '?' + encodeURIComponent('startdt') + '='+ encodeURIComponent(Stday);
queryParams += '&' + encodeURIComponent('enddt') + '=' + encodeURIComponent(Today);
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + '1U68dCesqZDzYQQxIj7dEzXXdToH3ND46dJ9R3dNQOpnFVLji7MSwMISOK6D13cKvk7q6hJxd55dsCbu852WaA%3D%3D';
queryParams += '&' + encodeURIComponent('pagesize') + '=' + encodeURIComponent('6');

xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    console.log('success?');
    console.log(xhr);
  }
};

xhr.send('');