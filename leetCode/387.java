public int firstUniqChar(String s) {
        int i = 0; 
        HashMap<Character, int[]> count = new HashMap<Character, int[]>(); 
        int size = s.length(); 
        
        while (i < size) {
            char l = s.charAt(i);
            if (!count.containsKey(l)) {
                int[] arr = new int[2];
                arr[0] = 1;
                arr[1] = i;
                count.put(l,arr);
            } else {
                int[] arr = new int[2];
                arr[0] = count.get(l)[0]+1;
                arr[1] = count.get(l)[1];
                count.replace(l,arr);
            };
            i++;
        }; 
        
        i = 0; 
       
        while (i < size) {
            if (count.get(s.charAt(i))[0] == 1) return count.get(s.charAt(i))[1];
            i++;
        }; 
        
        return -1;    
    };