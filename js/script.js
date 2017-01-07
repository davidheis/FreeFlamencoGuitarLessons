$(document).ready(function(){
   
//change copyright and signature to white
var copyright = document.querySelector("span.glyphicon-copyright-mark");
var signature = document.querySelector("span.glyphicon-copyright-mark + cite");
copyright.classList.add("whiten");
signature.classList.add("whiten");

//change footerlist class so contact icons change white
document.querySelector(".footerlist a i.fa-linkedin").classList.add("whiten");
document.querySelector(".footerlist a i.fa-facebook").classList.add("whiten");
document.querySelector(".footerlist a i.fa-youtube").classList.add("whiten");


//toggle videos to appear
    $("iframe").css("height", "45vw");
    $("#vidbutton1").on("click", function(){
        $("#iframe1").toggleClass("hidden");
    });
    $("#vidbutton2").on("click", function(){
        $("#iframe2").toggleClass("hidden");
    });
        $("#vidbutton3").on("click", function(){
        $("#iframe3").toggleClass("hidden");
    });
    $("#vidbutton4").on("click", function(){
        $("#iframe4").toggleClass("hidden");
    });
        $("#vidbutton5").on("click", function(){
        $("#iframe5").toggleClass("hidden");
    });
    $("#vidbutton6").on("click", function(){
        $("#iframe6").toggleClass("hidden");
    });
        $("#vidbutton7").on("click", function(){
        $("#iframe7").toggleClass("hidden");
    });
    $("#vidbutton8").on("click", function(){
        $("#iframe8").toggleClass("hidden");
    });
        $("#vidbutton9").on("click", function(){
        $("#iframe9").toggleClass("hidden");
    });
    $("#vidbutton10").on("click", function(){
        $("#iframe10").toggleClass("hidden");
    });
        $("#vidbutton11").on("click", function(){
        $("#iframe11").toggleClass("hidden");
    });
    $("#vidbutton12").on("click", function(){
        $("#iframe12").toggleClass("hidden");
    });
    
//insert hr before footer
var hr1 = document.createElement('hr');
var footer = document.querySelector('.container-fluid .footerlist').parentNode;
var sp2 = document.querySelector('.container-fluid .footerlist');
footer.insertBefore(hr1, sp2);

//clear both by adding ID, to prevent footer from sliding and collapsing up
footer.setAttribute('id', 'footerBlock');


    
     //put margin under header
document.querySelector('header').style.marginBottom = "70px";
    
});
    