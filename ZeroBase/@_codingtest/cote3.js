// 1
// function solution(nums) {
//     var result = [];
//     for (let i = 1; i <= nums.length; i++) {
//         if( !nums.includes(i) ) result.push(i);
//     }
//     return result;
// }
// console.log(solution( [1, 3, 4, 8] ));

// 2
// function solution(p, s) {
//     var idx = p.split(''), word = s.split(' ');
//     var sum = [], result = true;

//     for(let i = 0; i < idx.length; i++){ sum[i] = [idx[i], word[i]]; }

//     for (let i = 0; i < sum.length; i++) {
//         for (let j = 0; j < sum.length; j++) {
//             if( i == j ) continue;

//             if( (sum[i][0] === sum[j][0] && sum[i][1] !== sum[j][1]) || (sum[i][0] !== sum[j][0] && sum[i][1] === sum[j][1]) ){
//                 result = false;
//             }
//         }
//     }
//     return result;
// }
// console.log(solution( "가나다라", "바나나 드래곤 스리랑카 오염" ));


// 3
// function solution(S) {
//     return eval(S).toFixed(2);
// }
// console.log(solution("2-6-7*8/2+5"));

// 4
// function solution(A){
//     var result = 0;
//     var sumArr = [];

//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A.length; j++) {
//             for (let k = 0; k < A.length; k++) {
//                 if( i == j || j == k || i == k ) continue;
//                 if( j == i + 1 && (k == i + 2 || k == j + 1) ){
//                     sumArr.push( A[i] + A[j] + A[k] );
//                 }
                
//             }
//         }
//     }
//     result = Math.max.apply(null, sumArr);
//     return result < 0 ? 0 : result;
// }
// console.log(solution([2, -8, 3, -2, 4, -10]));

// 5
// function solution(S){
//     var result = 0;
//     // var sum = 0;
//     // S = String(S).split('');

//     // 이진수
//     // for (let i = S.length - 1; i >= 0; i--) {
//     //     if( S[i] == 1 ) sum += Math.pow(2, S.length - 1 - i);
//     //     if( i == 0 ) result++;
//     // }
//     // 짝수 홀수

// }
// console.log( solution(1101) );
// function solution(S){
//     var result = 0;

//     // 이진수
//     var sum = function(S){
//         result++;
//         return parseInt(S, 2);
//     }
//     sum = sum(S);
    
//     // 짝수 홀수
//     while(sum > 0){
//         if( sum % 2 == 1 ){
//             sum = sum - 1;
//         }else{
//             sum = sum / 2;
//         }
//         if( sum == 0 ) break;
//         result++;
//     }
//     return result;
// }
// console.log( solution(1101) );

// 6
// function solution(s) {
//     var arr = s.split('');
//     var save = [];
//     var result = 1, resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if( j == i + 1){
//                 if( arr[i] !== arr[j] ){
//                     result++;
//                     save.push(arr[i]);
//                     if( save.includes(arr[j]) ) result = 0;
//                     resultArr.push(result);
//                 }
//             }
//         }
//     }
//     return Math.max.apply(null, resultArr);
// }
// console.log( solution('abcdefg') );
// console.log( solution('abssccbsbsv') );

// 7
// function solution(A) {
//     var binary = [], result = [];
//     for (let i = 0; i < A.length; i++) { binary.push( A[i].toString(2) ); }
//     binary.sort();
//     for (let i = 0; i < binary.length; i++) { result.push( parseInt(binary[i], 2) ); }
//     return result;
// }
// function solution(A) {
//     var binary = [], result = [];
//     for (let i = 0; i < A.length; i++) { binary.push( A[i].toString(2) ); }
//     // binary.sort(function(a, b){ return a - b; });
//     for (let i = 0; i < binary.length; i++) { result.push( parseInt(binary[i], 2) ); }

//     var sum = 0;
//     var sumArr = [];
//     for (let i = 0; i < binary.length; i++) {
//         sum = 0;
//         for (let j = 0; j < binary[i].length; j++) {
//             console.log(binary[i], binary[i][j]);
//             if( binary[i][j] == 1 ) sum++;
//         }
//         sumArr.push(sum);
//     }
//     console.log(sumArr);

//     // return result;
// }
// console.log( solution([1, 2, 3, 4]) );

// 8
// function solution(A, B) {
//     var answer = 0;
//     var Aarr = [], Barr = [];
//     var aValue = A, bValue = B;

//     while (aValue > 1) {
//         if( aValue % 2 == 0 ){
//             aValue /= 2;
//             Aarr.push('2');
//         }else if( aValue % 3 == 0 ){
//             aValue /= 3;
//             Aarr.push('3');
//         }else{
//             aValue /= 2;
//             Aarr.push('2');
//         }
//         console.log(aValue);
//     }
//     while (bValue > 1) {
//         if( bValue % 2 == 0 ){
//             bValue /= 2;
//             Barr.push('2');
//         }else if( bValue % 3 == 0 ){
//             bValue /= 3;
//             Barr.push('3');
//         }else{
//             bValue /= 2;
//             Barr.push('2');
//         }
//     }
    
//     for (let i = 0; i < Aarr.length; i++) {
//         if( Barr.includes(Aarr[i]) ){
//             answer = 1;
//         }else{
//             answer = 0;
//         }
//     }
//     return answer;
// }
// console.log( solution(1000, 500) );

// 9
// function solution(A) {
//     var answer = 0;

//     for (let i = 0; i < A.length; i++) {
//         var rvrs = A[i].reverse();
//         for (let j = 0; j < A.length; j++) {
//             if( i == j ) continue;
//             if( rvrs[0] == A[j][1] && rvrs[1] == A[j][0] ) answer++;
//         }
//     }
//     return answer;
// }
// console.log( solution([["철수", "영희"], ["영희", "진수"], ["진수", "동수"], ["진수", "진호"]]) );
// console.log( solution([["철수", "영희"], ["영희", "철수"], ["진수", "동수"], ["진수", "진호"]]) );

// 10
// function solution(s) {
//     var txt = s.split('');
//     var result = 0;
//     for (let i = 0; i < txt.length; i++) {
//         function numberI(){
//             if( txt[i] == 'I' && txt[i+1] == 'V' ){
//                 result += 4;
//                 i += 2;
//             }else if( txt[i] == 'I' && txt[i+1] == 'X' ){
//                 result += 9;
//                 i += 2;
//             }else{
//                 result += 1;
//             }
//         }
//         function numberX(){
//             if( txt[i] == 'X' && txt[i+1] == 'L' ){
//                 result += 40;
//                 i += 2;
//             }else if( txt[i] == 'X' && txt[i+1] == 'C' ){
//                 result += 90;
//                 i += 2;
//             }else{
//                 result += 10;
//             }
//         }
        
//         function numberC(){
//             if( txt[i] == 'C' && txt[i+1] == 'D' ){
//                 result += 400;
//                 i += 2;
//             }else if( txt[i] == 'C' && txt[i+1] == 'M' ){
//                 result += 900;
//                 i += 2;
//             }else{
//                 result += 100;
//             }
//         }

//         switch(txt[i]){
//             case 'I' : numberI(); break;
//             case 'V' : result += 5; break;
//             case 'X' : numberX(); break;
//             case 'L' : result += 50; break;
//             case 'C' : numberC(); break;
//             case 'D' : result += 500; break;
//             case 'M' : result += 1000; break;
//             default: result += 0; break;
//         }
//     }
//     return result;
// }
// console.log( solution("XXVI") );