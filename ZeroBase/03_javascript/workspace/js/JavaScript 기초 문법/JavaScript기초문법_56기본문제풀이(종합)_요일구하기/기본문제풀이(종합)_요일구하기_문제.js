/* 4. 요일 구하기 */

/* user code */
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;

  // 내가 푼 것
  // for (let i = 0; i < week.length; i++) {
  //   if( i == new Date(str).getDay() ){
  //     day = week[i];
  //   }
  // }
  
  // 해답 보고 푼것
  day = week[new Date(str).getDay()];

  return day;
}

/* main code */
let input = [
  // TC: 1
  "2021-01-27",
  // TC: 2
  "2021-02-27",
  // TC: 3
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
