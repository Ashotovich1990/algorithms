class MaxHeap {
    constructor() {
        this.array = [null]
    }

    getParent(idx) {
        return Math.floor(idx/2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 +1;
    }
    
    siftUp(idx) {
        let parent = this.getParent(idx);
        if (this.array[parent] >= this.array[idx] || !this.array[parent]) return; 
        [this.array[parent], this.array[idx]] = [this.array[idx], this.array[parent]]; 
        this.siftUp(parent);
    }

    insert(val) {
      this.array.push(val); 
      this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let left = this.getLeftChild(idx); 
        let right = this.getRightChild(idx); 
        let child = this.array[left] >= this.array[right] || !this.array[right] ? left : right; 
        if (this.array[idx] >= this.array[child] || !this.array[child]) return; 
        [this.array[idx], this.array[child]] = [this.array[child], this.array[idx]]; 
        this.siftDown(child);
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length < 2) return null;

        let res = this.array[1]; 
        let bottomLeaf = this.array.pop(); 
        this.array[1] = bottomLeaf; 
        this.siftDown(1);
        return res;
    }
}

module.exports = {
    MaxHeap
};