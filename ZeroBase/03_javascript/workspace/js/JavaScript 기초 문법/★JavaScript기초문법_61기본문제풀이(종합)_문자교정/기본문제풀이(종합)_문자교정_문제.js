/* 9. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = "";

  // 내가 하다가 포기한 것
  // let save = str.split(' ');
  // for (let i = 0; i < save.length; i++) {
  //   let uppercase = save[i][0].toUpperCase();
  //   save[i].shift();
  //   console.log(save);
    
  //   save.unshift( uppercase );
  //   console.log(save);
    
  //   fix_str = fix_str.concat(save[i], '');
  // }
  // console.log(fix_str);

  // 선생님과 푼 것 1
  // let save = str.split(' ');
  // for( let item of save ){
  //   fix_str += item[0].toUpperCase() + item.slice(1) + ' ';
  // }

  // 선생님과 푼 것 2
  for( let item of str.split(' ') ){
    fix_str += item[0].toUpperCase() + item.slice(1) + ' ';
  }

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
