
// function solution(arr) {
//     var answer = '';
//     for (let i = 0; i < arr.length; i++) {
//         answer+= String.fromCharCode(arr[i]);
//     }
//     return answer;
// }
// console.log( solution([71, 111, 111, 103, 108, 101]) );

// function solution(n) {
//     var answer = '';
//     answer = n.toString(2);
//     return answer;
// }
// console.log( solution(5) );

// 3
// function solution(arr) {
//     var answer = 0;

//     var arrLength = [];
//     for(let i = 0; i < arr.length; i++){
//         arrLength.push(arr[i].length);
//         arr[i] = arr[i].split('').reverse().join('');
//     }
//     var loop = Math.max(...arrLength);

//     var numArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             var number = 0;
//             if( i == j ) continue;
//             for (let k = 0; k < loop; k++) {
//                 if( arr[i][k] == arr[j][k] ){
//                     // console.log(arr[i][k]);
//                     number += arr[i][k];
//                 }
//             }
//             numArr.push(number);
//         }
//     }
//     console.log(numArr);

//     // return answer;
// }
// console.log( solution(["10110", "1010", "11110"]) );

// function solution(arr) {
//     var answer = 0;
//     var flag = 0;
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i].split('').reverse().join('');
//     }
//     var number = '';
//     for (let i = 0; i < arr[0].length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             for (let k = 1; k < arr.length; k++) {
//                 if( j == k || j > k ) continue;
//                 if( arr[0][i] == arr[j][i] && arr[j][i] == arr[k][i] && flag == 0 ){
//                     number += arr[0][i];
//                 }else{
//                     flag = 1;
//                 }
//             }
//         }
//     }
//     if( number == '' ){
//         answer = 0;        
//     }else{
//         answer = parseInt(number.split('').reverse().join(''), 2);
//     }
//     return answer;
// }
// console.log( solution(["11111", "11111", "11111", "11111"]) );


// 4

// function solution(S) {
//     var str = new Set(S);
//     if( S.length % 2 == 0 && str.size % 2 == 0 ){
//         return 1;
//     }else{
//         return 0;
//     }
// }
// console.log( solution("ABBCCABA") );

// function solution(S) {
//     var arr = S.split('');
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if( i == j ) continue;
//             if( i-j == 1 || j-i == 1 ){
//                 if( arr[i] == arr[j] ){
//                     arr[i] = '';
//                     arr[j] = '';
//                 }
//             }
//             arr.join('');
//         }
//     }
//     console.log(arr);
// }
// console.log( solution("ABBCCABA") );

// function solution(S) {
//     var arr = S.split('');
//     var flag = 1;
//     var idx = 1;
//     while ( flag == 1 ) {
//         if( arr[idx-1] == arr[idx] ){
//             arr[idx-1] = '';
//             arr[idx] = '';
//         }
//         idx++;

//         if( idx == arr.length ){
//             flag = 0;
//             idx = 1;
//         }
        
//         console.log(arr);
//     }
// }
// console.log( solution("ABBCCABA") );

// 5번
// function solution(A) {
// // 1
// // 2 5
// // 7 10 1
// // 9 4 4 5
//     var resulst = 0;
//     var resulstArr = [];
//     for (let i = 0; i < A.length; i++) {
//         resulst += A[i];
//         for (let j = i+1; j < A.length; j++) {
//             // if(i == j) continue;
//             console.log(i, j);
            
//             resulst += A[i][j];
//         }
//     }
// }
// console.log( solution([[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]) );

//6
// function solution(A) {
//     var revenue = 0;
//     for (let i = 0; i < A.length; i++) {
//         if( A[i+1] - A[i] > 0 ){
//             revenue += A[i+1] - A[i];
//         }
//     }
//     return revenue;
// }
// function solution(A) {
//     var revenue = 0;
//     for (let i = 0; i < A.length; i++) {
//         if( i+1 >= A.length ) break;
//         revenue += A[i+1] - A[i];
//     }
//     if( revenue < 0 ) revenue = 0;
//     return revenue;
// }
// console.log( solution([100000, 110000, 120000, 130000, 140000]) );


// 7번
// function solution(S1, S2) {
//     var resultArr = [];
//     for (let i = 0; i < arguments.length; i++) {
//         var upperCase = arguments[i].toUpperCase().split('');
//         var arr = arguments[i].split('');
//         for (let j = 0; j < arr.length; j++) {
//             if( j == 0 ) continue;
//             if( arr[j] == upperCase[j]){
//                 arr.splice(j, 0, ' ');
//                 upperCase.splice(j, 0, ' ');
//                 break;
//             }
//         }
//         resultArr.push(arr.join(''));
//     }

//     if( resultArr[0].split(' ').reverse().join('') == resultArr[1].split(' ').join('') ){
//         return 1;
//     }else{
//         return 0;
//     }
// }
// console.log( solution("HelloWorld", "WorldHello") );


// 8
// function solution(A, K) {
//     var result = 0;
//     var num = 0;
//     for (let i = 0; i < A.length; i++) {
//         result += A[i];
//         if( result <= K ){ num++ }
//     }
//     return num;
// }
// console.log( solution([1, 2, 3, 4, 5], 15) );

// 9
// function solution(A, K) {
//     var answer = 0;

//     var sum = 0;
//     for (let i = 1; i <= A.length; i++) {
//         if( i == 1 ){
//             A[i] = sum;
//         }else{
//             loopFn(i);
//         }
        
//         if( sum % K == 0 && sum !== 0 ){
//             console.log(sum);
//             answer++;
//         }

//     }
//     function loopFn(n){
//         if( n == A.length ){
//             return;
//         }else{
            
//         }
//         loopFn(n);
//     }

//     // return answer;
// }
// console.log( solution([1, 2, 3, 4, 5, 6], 4) );