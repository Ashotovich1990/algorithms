var mincostTickets = function(days, costs) {
    let min_cost = new Array(days.length);
    
    for (let i = 0; i < days.length; i++) {
        let opt_one = min_cost[i-1] ? min_cost[i-1] + costs[0] : costs[0];
        let opt_two;
        let opt_three;
        
        let j = i - 1;
        while (days[j] && days[j] > days[i] - 7) {
            j--;
        };
        opt_two = min_cost[j] ? min_cost[j] + costs[1] : costs[1];
        
        j = i - 1;
        while (days[j] && days[j] > days[i] - 30) {
            j--;
        };
        opt_three = min_cost[j] ? min_cost[j] + costs[2] : costs[2];
        
        min_cost[i] = Math.min(opt_one, opt_two, opt_three); 
    };
   
   return min_cost[min_cost.length - 1];
};