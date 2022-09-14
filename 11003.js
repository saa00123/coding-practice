// 최솟값 찾기

let input = require("fs").readFileSync("example.txt").toString().split("\n");

let arr = input[0].split(" ").map(Number);
let arr2 = input[1].split(" ").map(Number);
let L = arr[1];
let D = [];
