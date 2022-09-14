// 카드2

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = input.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

let node = new LinkedList();

for (let i = 1; i <= n; i++) {
  node.add(i);
}

while (node.getSize() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());
