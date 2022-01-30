var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DOW&interval=1min&outputsize=full&apikey=SX48BBQ29ZGLWWJY"

jQuery.ajax({
    url: url,
    dataType: 'json',
    contentType: "application/json",
    success: function(data){
        console.log(data);


        let symbol = data['Meta Data']['2. Symbol']
        let lastRefreshed = data['Meta Data']['3. Last Refreshed']
        let open = data['Time Series (1min)'][lastRefreshed]['1. open']
        let close = data['Time Series (1min)'][lastRefreshed]['4. close']


    $('.symbol').html(symbol);
    $('.open').html(open);
    $('.close').html(close);
    }
})



