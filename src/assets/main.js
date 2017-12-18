$(function() {
   $.ajax({
      url:'https://www.codeschool.com/users/bhavya_1.json',
      dataType:'jsonp',
      success:function(response){
        for(let i = 0; i<response.courses.completed.length;i++)
        {
           $("#badges").append(`<div class='course'>
           <h3>${completed[i].title}</h3>
           </div>`);
        }
      }
   });

});
