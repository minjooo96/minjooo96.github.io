/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
  let employee_id;

  for (let i = 0; i < employee.length; i++) {
    if( employee[i] == Math.max(...employee) ){
      employee_id = i+1;
    }
  }
  return employee_id;
}

/* main code */
let input = [
  // TC: 1
  [3, 7, 9, 6, 1, 11],
  // TC: 2
  [2, 7, 1, 4, 100, 3, 0, 5],
  // TC: 3
  [7, 100, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
