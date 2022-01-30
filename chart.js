

let myChart = document.getElementById('myChart').getContext('2d');

let stockChart = new Chart(myChart,  {
    type:'line',
    data:{
        labels:['Close Prices', 'Feb 2021'], // ADD JSON Date data here
        datasets:[{
            label:'stonks', // Chart label
            data:[1,2] // Add JSON close price for the Date data
            
        }]
    },
    options:{}
});
