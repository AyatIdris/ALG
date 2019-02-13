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


const printKthToLast = function(head, k){
  if(head === null)
   return 0;
   
  var index = printKthToLast(head.next, k) + 1;
  if(index === k)
   console.log(k +"th to the last is ", head.data);
  return index;
};

printKthToLast(llist.head,3);

const deleteMidNode = function(node){
  
  if(node === null || node.next === null)
   return undefined;
   
  var fastPtr =  node;
  var slowPtr = node;
  var prev = null;

   
  while(fastPtr !== null && fastPtr.next.next !== null )
  {
    
    fastPtr = fastPtr.next.next;
    prev = slowPtr;
    slowPtr = slowPtr.next;
  }
  
  prev.next = slowPtr.next;
  
  return node;
};

deleteMidNode(llist.head);
console.log(llist);

