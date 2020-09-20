$(document).ready(function(){
 
    $('span').parent().css({
       "color":"yellow",
        "border":"5px solid black",
    });
    
   $('span').parentsUntil("ul").css({
       "color":"red",
        "border":"5px solid blue",
        "background":"#fff"
    });
    
});