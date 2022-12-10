let n = 2;
arr = [
  "编程就是处理两个东西<br />函数和数据",
  "不断探索<br />分享进步",
  "实践是检验真理的<br />唯一标准",
];
function changeMsg() {
  document.getElementById("msg").innerHTML = arr[n];
  n++;
  if (n == arr.length) n = 0;
}
