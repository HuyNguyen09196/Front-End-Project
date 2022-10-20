var $body=$("body");
$body.css("backgroundColor","#212529")
var $main=$("<div id='result' ></div>");
var $card=$("<div class='card'></div>")
$body.append($card);
$card.append($main)
var $result=$("#result");
var $input= $("#input").val();
console.log($input);
$(document).ready(function(){
  $.get("https://api.jikan.moe/v4/anime",function(data){
    console.log(data.data[0]);
    var datas=data.data;
    for( var i =0;i<24;i++){
      anime(datas[i]);
    }



    function anime(datas){
      var $div=$("<div class='card' style='width: 18rem;'></div>");
      var $img=$("<img class='card-img-top' height='280px'></img>");
      $img.attr("src",datas.images.jpg.image_url);
      var $h=$("<h4 id='text' class='card-title'></h4>");
      var $p=$("<p id='text' class='card-text'></p>");
      var $a=$("<a id='abc' class='btn btn-primary'>Watch Now</a>");
      var $a2=$("<a id='abcd' class='btn btn-primary'>Trailer</a>");
      $a.attr("href",datas.url);
      $h.text(datas.title);
      $p.text(datas.genres[0].name,);
      $a2.attr("href",datas.trailer.url)
      var $div2=$("<div id='bd' class='card-body'></div>");
      $result.append($div);
      $div.append($img);
      $div.append($div2);
      $div2.append($h);
      $div2.append($p);
      $div2.append($a);
      $div2.append($a2);
      
    }
  });
});


///////////////////////////////////////


$("#search").on("click",search);
function search(e){
  $("#carouselExampleIndicators").hide()
  clear();
  e.preventDefault();
  $.get("https://api.jikan.moe/v4/anime?q="+  $("#input").val() ,function(data){
    console.log(data.data[0]);
    var datas=data.data;
    for( var i =0;i<=datas.length;i++){
      anime(datas[i]);
    }



    function anime(datas){
      var $div=$("<div class='card' style='width: 18rem;'></div>");
      var $img=$("<img class='card-img-top' height='350px'></img>");
      $img.attr("src",datas.images.jpg.image_url);
      var $h=$("<h5 id='text' class='card-title'></h5>");
      var $p=$("<p id='text' class='card-text'></p>");
      var $a=$("<a id='abc' class='btn btn-primary'>Watch Now</a>");
      var $a2=$("<a id='abcd' class='btn btn-primary'>Trailer</a>");
      $a.attr("href",datas.url);
      $a2.attr("href",datas.trailer.url)
      $h.text(datas.title);
      $p.text(datas.genres[0].name,);
      var $div2=$("<div id='bd' class='card-body' ></div>");
      $result.append($div);
      $div.append($img);
      $div.append($div2);
      $div2.append($h);
      $div2.append($p);
      $div2.append($a);
      $div.css("float","left")
      $div.css("display","flex")
      $div2.append($a2);  
      
    }
  });
}

function clear(){
  $result.empty();
}


// $("#search").on("click",search)
// var $input= $("#input").val();
// console.log($input);
// function search(e){
//   e.preventDefault();
//   $.get("https://api.jikan.moe/v4/anime?q="+ $input ,function(data){
//     console.log(data)
//     console.log($input)
// // $.get("https://api.jikan.moe/v4/anime?q="+ "demon slayer",function(data){
//   console.log(data.data[0]);
//   var datas=data.data
//   for( var j =0;j<datas.length;j++){
//     // anime(data[i]);   
// //   }
// //   function anime(data){
//     var $span=$("<span class='card'></span>");
//     var $h1=$("<h1 class='title'></h1>");
//     var $img=$("<img class='image'></img>");
//     var $h2=$("<h2 class='genres'></h2>");
//     var $div=$("<div class='sumary'></div>");
//     var $p=$("<p></p>");
//     var $a=$("<a>view anime</a>");
//     var $p=$("<p>synopsis</p>")

//     $h1.text(datas[j].title);
//     $img.attr("src",datas[j].images.jpg.image_url)
//     $h2.text(datas[j].genres[0].name)
//     $div.append($p)
//     $p.text(datas[j].synopsis)
//     $a.attr("href",datas[j].url)

    


//     $result.append($span);
//     $span.append($h1);
//     $span.append($img)
//     $span.append($h2)
//     $span.append($div)
//     $span.append($a)
    

//   }
// });
