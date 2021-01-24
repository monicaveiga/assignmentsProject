$('a.catmenu').click(function () {
  $("#sidebar").show();
});
$('.close-sb').click(
  function () {
    $("#sidebar").hide();
  });
  $(document).mouseup(function(e){
    var sb = $("#sidebar");
     if(!sb.is(e.target) && sb.has(e.target).length === 0){
        sb.hide();
    }
});
$("#sidebar").hide();
$("div#sidebar").find("div.desp").hide();

$("button.plant, div.plant").mouseover(function () {
  $("div#sidebar").find("div.plant").show();
}).mouseleave(function () {
  $("div#sidebar").find("div.plant").hide();
});
$("button.plant, div.plant").click(function () {
  $("div#sidebar").find("div.plant").show();
});

$("button.tool, div.tool").mouseover(function () {
  $("div#sidebar").find("div.tool").show();
}).mouseleave(function () {
  $("div#sidebar").find("div.tool").hide();
});
$("button.tool, div.tool").click(function () {
  $("div#sidebar").find("div.tool").show();
});

$("button.cos, div.cos").mouseover(function () {
  $("div#sidebar").find("div.cos").show();
}).mouseleave(function () {
  $("div#sidebar").find("div.cos").hide();
});
$("button.cos, div.cos").click(function () {
  $("div#sidebar").find("div.cos").show();
});
$("button.nut, div.nut").mouseover(function () {
  $("div#sidebar").find("div.nut").show();
}).mouseleave(function () {
  $("div#sidebar").find("div.nut").hide();
});
$("button.nut, div.nut").click(function () {
  $("div#sidebar").find("div.nut").show();
});
$(".semilla.rab").mouseover(function () {
  $(".semilla.rab").attr('title', 'Semilla de rabanito ecológico redondo rojo Saxa');
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.butt").mouseover(function () {
  $(".semilla.butt").attr('title', 'Semillas ecológicas de calabaza Butternut');
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.gir").mouseover(function () {
  $(".semilla.gir").attr("title", "Semillas de Espinaca Sevilla sel. Giralda");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.ceb").mouseover(function () {
  $(".semilla.ceb").attr("title", "Semillas de cebollino anual");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.ruc").mouseover(function () {
  $(".semilla.ruc").attr("title", "Semillas de rúcula");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.chi").mouseover(function () {
  $(".semilla.chi").attr("title", "Semillas ecológicas de guisante 1/2 enrame Alderma");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.cal").mouseover(function () {
  $(".semilla.cal").attr("title", "Semillas de caléndula semi alta doble variada");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.gira").mouseover(function () {
  $(".semilla.gira").attr("title", "Semillas de girasol para pipas");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.dio").mouseover(function () {
  $(".semilla.dio").attr("title", "Semillas de Dionaea Funnel Trap");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.alc").mouseover(function () {
  $(".semilla.alc").attr("title", "Semillas de alcachofa");
}).mouseleave(function () {
  $(".semilla").attr("title", "");
});
$(".semilla.rab").click(function(){
  prodActual(1);
});
$(".semilla.butt").click(function(){
  prodActual(2);
});
$(".semilla.gir").click(function(){
  prodActual(3);
});
$(".semilla.ceb").click(function(){
  prodActual(4);
});
$(".semilla.ruc").click(function(){
  prodActual(prods.length-5);
});
$(".semilla.chi").click(function(){
  prodActual(prods.length-4);
});
$(".semilla.cal").click(function(){
  prodActual(prods.length-3);
});
$(".semilla.gira").click(function(){
  prodActual(prods.length-2);
});
$(".semilla.dio").click(function(){
  prodActual(prods.length-1);
});
$(".semilla.alc").click(function(){
  prodActual(prods.length);
});
var prods = $(".producto");
var prodIndex = 1;
function cambia(n) {
  mostrarProd(prodIndex += n);
}
function prodActual(n) {
  mostrarProd(prodIndex = n);
}
function mostrarProd(n) {
  var i;
  if (n > prods.length) { prodIndex = 1 }
  if (n < 1) { prodIndex = prods.length }
  for (i = 0; i < prods.length; i++) {
    // prods[i].style.display = "none";
    $(prods[i]).css("display", "none");
  }
  $(prods[prodIndex - 1]).css("display", "block");
}
mostrarProd(prodIndex);
$('.semilla').click(function () {
  // $('header, section, nav, footer, div.breadcrumb').hide();
  $('.galModal').css('display', 'block');
});
$('.close-btn').click(function () {
  // $('header, section, nav, footer, div.breadcrumb').show();
  $('.galModal').css("display", "none");
});
$(document).mouseup(function(e){
  var gal = $(".galModal");
   if(!gal.is(e.target) && gal.has(e.target).length === 0){
    gal.css('display', 'none');
  }
});
$(".semilla img").mouseenter(function () {
  $(this).animate({
    opacity: '0.9',
    width: '+=20px',
    height: '+=10px'
  });
}).mouseleave(function () {
  $(this).animate({
    width: '-=20px',
    opacity: '1',
    height: '-=10px'
  });
});
$('div#sementesSection').mouseenter(function(){
  $('div#sementesSection').on('mousemove', function (e) {
  $('#coord').css('top', e.pageY);
  $('#coord').css('left', e.pageX);
  var coordenadas = "X:" + e.pageX + "- Y:" + e.pageY;
  $('#coord').text(coordenadas);
});
}).mouseleave(function(){
  $('#coord').text("");
});
$('.contDesp').css('display', 'none');
$('.desplegable, .contDesp').hover(function(){
  $('.contDesp').slideDown(200);
  $('.contDesp').css('display', 'block');
  $('.contDesp').css('left', document.getElementById("desplegable").offsetLeft-40);
}, function(){
  $('.contDesp', this).stop().slideUp(200);
  $('.contDesp').css('display', 'none');
});