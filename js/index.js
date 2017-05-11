$(window).scroll(function(e){
  if($(window).scrollTop()<=0)
    $(".explore,.navbar").addClass("at_top");
  else
    $(".explore,.navbar").removeClass("at_top");
});


$(document).on('click', 'a', function(event){
  event.preventDefault();
  var target=$(this).attr("href");
  $('html, body').animate({
    scrollTop:  $(target).offset().top
  },500);  
});


$(window).mousemove(function(evt){
  var pagex = evt.pageX;
  var pagey = evt.pageY;
  
  var x = pagex-$("#section_about").offset().left;
  var y = pagey-$("#section_about").offset().top;
  
  $(".mountain").css("transform", "translateX(" + (pagex/-20) + "px)")
  
  $(".r1text").css("transform", "translateX(" + (y / -5) + "px)")
  $(".r2text").css("transform", "translateX(" + (y / -10) + "px)")
  $(".r3text").css("transform", "translateX(" + (y / -12) + "px)")
  $(".tri1").css("transform", "translateY(" + (x / -12) + "px)")
  $(".tri2").css("transform", "translateX(" + (x / -10) + "px)")
  $(".tri3").css("transform", "translateX(" + (x / -8) + "px)")
  $(".tri4").css("transform", "translateX(" + (x / -6) + "px)")
  $(".tri5").css("transform", "translateY(" + (x / -4) + "px)")
  
  
});



var vm = new Vue({
  el: "#app",
  data: {
    works: []
  },
  mounted: function(){
    var vobj =this;
    $.ajax({
      url: "http://www.monoame.com/api/command.php?type=get&name=projects",
      success: function(res){
        // console.log(res);
        console.log(vobj.works);
        vm.works=JSON.parse(res);
      }
    })
  }
})