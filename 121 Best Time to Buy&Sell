var maxProfit = function(prices) {
    
    let min = prices[0];
    let max;
    let profit = 0;
    let curr = 0;

    while (prices[curr] !== undefined) {
        console.log(curr)
        curr++;
        max = prices[curr];

        if (min < max && max-min > profit) {
            profit = max-min;
        }

        if (prices[curr] < min) {
            min = prices[curr]; 
        }
    }

    return profit;
};

 const priceArray = [2,1,2,1,0,1,2];

 console.log(maxProfit(priceArray));
