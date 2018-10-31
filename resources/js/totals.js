  $(document).ready( function(){
    $.ajax({method: "GET", url: "http://hwtcapi.rippmn.com/totals", async: false, success: function(result){

      var years = Object.keys(result);

      var tabledata = "";
      for(var i = 0; i < years.length ;i++){
        tabledata = tabledata + "<tr><td>"+years[i]+"</td><td>"+result[years[i]]+"</td></tr>";
          }
    document.getElementById("counts").innerHTML = tabledata;
      }});

});
