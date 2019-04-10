def make_better_change(coins, amount, memo = {})
i = 0 
coins_bottom = []
while i < coins.length
  coins_bottom += [coins[i]]
  a = 0 
  while a <= amount 
    new_chnage = countChange(a, coins_bottom, memo)
    if !memo[a] || memo[a] > new_chnage
       memo[a] = new_change
    end
    a += 1
  end
i += 1 
end
return memo[amount]
end


def countChange(amount, coins, memo = {}) 
  return memo[amount] if memo[amount]
  return 0 if amount == 0 
  return 0 if coins[-1] > amount 
  return amount / coins[-1] if amount % coins[-1] == 0 
  rest = countChange( amount % coins[-1], coins[0..-2])
  return 0 if rest == 0
  return amount / coins[-1] + countChange( amount % coins[-1], coins[0..-2], memo)
end