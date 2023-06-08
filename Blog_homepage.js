  $(window).resize( function resizefn(){
     if($(window).width()>1100){
    $("li a").css("display","block")  
      $("nav").css("height","100px")
      $(".top-flex").css("position","relative")
      $(".top-flex").css("top","200px")
    }
  
  else{
    $("li a").css("display","none")
  }}
  )

  $(".twitter").hover(    function changeicon(){
    $(".twitter").attr("src", "2021 Twitter logo - white.png");
    $(".twitter").css("background-color", "#1D9BF0")
  }, function changeicon(){
    $(".twitter").attr("src", "Twitter-logo.png");
    $(".twitter").css("background-color", "initial") }
  )
  $(".instagram").hover(    function changeicon(){
    $(".instagram").attr("src", "Instagram_Glyph_White.png");
    $(".instagram").css("background-color", "#D93175")
  }, function changeicon(){
    $(".instagram").attr("src", "ig icon.png");
    $(".instagram").css("background-color", "initial") }
  )
  $(".linkedin").hover(    function changeicon(){
    $(".linkedin").attr("src", "linkedin-white.png");
    $(".linkedin").css("background-color", "#0A63BC")
  },function changeicon(){
    $(".linkedin").attr("src", "LI-In-Bug.png");
    $(".linkedin").css("background-color", "initial")
  })
  $(".nav-image").click(
   function display_lists(){

    if ($("li a").css("display")=="none" && $(window).width()<1000){

      $("li a").css("display","block")
      $("nav").css("height","fit-content")
      $(".top-flex").css("position","relative")
      height  = parseInt( $("nav").css("height"))
      new_height=height+50
     
      $(".top-flex").css("top",new_height)
      $(".top-flex").css("marginBottom","500")
    }
  else if ($("li a").css("display")=="block" && $(window).width()<1000){
    $("li a").css("display","none")
    $(".top-flex").css("position","relative")
    $(".top-flex").css("top","200px")
    $("nav").css("height","100px")
  }
   }
    
  )