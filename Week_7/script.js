//Grabs the data that will be used
var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

var ctx = document.getElementById('myChart');//Gets the canvas area from html

var myChart = new Chart(ctx, {//Makes the chart
  type: 'bar',
  data: {
     labels: frameworks,
     datasets: [{
         label: 'Github Stars',
         data: stars
     }]
  },
 })
