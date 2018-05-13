function resizeNavBar(){
  var marginLeft = $('body').css("margin-left");
  var marginRight = $('body').css("margin-right");
  if ($(this).scrollTop() > 50) {
    $('nav.jlaja-top-nav').addClass('fixed-top').css({"height":"45px",
                                "margin-left":marginLeft,
                                "margin-right":marginRight,
                                "box-shadow":"0 5px 5px -5px rgba(0,0,0,0.5)"});
    $('i.jlaja-prof-pic').css("font-size","1em");
    $('a.jlaja-icon').children("img").css({"height":"1.5em"});
  }
  else {
    $('nav.jlaja-top-nav').removeClass('fixed-top').css({"height":"85px",
                                "margin-left":"0",
                                "margin-right":"0"});
    $('i.jlaja-prof-pic').css("font-size","1.5em");
    $('a.jlaja-icon').children("img").css({"height":"2.5em"});
  }
  return
}

function addplaceHolder(){
  if ($(window).width() <= 560){
    document.getElementById("inputFrom").placeholder = "from";
    document.getElementById("inputTo").placeholder = "to";
  }
  else{
    document.getElementById("inputFrom").placeholder = "";
    document.getElementById("inputTo").placeholder = "";
  }
  return
}

function setButton(nav,button){
  if($(nav).css("display") == "none"){
    $(button).removeClass();
    $(button).css("transform","")
    $(button).addClass("fas fa-angle-down");
  }
  else{
    $(nav).removeClass();
    $(button).css("transform","")
    $(button).addClass("fas fa-angle-up");
  }
  return
}

function onClick(nav, button){
  function collapse_expand(){
    $(nav).slideToggle(300);
    if($(button).css("transform") == "none"){
      $(button).css("transform", "rotate(180deg)");
    }
    else{
      $(button).css("transform","");
    }
  }
  return collapse_expand;
}

function jQueryslideToggle(){
  $("#authentic-indonesia-header, #authentic-indonesia-button").click(onClick("#authentic-indonesia-nav","#authentic-indonesia-button"));
  $("#recommended-trips-header, #recommended-trips-button").click(onClick("#recommended-trips-nav","#recommended-trips-button"));
  $("#popular-picks-header, #popular-picks-button").click(onClick("#popular-picks-nav","#popular-picks-button"));
  return
}

function initialise(){
  setButton("#authentic-indonesia-nav","#authentic-indonesia-button");
  setButton("#recommended-trips-nav","#recommended-trips-button");
  setButton("#popular-picks-nav","#popular-picks-button");
  addplaceHolder();
  jQueryslideToggle();
  return
}

function onResize(){
  setButton("#authentic-indonesia-nav","#authentic-indonesia-button");
  setButton("#recommended-trips-nav","#recommended-trips-button");
  setButton("#popular-picks-nav","#popular-picks-button");
  addplaceHolder();
  return
}

function onReady(callback){
  var intervalID = window.setInterval(checkReady, 1500);

  function checkReady(){
    if (document.getElementsByTagName("body")[0] !== undefined){
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}
function showPage(id, value){
  if(value == true){
    document.getElementById(id).style.display = "block";
  }
  else{
    document.getElementById(id).style.display = "none";
  }
}
function checkPage(){
  showPage("page", true);
  showPage("loading", false);
}

onReady(checkPage);
$(document).ready(initialise);
$(document).scroll(resizeNavBar);
$(window).resize(onResize);
