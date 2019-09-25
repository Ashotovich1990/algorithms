class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> counter = new HashMap<Integer, Integer>();
        
        int j = 0; 
        while ( j < numbers.length) {
            if (numbers[j] > target) break;
            j++;
        };
        
        j = j == numbers.length ? numbers.length -1 : j;
        
        for (int i = 0; i <= j; i++) {
            if (counter.containsKey(target-numbers[i])) {
                int res[] = new int[] {counter.get(target-numbers[i]),i+1};
                return res;
            };
            counter.put(numbers[i],i+1);
        };
        
        return null;
    };
}