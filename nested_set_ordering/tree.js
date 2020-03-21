const printInOrderTraversal = node => {
    if (!node) return; 
    printInOrderTraversal(node.left);
    console.log(node.value);
    printInOrderTraversal(node.right);
}

class Tree {
    constructor() {
        this.head = null;
        this.nestedSetIndx = 0
    }

    assignNestedSetIndices(node) {
        if (!node) return; 

        this.nestedSetIndx++;
        node.leftIndex = this.nestedSetIndx;
        this.assignNestedSetIndices(node.left);

        this.nestedSetIndx++;
        node.rightIndex = this.nestedSetIndx;
        this.assignNestedSetIndices(node.right);
    }

    populate(array) {
        array.forEach((value,idx) => {
            this.head = this.insert(this.head, value);
        })
    }

    insert(node, value) {
        if (!node) {
            node = new Node(value);
            return node;
        }

        if (node.value <= value) {
            node.right = this.insert(node.right, value);
        } else {
            node.left = this.insert(node.left, value);
        }

        return node;
    }
}

class Node {
    constructor(value) {
        this.value = value; 
        this.left = this.right = null;
        this.leftIndex = this.rightIndex = null;
    }
}

const tree = new Tree(); 
const values = [5,2,3,1,7,6,8];

tree.populate(values); 
tree.assignNestedSetIndices(tree.head);
console.log(tree.head);
