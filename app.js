$(document).ready(function(){

  $('.generator').on('click', createCont);
  $('body').on('click','.change', changeColor);
  $('body').on('click','.delete', deleteContainer);

});


var count = 1;
function createCont(){
  $(this).parent().append('<div class="container"></div>');
  var $el = $('body').children().last();
  $el.html('<button class="change">Change</button><p>'+count+'</p><button class="delete">Delete</button>');
  count++
}
function changeColor(){
  $(this).parent().toggleClass("highlight");
  console.log("changing color");
}
function deleteContainer(){
  $(this).parent().remove();
    console.log("deleting");
}
