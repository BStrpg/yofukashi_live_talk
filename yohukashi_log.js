if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//PCの場合

//visibility:byousha
$(function(){
$(window).scroll(function (){
$(".byousha").each(function(){
var ePos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > ePos - windowHeight + windowHeight/6){
$(this).addClass('LtoR-early');
}
});
});
});

//visibility:left
$(function(){
$(window).scroll(function (){
$(".left").each(function(){
var ePos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > ePos - windowHeight + windowHeight/6){
$(this).children('span').addClass('hide');
$(this).children('p').addClass('hide');
$(this).css({'opacity':'1'});
$(this).children('span').css({'opacity':'0'});
$(this).children('p').css({'opacity':'0'});
$(this).children('span').removeClass('hide');
$(this).children('p').removeClass('hide');
$(this).children('span').addClass('LtoR-delay');
$(this).children('p').addClass('LtoR');
}
});
});
});

//visibility:right
$(function(){
$(window).scroll(function (){
$(".right").each(function(){
var ePos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > ePos - windowHeight + windowHeight/6){
$(this).children('span').addClass('hide');
$(this).children('p').addClass('hide');
$(this).css({'opacity':'1'});
$(this).children('span').css({'opacity':'0'});
$(this).children('p').css({'opacity':'0'});
$(this).children('span').removeClass('hide');
$(this).children('p').removeClass('hide');
$(this).children('span').addClass('RtoL-delay');
$(this).children('p').addClass('RtoL');
}
});
});
});


function opacityON(){
$(".log div").css({opacity:"0"});
var end = $(window).height();
var count = 0;

$(".log div").each(function(){
var position = $(this).offset().top;
if(position <= end){
count++
}
});
for(i = 0 ; i <= count - 2 ; i++){
var classname = $('.log div').eq(i).attr('class');
if(classname.indexOf('byousha') !== -1){
$('.log div').eq(i).addClass('LtoR-early');
}
else{
$('.log div').eq(i).css({opacity:"1"});
if(classname.indexOf('left') !== -1){
$('.log div').eq(i).children('span').addClass('LtoR-delay');
$('.log div').eq(i).children('p').addClass('LtoR');
}
else if(classname.indexOf('right') !== -1){
$('.log div').eq(i).children('span').addClass('RtoL-delay');
$('.log div').eq(i).children('p').addClass('RtoL');
}
else{
$('.log div').eq(i).css({'opacity':'1'});
}
}
}
}


}
//スマホ用
else{
//visibility:byousha
$(function(){
$(window).scroll(function (){
$(".byousha").each(function(){
var ePos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > ePos - windowHeight + windowHeight/10){
$(this).addClass('LtoR-early');
}
});
});
});


//visibility:left
$(function(){
$(window).scroll(function (){
$(".left").each(function(){
var ePos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > ePos - windowHeight + windowHeight/10){
    $(this).children('span').addClass('hide');
$(this).children('p').addClass('hide');
$(this).css({'opacity':'1'});
$(this).children('span').css({'opacity':'0'});
$(this).children('p').css({'opacity':'0'});
$(this).children('span').removeClass('hide');
$(this).children('p').removeClass('hide');
$(this).children('span').addClass('LtoR-delay');
$(this).children('p').addClass('LtoR');
}
});
});
});


function opacityON(){
$(".log div").css({opacity:"0"});
var end = $(window).height();
var count = 0;

$(".log div").each(function(){
var position = $(this).offset().top;
if(position <= end){
count++
}
});
for(i = 0 ; i <= count - 2 ; i++){
var classname = $('.log div').eq(i).attr('class');
if(classname.indexOf('kp') !== -1){
$('.log div').eq(i).addClass('LtoR-early');
}
else{
$('.log div').eq(i).css({opacity:"1"});
if(classname.indexOf('left') !== -1){
$('.log div').eq(i).children('span').addClass('LtoR-delay');
$('.log div').eq(i).children('p').addClass('LtoR');
}
else{
$('.log div').eq(i).css({'opacity':'1'});
}
}
}
}


};
opacityON();