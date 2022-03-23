/* 8. 배열 회전 */

/* user code */
function answer(user) {
  let reverse = [];

  // 선생님의 솔루션을 듣고 내가 푼 것
  // for (let i = user.length-1; i >= 0; i--) {
  //   reverse.push(user[i]);
  // }

  // 선생님과 푼 것
  let tmp;
  for (let i = 0; i < user.length/2; i++) {
    tmp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = tmp;
  }
  reverse = user;

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
