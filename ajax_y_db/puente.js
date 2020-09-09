$(document).ready(function(){  
      $('input[type="radio"]').click(function(){  
           var respuesta = $(this).val();  
           $.ajax({  
                url:"query.php",  
                method:"POST",  
                data:{respuesta:respuesta},  
                success:function(data){  
                     $('#resultado').html(data);  
                }  
           });  
      });  
 });