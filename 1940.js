// 주몽

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input[2].split(" ").map(Number);
let A = arr.sort((a, b) => a - b);
let count = 0;
let i = 0,
  j = A.length - 1;

while (i < j) {
  if (A[i] + A[j] > input[1]) {
    j--;
  } else if (A[i] + A[j] < input[1]) {
    i++;
  } else {
    count++;
    i++;
    j--;
  }
}
console.log(count);
