  $(document).ready( function(){
    $.ajax({method: "GET", url: "https://hwtcapi.rippmn.com/thisYear", async: false, success: function(result){


      var data = '{"2019":"143","2018":"129","2017":"115","2016":"151","2015":"151","2014":"173","2013":"205","2012":"162","2011":"215","2010":"168","2009":"172","2008":"157", "2007":"116"}'
      var oldresult = JSON.parse(data)

      var years = Object.keys(oldresult);

      var tabledata = "<tr><td>2020</td><td>"+JSON.stringify(result)+"</td></tr>";
      var i= years.length-1;
      for(i; i >= 0 ;i--){
        tabledata = tabledata + "<tr><td>"+years[i]+"</td><td>"+oldresult[years[i]]+"</td></tr>";
      }
      document.getElementById("counts").innerHTML = tabledata;
      }});
});
