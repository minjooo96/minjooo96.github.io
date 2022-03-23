/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  
  // 내 코드
  // let j, sum = 0;
  // for (let i = 0; i < sequence.length; i++) {
  //   for (let j = i+1; j < sequence.length; j++) {
  //     if( i !== j ) sum = sequence[i] - sequence[j];
  //   }
  //   if( sum >= 0 ) sequence.push(sum);
  // }  

  // 선생님이랑 푼 코드
  let sum;
  while(1){ // 무한대로 돌아라
    sum = s - e;
    s = e;
    e = sum;

    if( e < 0 ) break;
    sequence.push(e);
  }

  return sequence;
}
/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
