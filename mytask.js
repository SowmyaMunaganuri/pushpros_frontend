$(document).ready(function () {
    $('#get-data').click(function () {
  /*  Insert data into table using "getJSON"
      $.getJSON('https://aimtell.com/files/sites.json', function (data) {
        console.log(data);
  
        var sample_data='';
        $.each(data.sites,function(key,value){
            sample_data+='<tr>';
            sample_data+='<td>'+value.id+'</td>';
            sample_data+='<td>'+value.name+'</td>';
            sample_data+='<td>'+value.url+'</td>';
            sample_data+='</tr>';
        });
        $('#sample_table').append(sample_data);
      });*/

       //Insert data into table using AJAX
      $.ajax({
          type:'GET',
          url:'https://aimtell.com/files/sites.json',
          dataType:'json',
          crossDomain:true,
          async:true,
          success:function(response){
            console.log(response);
  
            var sample_data='';
            $.each(response.sites,function(key,value){
                sample_data+='<tr>';
                sample_data+='<td>'+value.id+'</td>';
                sample_data+='<td>'+value.name+'</td>';
                sample_data+='<td>'+value.url+'</td>';
                sample_data+='</tr>';
            });
            $('#sample_table').append(sample_data);

          },
          error:function(){
            console.log("Failed to load data from given url");
          }
      })
    });
  });