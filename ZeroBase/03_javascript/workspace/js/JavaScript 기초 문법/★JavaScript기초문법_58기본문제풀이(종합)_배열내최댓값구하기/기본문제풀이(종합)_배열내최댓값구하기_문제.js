/* 6. 배열 내 최대값 구하기 */

/* user code */
function answer(arr) {
  let max;

  // 내가 푼 1
  // max = Math.max.apply(null, arr);

  // 내가 푼 2
  // for (let i = 0; i < arr.length; i++) {
  //   max = arr[i];
  //   for (let j = 0; j < arr.length; j++) {
  //     if( max < arr[j] ){
  //       max = arr[j];
  //     }
  //   }
  // }

  // 선생님이랑 푼
  max = Number.MIN_SAFE_INTEGER;
  // max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if( arr[i] > max ){
      max = arr[i];
    }
  }

  return max;
}

/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
