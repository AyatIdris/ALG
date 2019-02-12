const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};



const removeDups = function(node){
  var hashmap = new Map();
  var prev = new SinglyLinkedListNode();
  
  while(node !== null)
  {
    if(hashmap.has(node.data))
    {
      prev.next = node.next;
      
    }else
    {
      hashmap.set(node.data, 1);
      prev = node;
    }
    node = node.next;
  }
};

var llist = new SinglyLinkedList();
llist.insertNode(1);
llist.insertNode(5);
llist.insertNode(3);
llist.insertNode(7);
llist.insertNode(3);
llist.insertNode(9);

console.log(llist);
removeDups(llist.head);
console.log(llist);
