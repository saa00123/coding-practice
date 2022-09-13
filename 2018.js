// 연속된 수들의 합

let input = require("fs").readFileSync("/dev/stdin", "utf8");

let count = 0;
let sum = 1;
let end = 1;

for (let i = 1; i <= input; i++) {
  while (sum < input && end < input) {
    end += 1;
    sum += end;
  }
  if (sum == input) {
    count += 1;
  }
  sum -= i;
}

console.log(count);
