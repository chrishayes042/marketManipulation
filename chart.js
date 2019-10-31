window.onload = function(){

var chart = new CanvasJS.chart("chartContainer",{
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Simple Line Chart"
    },
    axisY:{
        includeZero: false
    },
    data:[{
           type: "line",
           dataPoints:[
               {y:'.open'},
               {y:'.close'}
           ]}]
       

});
chart.render();
}
