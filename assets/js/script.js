$(document).ready(function(){
  //Ici on selectionne la div qui a la classe color à qui on donne la fonction .click()
  $('div.color').click(function(){
    var classValue = $(this).attr('class');
    var classArray = classValue.split(' ');
    $('#text').css({'color': classArray[1]});
  });
});
