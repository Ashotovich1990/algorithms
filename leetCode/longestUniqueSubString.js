const longestUniqueSubStr = (str) => {
        if (!str.length) return 0;
        let table = [];
        for (let i = 0; i < str.length; i++) {
            table.push([]);
        }
        let k = 0;
        while (k < str.length) {
            for (let i = 0; i + k < str.length; i++) {
                let j = i + k;
                if (!k) {
                    table[i][j] = 1;
                } else if (str[i] === str[j]) {
                    table[i][j] = table[i+1][j] > table[i][j-1] ? table[i+1][j] :  table[i][j-1];
                } else {
                    if (table[i+1][j] === str.slice(i+1,j+1).length && table[i][j-1] ===  str.slice(i,j).length) {
                        table[i][j] = table[i+1][j-1] ? 2 + table[i+1][j-1] : 2;
                    } else {
                        table[i][j] =  table[i+1][j] > table[i][j-1] ? table[i+1][j] :  table[i][j-1];
                    }
                }
                
            }
            k++;
        }  
    return table[0][str.length -1];
};


// xyzk