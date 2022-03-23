// function solution(num) {
//     if( num < -1000000 || num > 1000000 ) return;

//     let result = [];
//     result = String( Math.abs(num) ).split('');

//     let save = [];
//     for (let i = result.length-1; i >= 0; i--) { save.push(result[i]); }

//     result = [];
//     for (let i = 0; i < save.length; i++) {
//         if( save[i] !== '0' ) result.push(save[i]);
//     }
//     result = Number(result.join(''));
//     if( num < 0 ) result = -result;

//     if( Math.abs(result) >= 100000 ){ return result = 0; }

//     return result;
// }

// function solution(s) {
//     let save = String(s).split('');

//     for (let i = 0; i < save.length; i++) { save[i] = Number(save[i]); }

//     let resultArr = [];
//     for (let i = 0; i < 10; i++) {
//         resultArr.push(0);
//     }
//     for (let i = 0; i < save.length; i++) {
//         resultArr[ save[i] ] =  resultArr[ save[i] ]+1;
//     }

//     let result = [];
//     for (let i = 0; i < resultArr.length; i++) {
//         let max = Math.max.apply(null, resultArr);
//         if( resultArr[i] == max ){
//             if( result[0] < resultArr[i] ){
//                 result.unshift(i);
//                 resultArr[i] = null;
//             }else if( result[0] < resultArr[i] ){

//             }else{
//                 result.push(i);
//             }
//         }
//         else{
//             result.push(i);
//         }
        
//     }
//     result = result.join(' ');
//     return result;
// }


// function solution(s) {
//     let point = ['!', ' ', '.', ',', '?', '"'];
//     let resultArr = s.split(' ');
//     let result = [];
//     let stringArr = [];
//     for (let i = 0; i < resultArr.length; i++) {
//         stringArr = resultArr[i].split('');
//         for (let j = 0; j < stringArr.length; j++) {
//             for (let k = 0; k < point.length; k++) {
//                 if( stringArr[j] == point[k] ){
//                     stringArr.splice(j, 1);
//                 }
//             }
//             // if( stringArr[j] == '' ){
//                 //     stringArr.splice(j, 1);
//                 // }
//         }
//         stringArr = stringArr.reverse();
//         result.push(stringArr.join(''));
//     }
//     return result;
// }


// =====================================================================

// 낸답 === 1
// function solution(num) {
//     if( num < -1000000 || num > 1000000 ) return;

//     let result = [];
//     result = String( Math.abs(num) ).split('');

//     let save = [];
//     for (let i = result.length-1; i >= 0; i--) { save.push(result[i]); }

//     result = [];
//     for (let i = 0; i < save.length; i++) {
//         if( save[i] !== '0' ) result.push(save[i]);
//     }
//     result = Number(result.join(''));
//     if( num < 0 ) result = -result;

//     if( Math.abs(result) >= 100000 ){ return result = 0; }

//     return result;
// }

// 낸답 === 2
// function solution(s) {
//     let point = ['!', ' ', '.', ',', '?', '"'];
//     let resultArr = s.split(' ');
//     let result = [];
//     let stringArr = [];
//     for (let i = 0; i < resultArr.length; i++) {
//         stringArr = resultArr[i].split('');
//         for (let j = 0; j < stringArr.length; j++) {
//             for (let k = 0; k < point.length; k++) {
//                 if( stringArr[j] == point[k] ){
//                     stringArr[j] = stringArr[j].replace(point[k], '');
//                 }
//             }
//         }
//         stringArr = stringArr.reverse();
//         result.push(stringArr.join(''));
//     }
//     return result;
// }
// console.log( solution('"Hello, !! World!?"') );
// console.log( solution('"hi, "my" name"""" is minjoo!"') );

// 낸답 === 3
// function solution(s) {
//     let save = String(s).split('');

//     for (let i = 0; i < save.length; i++) { save[i] = Number(save[i]); }

//     let resultArr = [];
//     for (let i = 0; i < 10; i++) {
//         resultArr.push(0);
//     }
//     for (let i = 0; i < save.length; i++) {
//         resultArr[ save[i] ] =  resultArr[ save[i] ]+1;
//     }

//     let result = [];
//     for (let i = 0; i < resultArr.length; i++) {
//         let max = Math.max.apply(null, resultArr);
//         if( resultArr[i] == max ){
//             if( result[0] < resultArr[i] ){
//                 result.unshift(i);
//                 resultArr[i] = null;
//             }else if( result[0] < resultArr[i] ){

//             }else{
//                 result.push(i);
//             }
//         }
//         else{
//             result.push(i);
//         }
        
//     }
//     result = result.join(' ');
//     return result;
// }