var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DOW&interval=1min&outputsize=full&apikey=SX48BBQ29ZGLWWJY"

jQuery.ajax({
    url: url,
    dataType: 'json',
    contentType: "application/json",
    success: function(data){
        console.log(data);


        var symbol = data['Meta Data']['2. Symbol']
        var lastRefreshed = data['Meta Data']['3. Last Refreshed']
        var open = data['Time Series (1min)'][lastRefreshed]['1. open']
        var close = data['Time Series (1min)'][lastRefreshed]['4. close']


    $('.symbol').html(symbol);
    $('.open').html(open);
    $('.close').html(close);
    }
})