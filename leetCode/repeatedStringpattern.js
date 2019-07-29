var repeatedSubstringPattern = function(s) {
    let i = 0;
    while (i < s.length - 1) {
        let sub = s.slice(0,i+1);
        let new_str = sub;
        while (new_str.length < s.length) {
          new_str += sub; 
        }; 
        if (new_str === s) return true;
        i++;
    }; 
    
    return false;
};