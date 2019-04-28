const maxProfit = function(prices) {
    let res = 0; 
    let min = prices[0]; 
    for (let i = 0; i < prices.length; i++) {
            res = (prices[i] - min > res ) ? prices[i] - min : res
            min = prices[i] < min ? prices[i] : min;
    } 
    return res;
};

const maxProfit2 = function(prices) {
    let res = 0; 
    let min = prices[0]; 
    let sub = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] >= prices[i - 1]) {
            sub = sub > prices[i] - min ? sub : prices[i] - min;
        } else if (prices[i] < prices[i - 1]) {
            sub = sub > prices[i - 1] - min ? sub : prices[i - 1] - min;
            res += sub; 
            sub = 0; 
            min = prices[i];
        }
    }
    return res + sub;
};

const maxProfitwithCooldown = function(prices) {
    let res = 0;
    if (prices.length < 2) return res; 
    let noSell = new Array(prices.length - 1).fill(0);
    let sell = new Array(prices.length - 1).fill(0);
    [noSell[0], noSell[1]] = [0,0];
    [sell[0], sell[1]] = [0 - prices[0], prices[1] - prices[0]];
    
    for (let i = 2; i < prices.length; i++) {
        noSell[i] = Math.max(noSell[i - 1], sell[i - 1]);
        sell[i] = Math.max(noSell[i -2] + prices[i] - prices[i-1], sell[i-1] + prices[i] - prices[i-1]);
    }
    
    return Math.max(noSell[prices.length -1], sell[prices.length -1])
    
};