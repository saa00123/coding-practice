// 좋다

let input = require("fs").readFileSync("example.txt").toString().split("\n");

let arr = input[1].split(" ").map(Number);
let A = arr.sort((a, b) => a - b);
let count = 0;

for (let k = 0; k < A.length; k++) {
  let sum = A[k];
  let i = 0;
  let j = k - 1;

  while (i < j) {
    if (A[i] + A[j] == sum) {
      if (i != k && j != k) {
        count++;
        break;
      } else if (i == k) {
        i++;
      } else if (j == k) {
        j--;
      }
    } else if (A[i] + A[j] < sum) {
      i++;
    } else {
      j--;
    }
  }
}

console.log(count);

// 결과는 잘 나오지만 제출시 틀림
// 3%에서 실패
