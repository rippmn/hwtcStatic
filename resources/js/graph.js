$(document).ready( function(){

  $.ajax({method: "GET", url: "http://hwtcapi.rippmn.com/totalsByTime", async: false, success: function(graphData){

    var myLineChart;

    Chart.defaults.global.elements.point.radius=0;

    //todo, build datasets betters
    var treaters = {
      "type":"line",
      "data":{"labels":graphData['labels'],
      "datasets":[
          {
            "label":"2007",
            "data":graphData['2007'],
            "fill":false,
            "borderColor":"#CC3399"
          },
          {
            "label":"2008",
            "data":graphData['2008'],
            "fill":false,
            "borderColor":"#FFFF00"
          },
          {
            "label":"2009",
            "data":graphData['2009'],
            "fill":false,
            "borderColor":"#6600FF"
          },
          {
            "label":"2010",
            "data":graphData['2010'],
            "fill":false,
            "borderColor":"#ACC26D"
          },
          {
            "label":"2011",
            "data":graphData['2011'],
            "fill":false,
            "borderColor":"#009900"
          },{
            "label":"2012",
            "data":graphData['2012'],
            "fill":false,
            "borderColor":"#FF00FF"
          },{
            "label":"2013",
            "data":graphData['2013'],
            "fill":false,
            "borderColor":"#663300"
          },{
            "label":"2014",
            "data":graphData['2014'],
            "fill":false,
            "borderColor":"#FF9900"
          },{
            "label":"2015",
            "data":graphData['2015'],
            "fill":false,
            "borderColor":"#4B0082"
          },{
            "label":"2016",
            "data":graphData['2016'],
            "fill":false,
            "borderColor":"#FF0000"
          },{
            "label":"2017",
            "data":graphData['2017'],
            "fill":false,
            "borderColor":"#7FF50F"
          },
          {
            "label":"2018",
            "data":graphData['2018'],
            "fill":false,
            "borderColor":"#CA6F1E"
          }
        ]},
      "options": {},

      };

      var treatersChart = document.getElementById('MyChart').getContext('2d');
      new Chart(treatersChart,treaters);


  });
