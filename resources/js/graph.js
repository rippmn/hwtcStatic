$(document).ready( function(){

  $.ajax({method: "GET", url: "http://hwtc.cfapps.io/totalsByTime", async: false, success: function(graphData){

  var myLineChart;

  var treaters = {
  labels : graphData['labels'],
  datasets : [
    {
      label : "2007",
      strokeColor : "#CC3399",
      data : graphData['2007']
    },

    {
      label : "2008",
      strokeColor : "#FFFF00",
      data : graphData['2008']
    },

    {
      label : "2009",
      strokeColor : "#6600FF",
      fillColor : "#6600FF",
      data : graphData['2009']
    },

    {
      label : "2010",
      strokeColor : "#ACC26D",
      data : graphData['2010']
    },

    {
      label : "2011",
      strokeColor : "#009900",
      data : graphData['2011']
    },

    {
      label : "2012",
      strokeColor : "#FF00FF",
      data : graphData['2012']
    },

    {
      label : "2013",
      strokeColor : "#663300",
      data : graphData['2013']
    },

    {
      label : "2014",
      strokeColor : "#FF9900",
      data : graphData['2014']
    },

    {
      label : "2015",
      strokeColor : "#4B0082",
      data : graphData['2015']
    },

    {
      label : "2016",
      strokeColor : "#FF0000",
      fillColor : "#FF0000",
      data : graphData['2016']
    },

    {
      label : "2017",
      strokeColor : "#7FF50F",
      fillColor : "#7FF50F",
      data : graphData['2017']
    }

  ]
  };


  var treatersChart = document.getElementById('MyChart').getContext('2d');
    myLineChart = new Chart(treatersChart).Line(treaters, {responsive: true, pointDot : false, bezierCurve : false, datasetFill : false, scaleShowLabels:true,
      labelsFilter: function (value, index) {
            return (index + 1) % 5 !== 0;
        }
    });
    legend(document.getElementById("placeholder"), treaters);

    }});

});
