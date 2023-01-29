const httpGet=(URL)=>
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


const getRandomImage=()=>
{
  var json = httpGet('https://dog.ceo/api/breeds/image/random');
  console.log(json);
  var array = JSON.parse(json);
  console.log(array);
  var url = array.message;
  console.log(url);
  var image = document.getElementById('dogImage');
  image.src = url;
}