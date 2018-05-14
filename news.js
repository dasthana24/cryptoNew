var newsTable = document.getElementById('latest_news');

var settings = {
 async: true,
 crossDomain: true,
 //news api 1
 //“url”: “https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?q=Bitcoin&from=2018-05-12&sortBy=popularity&country=us&apiKey=88669a8257f94598ad09ac27524f6081“,
 url:  `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=c36e98a313a343dc90bf3bd0a9f30af1`,
 method: "GET"
}



// country=us&’ +
//          ‘apiKey=API_KEY’;
//https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=c36e98a313a343dc90bf3bd0a9f30af1
function getNews(response){
 // responseponse.articles.forEach(function(val){
 //   console.log(val)
 // }).articles
 // console.log(response.articles[“0”].title)
}

function getData(){

$.ajax(settings).then(function (response) {
  

    for (var i=0; i<response.articles.length;i++)
    {
        
        // $(newsDiv).text(response.articles[i].title)
        $("#news").append(
            "<p> Heading :" + 
            response.articles[i].title +
            " <a href='" + response.articles[i].url + "'>"+ response.articles[i].url +"</a>" + "<br>"+
            
            "<span> Description :" + response.articles[i].description+ "</span>"  
          + "<hr>" +
            
            "</p>"
         
        
        
        );
        // console.log(newsDiv);
    }
 //console.log(responseponse.articles[“1"].title);
 console.log(response);
 console.log(response.articles[0].title);
 getNews(response);


// $(‘#latest_news’).text(response.articles[“0"].title);
// $('#news').text(response.articles[0].title);
});



}


// function log(){
//   console.log(‘nick...... my log funtion’)
// }

getData();




//“url”: “https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=Bitcoin&from=2018-05-12&sortBy=popularity&apiKey=88669a8257f94598ad09ac27524f6081",


// function getData(){
//
// }