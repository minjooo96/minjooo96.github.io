/* 3. 놀이기구 입장 제한 */

/* user code */
function answer(user) {
  let permit;

  // 내가 푼 것
  // user.height >= 150 ? permit = true : permit = false;

  // 해답 따라한 것
  permit = user.height >= 150;

  return permit;
}

/* main code */
let input = [
  // TC: 1
  { name: "john", age: 27, height: 181 },
  // TC: 2
  { name: "alice", age: 12, height: 148 },
  // TC: 3
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
