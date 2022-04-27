// function solution(A) {
//     // console.log(A);
//     if( A % 2 == 0 ){

//     }
// }
// console.log(solution([6, 12, 4]));

// function solution(N, K) {
//     var saveArr, numberArr = [], result = [];
    
//     for (let i = 0; i <= String(N).length; i++) {
//         saveArr = String(N).split('');
//         saveArr.splice(i, 0, K);
//         numberArr.push(saveArr.join(''));
//     }
//     for (let i = 0; i < numberArr.length; i++) {
//         if( Number(numberArr[i]) >= 0 || Number(numberArr[i]) <= 0 ){
//             result.push(Number(numberArr[i]));
//         }
//     }
//     return Math.max.apply(null, result);
// }
// console.log(solution(-5823, 3));


function solution(N, K) {
    var elArr = new Array(N);
    for(let i = 1; i <= N; i++){ elArr[i-1] = i; }

    var idx = 0;
    var time = 1;
    while(elArr.length > 1){
        time++;
        idx++;
        if( idx > elArr.length ){ idx = 0; }
        if( time == K ){
            console.log(elArr);
            elArr.splice(idx, 1);
            time = 1;
        }
    }
    
    return elArr[0];
}
// solution(7, 3);
console.log(solution(20, 10));


// function solution(N, K){
//     var result = 0;
//     for (let i = 0; i <= N; i++) {
//         var splitArr = String(i).split('');
//         for (let j = 0; j < splitArr.length; j++) {
//             if(splitArr[j].includes(K)){
//                 result++;
//             }
//         }
//     }
//     return result;
// }
// console.log(solution(25, 2));




// function solution(A, K) {
//     var saveArr = [];
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A.length; j++) {
//             if( i == j ) continue;
//             saveArr.push( Number(String(A[i])+String(A[j])) );
//         }
//     }
//     saveArr = saveArr.sort().reverse();
//     return saveArr[K-1];
// }
// console.log(solution([1, 2, 3, 4, 5], 1));


// function solution(S) {
//     var word = S.split('').reverse().join('');
//     var result = word == S ? 1 : 0;
//     return result;
// }
// console.log(solution("MAMA"));

// function solution(A) {
//     var answer = 0;
//     var saveArr = [];
//     for (let i = 0; i < A.length; i++) {
//         var save = 0;
//             saveArr[i] = 0;
//         for (let j = 0; j < A[i].length; j++) {
//             A[i][j] == 1 ? save++ : save = 0;
//             if( saveArr[i] < save ){ saveArr[i] = save; }
//         }
//     }
//     answer = Math.max.apply(null, saveArr);
//     return answer;
// }
// console.log(solution([[1, 1, 1, 1], [1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]));

// function solution(A, S) {
//     var answer = [];

//     var saveArr = [];
//     for (let i = 0; i < A.length; i++) {
//         if( !A[i].includes(S) ){ saveArr.push(A[i]); }
//         // for (let j = 0; j < A[i].length; j++) {
            
            
//         // }
//     }
//     // for (let i = 0; i < saveArr.length; i++) {
//     //     answer.push(saveArr[i].join(''));
//     // }
//     // answer = answer.join('');
//     console.log(saveArr);

//     // return answer;
// }
// console.log( solution([["A", "B"], ["B", "C"], ["A", "C"], ["A", "D"], ["B", "E"]], "E") );

// function solution(A) {
//     var answer = 0;
//     var now = [];

//     for (let i = 0; i < A.length; i++) {
//         if(A[0][0] == 0) return;
//         for (let j = 0; j < A[i].length; j++) {
//             if( A[i][j] == 1 && i - 1 >= 0 && j - 1 >= 0 && i + 1 < A.length && j + 1 < A[i].length ){
//                 var condition = [ A[i-1][j], A[i+1][j], A[i][j-1], A[i][j+1] ];
//                 console.log(condition);

//                 for (let k = 0; k < array.length; k++) {
//                     const element = array[k];
                    
//                 }
                
//                 if( condition == 1 ){
//                     // answer = 1; 
//                 }else{
//                     // answer = 0;
//                 }
//             }
//         }
//     }
//     return answer;
// }
// console.log( solution([[1, 1, 1, 1], [0, 0, 0, 1], [0, 1, 1, 1], [0, 1, 1, 0], [0, 0, 1, 1]]) );

// function solution(A) {
//     var answer = 0;


//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A[i].length; j++) {

//             for (let k = 0; k < 8; k++) {
//                 const element = array[k];
//                 i
//             }
            
//             A[i-1][j]
//             A[i][j]
//             A[i][j]
//             A[i][j]
//             A[i][j]



//         }
//     }



//     return answer;
// }
// console.log( solution([[0, 0, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1]]) );