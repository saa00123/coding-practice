// 스택 수열

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [n, ...num] = input;
let numbers = num.map(Number);
let stack = [];
let answer = "";
let count = 1;

for (let i = 0; i < n; i++) {
  let number = numbers.shift();

  while (count <= number) {
    stack.push(count++);
    answer += "+ ";
  }

  let popItem = stack.pop();
  answer += "- ";
  if (popItem != number) {
    answer = "NO";
    break;
  }
}

console.log(answer.split(" ").join("\n"));
