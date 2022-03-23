/* 2. 제곱 구현 */

/* user code */
function answer(x, y) {
  let result = 1;

  // 내가 쓴답
  // result = Math.pow(x, y);

  // 해답 보고 풀어본 것
  for (let i = 0; i < y; i++) {
    result = result * x;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [2, 3],
  // TC: 2
  [4, 6],
  // TC: 3
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
