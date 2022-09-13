// 나머지 합

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split(" ").map(Number);
let arr2 = input[1].split(" ").map(Number);
let m = arr[1];
let count = 0;
let S = [arr2[0]];
let C = new Array(m).fill(0);

for (let i = 1; i < arr[0]; i++) {
  S[i] = S[i - 1] + arr2[i];
}

for (let i = 0; i < arr[0]; i++) {
  let remainder = S[i] % m;
  if (remainder == 0) {
    count++;
  }
  C[remainder]++;
}

for (let i = 0; i < m; i++) {
  if (C[i] > 1) {
    count += (C[i] * (C[i] - 1)) / 2;
  }
}

console.log(count);

// for (let i = 0; i < arr[0]; i++) {
//   for (let j = 0; j < arr[0]; j++) {
//     sum += arr2[j];
//     if (sum > 0) {
//       if (sum % m == 0) {
//         count++;
//       }
//     }
//   }
//   sum = 0;
//   arr2[i] = 0;
// }

// console.log(count);

// 시간 초과
