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

const partition = function(node, p){
        var newlist = new SinglyLinkedList();
        newlist.head = node;
        newlist.tail  =node;
        
        while(node !== null)
        {
          var next = node.next;
          if(node.data < p)
          {
            node.next = newlist.head;
            newlist.head = node;
          }
          else{
           newlist.tail.next = node;
            newlist.tail = node;
          }
          node = next;
        }
        newlist.tail.next = null;
        return newlist;
    }

var llist = new SinglyLinkedList();
llist.insertNode(3);
llist.insertNode(5);
llist.insertNode(8);
llist.insertNode(5);
llist.insertNode(10);
llist.insertNode(2);
llist.insertNode(1);

//console.log(llist);
console.log(partition(llist.head,5));
//console.log(llist);

const sumList = function(n1, n2, carry) {
  if(n1 === null && n2 == null && carry === 0)
  {
    return;
  }
  
  var result = null;
  var value = carry;
  
  if(n1 !== null)
  {
    value += n1.data;
  }
  
  if(n2 !== null)
  {
    value += n2.data;
  }
  
  result = new SinglyLinkedListNode(value % 10);
  
  if(n1 !==null || n2 !== null)
  {
    var next = sumList(n1 === null ? null : n1.next,
                       n2 === null ? null : n2.next,
                       value >= 10 ? 1 : 0);
    result.next =  next;
  }
  return result;
  
}



var llist1 = new SinglyLinkedList();
llist1.insertNode(7);
llist1.insertNode(1);
llist1.insertNode(6);

var llist2 = new SinglyLinkedList();
llist2.insertNode(5);
llist2.insertNode(9);
llist2.insertNode(2);

console.log(sumList(llist1.head, llist2.head,0));

const palindrome = function(node) {
  if(node === null)
  {
    return;
  }
  
  var hashMap = new Map();
  var countsAdd = 0;
  
  while(node !== null)
  {
    var c = node.data;
    if(hashMap.has(c))
    {
      hashMap.set(c,hashMap.get(c)+ 1);
    }
    else{
      hashMap.set(c,1);
    }
    
    if(hashMap.get(c) % 2 === 1)
    {
      countsAdd++;
    }
    else{
      countsAdd--;
    }
    return countsAdd <= 1;
  }
  
}



var llist1 = new SinglyLinkedList();
llist1.insertNode('T');
llist1.insertNode('a');
llist1.insertNode('c');
llist1.insertNode(' ');
llist1.insertNode('C');
llist1.insertNode('o');
llist1.insertNode('a');


console.log(palindrome(llist1.head));


var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null){
    return null;
  }
  
  var pointer1 = headA;
  var pointer2 = headB;
  
  while(pointer1 !== null && pointer2 !== null && pointer1 !== pointer2)
  {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
    
    if(pointer1 === pointer2)
    {
      return pointer1;
    }
    if(pointer1 === null)
    { 
      pointer1 = headB;
      
    }
    if(pointer2 === null)
    { 
      pointer2 = headA;
    }
  }
  return pointer1;
};
