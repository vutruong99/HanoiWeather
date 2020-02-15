$('.my_selector').click(function(){
    $.get('http://MY_SERVER_ADDR:3000/data', {}, function(data){
         console.log(data)
    });
 });