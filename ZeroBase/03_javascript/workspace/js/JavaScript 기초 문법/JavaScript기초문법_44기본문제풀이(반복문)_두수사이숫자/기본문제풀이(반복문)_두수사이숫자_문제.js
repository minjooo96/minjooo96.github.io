/*** 2. 두 수 사이 숫자 ***/

/* user code */
function answer(x, y) {
  let result = [];

  // ======================================= 처음에 내가 짠 소스
  // if( x > y ){
  //   for (let i = y; i <= x; i++) {
  //     result.push(i);
  //   }
  // }else{
  //   for (let i = x; i <= y; i++) {
  //     result.push(i);
  //   }
  // }

  // ======================================= 선생님꺼 슬쩍 훔쳐본 뒤 짜본 소스
  let a;
  if( x > y ){
    a = x;
    x = y;
    y = a;
  }
  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
