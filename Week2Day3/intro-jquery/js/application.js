$(document).ready(function(){

  // Put everything inside

  // $('li').click(function(){
  //   console.log("this is working")
  //   this.remove();
  // })

//remove item even for new item
$(document).on('click', 'li', function() {
  $(this).remove();
})

$('p').click(function() {
  $('ul').append('<li>123123</li>')
})

$('#addItem').click(function(){
  var itemName = $('#itemName').val();
  $('ul').append('<li>' + itemName + '</li>');
})


})
