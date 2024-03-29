/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  // new_arr.push(new Set(arr));

  // 선생님과 푼것1
  // new Set(arr).forEach(item => {
  //   new_arr.push(item);
  // });

  // 선생님과 푼것2
  new_arr = Array.from(new Set(arr));

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
