// 구간 합

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
let N = arr[0];
let M = arr[1];
let sum = new Array(arr.length + 1).fill(0);
let output = [];

for (let i = 1; i <= N; i++) {
  sum[i] = sum[i - 1] + A[i - 1];
}

for (let i = 0; i < M; i++) {
  let [start, end] = input[i + 2].split(" ").map(Number);
  output.push(sum[end] - sum[start - 1]);
}
console.log(output.join("\n"));
