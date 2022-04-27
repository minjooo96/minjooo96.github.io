
// 1
// function solution(fruits) {
//     let count = 0;
//     let sum = 0;
//     let sumArr = [];
//     for (let i = 0; i < fruits.length; i++) {
//         count = 0;
//         while(count < fruits.length ) {
//             sum = 0;
//             for (let j = i; j < count-1; j++) {
//                 sum += fruits[j];
//             }
//             count++;
//             sumArr.push(sum);
//         }
//     }
//     console.log(sumArr);
    
//     return Math.max(...sumArr);
// }
// console.log( solution( [-2, 5, -3, 6, 8, -1, -5, 3]) );

// 2

// 3 2
// 2 3
// 1 3 1
// 2 1 2 
// function solution(n, k) {
//     console.log(n-k);
//     let arr = [];
//     for (let i = 1; i <= k; i++) {
        
//     }
// }
// console.log( solution( 5, 3 ) );

// 3
// function solution(arr) {
//     arr.sort();
//     let max = arr[arr.length-1];
//     let twoSide = arr[arr.length-2] + arr[arr.length-3];

//     return twoSide > max ? twoSide + max : 0;
// }
// console.log( solution( [2, 3, 4, 5, 6] ) );

// 4
// function solution(n) {
//     let pow = 0;
//     for (let i = 1; i <= 100000000; i++) {
//         pow = Math.pow(i+1, 3);
//         if( n < pow ) return pow = Math.pow(i, 3);
//     }
// }
// console.log( solution( 99 ) );

// 5
// function solution(distance, time) {
//     // 적군의 속력
//     let enemySpd = [];
//     for (let i = 0; i < time.length; i++) {
//         enemySpd[i] = distance[i] / time[i];
//     }

//     let enemy = 0;
//     let our = 0;
//     let round = {};
//     let roundNum = 0;
//     let count = 0;
//     let result;

//     while ( roundNum <= Math.max(...enemySpd) ){ // roundNum이 작은동안
//         for (let i = 0; i < enemySpd.length; i++) {
//             if( enemySpd[i] == roundNum ){
//                 enemy++;
//             }
//         }
//         round[roundNum] = enemy;
//         roundNum++;
//     }
//     console.log(round);
    
//     if( roundNum < enemy ) result = -1;
//     if( round[round.length-1] < roundNum ) result = 1;

//     console.log(result);
    
    
//     return result;
// }
function solution(distance, time) {
        // 적군의 속력
    let enemySpd = [];
    for (let i = 0; i < time.length; i++) {
        enemySpd[i] = distance[i] / time[i];
    }
    return enemySpd.length < Math.max(...enemySpd) ? 1 : -1;
}
console.log( solution( [1, 2, 8], [1, 1, 2] ) );
console.log( solution( [2,2,3,6], [1,1,1,2] ) );

// 6
// function solution(puzzle, word) {
//     let str = word.split('');
//     let distance = [];
    
//     for (let i = 0; i < puzzle.length; i++) {
//         for (let j = 0; j < puzzle.length; j++) {
//             if( str.includes(puzzle[i][j]) ) distance.push([i, j]);
//         }
//     }

//     for (let i = 0; i < distance.length; i++) {
//         for (let j = i+1; j < distance.length; j++) {
//             if( (Math.abs(distance[i][0] - distance[j][0]) == 1 && distance[i][1] == distance[j][1]) || (Math.abs(distance[i][1] - distance[j][1]) == 1 && distance[i][0] == distance[j][0]) ){
//                 return true;
//             }else{
//                 return false;
//             }
            
//         }
//     }
// }
// console.log( solution( [["대", "한", "가", "나"], ["국", "민", "다", "라"], ["마", "바", "다", "아"], ["자", "차", "카", "타"]], "대한민국" ) );

// 7
// function solution(field, n) {
//     let x, y;
//     x = y = 0;
    
//     let xmax = field[0].length, ymax = field.length;
//     let couple = [];
//     let xArr = [];

//     for (let i = 0; i < xmax; i++) {
//         if( i+1 !== undefined ){
//             xArr.push([ field[0][i], field[0][i+1] ]);
//         }
            
            
//     }
//     console.log(xArr);
    
// }
// console.log( solution( [[1, 0, 1], [0, 0, 1], [0, 1, 1]], 2 ) );

// 8
// function solution(arr) {
//     let num = 0;
//     arr.sort().reverse();
//     for (let i = 0; i <= 3; i++) {
//         num += arr[i];
//     }
//     return num;
// }
// console.log( solution( [1, 2, 3, 4] ) );

// 9
// function solution(arr) {
//     let sum = [], max = [], dd = [];
//     for (let i = 0; i < arr.length; i++) {
//         let save = [], left = [];
//         if( i !== 0 ){
//             save.push(arr[0], arr[i]);
//             for (let j = 0; j < arr.length; j++) {
//                 if( j !== 0 && j !== i ) left.push(arr[j]);
//             }
//             max.push([Math.max(...save), Math.max(...left)]);
//         }
//         console.log(save, left);
//     }
//     for (let k = 0; k < max.length; k++) {
//         sum.push(max[k][0] + max[k][1]);
//     }
//     return Math.min(...sum);
// }
// console.log( solution( [10, 22, 5, 8, 47, 552] ) );

// 10
// function solution(p, s) {
//     let arr = p.split('');
//     let count = 0;
//     if( arr.includes('*') ){
//         arr.splice(arr.indexOf('*'), 1);
//         let str = arr.join('');

//         for (let i = 0; i < s.length; i++) {
//             if( arr.indexOf('*') !== 0 ){ // 뒤에
//                 if( s[i].indexOf(str) == 0 ){
//                     count++;
//                 }
//             }else{ // 앞에
//                 if( s[i].indexOf(str) !== 0 ){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }
// console.log( solution( "fast*", ["fastcampus", "fast", "faster", "notfast", "notfaster"] ) );
