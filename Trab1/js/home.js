$(document).ready(function(event){
  $("#img11").mouseenter(function(){
    $("#img11").animate({height:'500px',width:'590px'});
    $("#img22").animate({height:'200px',width:'200px'});
    $("#img33").animate({height:'200px',width:'200px'});

});
  $("#img11").mouseleave(function(){
    $("#img11").animate({height:'350px',width:'385px'});
    $("#img33").animate({height:'350px',width:'385px'});
    $("#img22").animate({height:'350px',width:'370px'});
    
});
   $("#img22").mouseenter(function(){
    $("#img22").animate({height:'500px',width:'590px'});
    $("#img11").animate({height:'200px',width:'200px'});
    $("#img33").animate({height:'200px',width:'200px'});
});
  $("#img22").mouseleave(function(){
    $("#img22").animate({height:'350px',width:'370px'});
    $("#img11").animate({height:'350px',width:'385px'});
    $("#img33").animate({height:'350px',width:'385px'});
});
    $("#img33").mouseenter(function(){
    $("#img33").animate({height:'500px',width:'590px'});
    $("#img11").animate({height:'200px',width:'200px'});
    $("#img22").animate({height:'200px',width:'200px'});

});
  $("#img33").mouseleave(function(){
    $("#img33").animate({height:'350px',width:'385px'});
    $("#img22").animate({height:'350px',width:'370px'});
    $("#img11").animate({height:'350px',width:'385px'});
});

$("#Titulo1").click(function(){
  $("#img33").animate({height:'toggle'});
  $("#img22").animate({height:'toggle'});
  $("#img11").animate({height:'toggle'});
});



});

