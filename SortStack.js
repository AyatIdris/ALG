var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

var Stack = function() {
  this.top = null;
};

Stack.prototype.push = function(value) {
  var node = new LinkedList(value);
  node.next = this.top;
  this.top = node;
};

Stack.prototype.pop = function() {
  var popped = this.top;
  if (this.top !== null) {
    this.top = this.top.next;
  }
  return popped.value;
};

Stack.prototype.peek = function() {
  return this.top !== null ? this.top.value : null;
};

Stack.prototype.isEmpty = function() {
  return this.top === null;
};


var sortStack = function(unsoreted) {
  var temp = null;
  var tempStack = new Stack();
  while(!unsoreted.isEmpty())
  {
    temp = unsoreted.pop();
  
    while(!tempStack.isEmpty() && temp < tempStack.peek())
    {
      unsoreted.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  while(!tempStack.isEmpty()){
    unsoreted.push(tempStack.pop())
  }
  return unsoreted;
}

var s = new Stack();
s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);

var sortS = sortStack(s);

while (!sortS.isEmpty()) {
  console.log(sortS.pop());
}


