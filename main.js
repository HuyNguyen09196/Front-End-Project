var $body=$("body");
$body.css("backgroundColor","#212529")
var $account=$("<div class='container text-center' ></div>");
var $card=$("<div class='layout'></div>")
$body.append($card);
$body.append($account);
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
      var $h=$("<h5 id='text' class='text-break'></h5>");
      var $p=$("<p id='text' class='card-text'></p>");
      var $a=$("<a id='abc' class='btn btn-light'>Watch Now</a>");
      var $a2=$("<a id='abcd' class='btn btn-light'>Trailer</a>");
      $a.attr("href",datas.url);
      $h.text(datas.title);
      $p.text(datas.genres[0].name,);
      $a2.attr("href",datas.trailer.url)
      var $div2=$("<div id='bd' class='card-body'></div>");
      $card.append($div);
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
      var $h=$("<h5 id='text' class='text-break'></h5>");
      var $p=$("<p id='text' class='card-text'></p>");
      var $a=$("<a id='abc' class='btn btn-light'>Watch Now</a>");
      var $a2=$("<a id='abcd' class='btn btn-light'>Trailer</a>");
      $a.attr("href",datas.url);
      $a2.attr("href",datas.trailer.url)
      $h.text(datas.title);
      $p.text(datas.genres[0].name,);
      var $div2=$("<div id='bd' class='card-body' ></div>");
      $card.append($div);
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
////////////////////////////////////////////

$("#login").on("click",function(){
  $("#loginHolder").remove();
  $("#carouselExampleIndicators").hide()
  clear();
  var $loginHolder=$("<div id='loginHolder' class='card-body'></div>")
  var $div=$("<div id='user' class='form-floating mb-3'></div>")
  var $input=$("<input type='email' class='form-control' id='floatingInput' placeholder='User Name'>")
  var $label=$("<label for='floatingInput'>Email address</label>")
  $div.append($input)
  $div.append($label)
  var $div2=$("<div class='form-floating'></div>")
  var $input2=$("<input type='password' class='form-control' id='floatingPassword' placeholder='Password'>")
  var $label2=$("<label for='floatingPassword'>Password</label>")
  var $a=$("<a id='input1' class='btn btn-primary' href='index.html' role='button'>Login</a>")
  $div2.append($input2)
  $div2.append($label2)
  $loginHolder.append($div)
  $loginHolder.append($div2)
  $loginHolder.append($a)
  $account.append($loginHolder)
})

function clear(){
  $card.empty();
}