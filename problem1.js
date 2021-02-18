// Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

class _Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      const node = new _Node(data, null);
      this.top = node;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    return node.value;
  }
}

function peek(stack) {
  return stack.top.value;
}

function isEmpty(stack) {
  let current = stack.top;
  while (current.next !== null) {
    return true;
  }

  return false;
}

function display(stack) {
  let current = stack.top;
  while (current.next !== null) {
    console.log(current.value);
    current = current.next;
  }

  console.log('-------');
}

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // code here

  let palindrome = new Stack();
  let testStr = '';

  for (let i = 0; i < s.length; i ++){
    palindrome.push(s[i]);

  }

  for (let i = s.length; i > 0; i --){
    testStr += palindrome.pop();
  }

  return testStr === s;
}

function main() {
  // let starTrek = new Stack();

  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // starTrek.push('Sulu');

  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);

  // console.log(starTrek.pop());
  // display(starTrek);

  console.log(isPalindrome('dad'));
  console.log(isPalindrome('A man, a plan, a canal: Panama'));
  console.log(isPalindrome('1001'));
  console.log(isPalindrome('Tauhida'));

}

main();


