class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) { 
        if (!word.length) {
            root.isTerminal = true;
            return;
        }
        if (!root.children[word[0]]) {
            root.children[word[0]] = new Node();
        }
        root = root.children[word[0]]

        this.insertRecur(word.slice(1), root); 
    }

    insertIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
           if (!root.children[word[i]]) root.children[word[i]] = new Node();
           root = root.children[word[i]]
           if (i === word.length - 1) root.isTerminal = true;   
        }
    }

    searchRecur(word, root = this.root) {
        if (!word.length) {
            if (root.isTerminal) {
                return true; 
            } else {
                return false;
            }
        }

        if (!root.children[word[0]]) return false; 
        root = root.children[word[0]];
        return this.searchRecur(word.slice(1), root);
    }

    searchIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!root.children[word[i]]) return false; 
            root = root.children[word[i]]
        }
        return root.isTerminal;
    }

    wordsWithPrefix(prefix) {
        let word = ""
        let root = this.root; 
        for (let i = 0; i < prefix.length; i++) {
            if (!root.children[prefix[i]]) return []; 
            word += prefix[i]; 
            root = root.children[prefix[i]];
        }
        return this.findWord(word,root);
    }

    findWord(word, root) {
        let res = []; 
        if (!root) return res;
        if (root.isTerminal) res.push(word);
        
        for (let letter in root.children) {
            res.push(...this.findWord(word + letter, root.children[letter]));
        } 
        return res;
    }

}

module.exports = {
    Node,
    Trie
};