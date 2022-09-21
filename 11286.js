// 절댓값 힙

let input = require("fs").readFileSync("example.txt").toString().split("\n");

let num = input.map((v) => +v);

class AbsoluteMinHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    if (this.heap.length == 0) {
      return true;
    }
    return false;
  }

  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.heap[parentIndex][0] < this.heap[currentIndex][0] ||
        (this.heap[parentIndex][0] == this.heap[currentIndex][0] &&
          this.heap[parentIndex][1] < this.heap[currentIndex][1])
      ) {
        break;
      }
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length == 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let length = this.heap.length;
    let smallestIndex = index;

    if (
      leftIndex < length &&
      (this.heap[leftIndex][0] < this.heap[smallestIndex][0] ||
        (this.heap[leftIndex][0] == this.heap[smallestIndex][0] &&
          this.heap[leftIndex][1] < this.heap[smallestIndex][1]))
    ) {
      smallestIndex = leftIndex;
    }
    if (
      rightIndex < length &&
      (this.heap[rightIndex][0] < this.heap[smallestIndex][0] ||
        (this.heap[rightIndex][0] == this.heap[smallestIndex][0] &&
          this.heap[rightIndex][1] < this.heap[smallestIndex][1]))
    ) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex);
    }
  }
}

let answer = [];
let maxHeap = new AbsoluteMinHeap();
num.forEach((v) => {
  if (v == 0) {
    if (maxHeap.empty()) {
      answer.push(0);
    } else {
      answer.push(maxHeap.extractMin()[1]);
    }
  } else {
    maxHeap.insert([Math.abs(v), v]);
  }
});

console.log(answer.join("\n"));
