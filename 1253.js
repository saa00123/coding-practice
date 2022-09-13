// 좋다

let input = require("fs").readFileSync("example.txt").toString().split("\n");

let arr = input[0].split(" ").map(Number);
let arr2 = input[1].split(" ").map(Number);
let a = 0;
let b = 0;
let good = 0;
