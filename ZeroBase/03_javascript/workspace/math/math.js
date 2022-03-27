// 순열

// for문을 이용한 예제
// let input = ['a', 'b', 'c'];
// let count = 0;
// function permutation(arr){
//     for(let i = 0; i < arr.length; i++){ // for i --> 첫번째 위치시킬 요소 a b c [i, 0, 0]
//         for (let j = 0; j < arr.length; j++) { // for j --> 두번째 위치시킬 요소 [i, j, 0]
//             if( i == j ) continue; // 인덱스가 같으면 스킵 처리
//             for (let k = 0; k < arr.length; k++) { // for k --> 세번째 위치시킬 요소 [i, j, k]
//                 if( i == k ) continue;
//                 if( j == k ) continue;
//                 console.log( arr[i], arr[j], arr[k] );
//                 count++; // 6
//             }
//         }
//     }
// }
// permutation(input);
// console.log(count);

// 재귀함수를 이용한 예제
// let input = ['a', 'b', 'c'];
// let count = 0;
// function permutation(arr, s, r){ // s = 시작할 위치, r = 몇개를 뽑을지, 도착할 인덱스   
//     // 1. 재귀함수를 멈춰야할 조건
//     if( s == r ){
//         count++;
//         // console.log(arr.join(' '));
//         return;
//     }
//     // 2. 재귀를 돌면서 변경되어야 할 부분 > 메인 로직
//     for (let i = s; i < arr.length; i++) { // i = s >> 선택한건 안 뽑게
//         console.log(s, r, arr);
//         [ arr[s], arr[i] ] = [ arr[i], arr[s] ]; // swap
//         permutation(arr, s+1, r);
//         [ arr[s], arr[i] ] = [ arr[i], arr[s] ]; // 원복
//     }    
// }
// permutation(input, 0, 2);
// console.log(count);

//  ============================================================================

// 조합

// 4가지 숫자에서 2개를 뽑는 경우의 수

// for문
// let input = [1, 2, 3, 4] // >> 4C2 ( 4개중에 2개를 뽑겠다. )
// let count = 0;
// function combination(array){
//     // for문 하나당 뽑는 개수, 2개를 뽑아야하니 for문을 2개를 쓴다.
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             count++;
//             console.log(array[i], array[j]);
            
//         }
//     }
// }
// combination(input);
// console.log(count);

// 재귀함수
// let input = [1, 2, 3, 4] // >> 4C2 ( 4개중에 2개를 뽑겠다. )
// let output = [];
// let count = 0;

// function combination(arr, data, s, idx, r){ // data - output이 저장될 매개변수, idx > 현재 위치
//     if( s == r ) {
//         count++;
//         console.log(data);
//         return;
//     }
//     for (let i = idx; arr.length - i >= r - s; i++) {
//         data[s] = arr[i];
//         combination(arr, data, s+1, i+1, r);
//     }
// }
// combination(input, output, 0, 0, 2);
// console.log(count);

//  ============================================================================

// 등차 수열

// for문
// let result;
// function forloop(s, t, number){
//     let acc = 0;
//     for (let i = 1; i <= number; i++) {
//         if( i == 1 ){
//             acc += s;
//         }else{
//             acc += t;
//         }
//     }
//     return acc;
// }
// result = forloop(3, 2, 5); 
// console.log(result);

// 재귀 함수
// let result;
// function recursive(s, t, number){
//     // 멈출 조건
//     if( number == 1 ) return s;

//     // 반복할 코드
//     return recursive(s, t, number - 1) + t;
// }
// result = recursive(3, 2, 5);
// console.log(result);

//  ============================================================================

// 등비 수열

// for문
// let result;
// function forloop(s, t, number){
//     let acc = 1;
//     for (let i = 1; i <= number; i++) {
//         if( i == 1 ){
//             acc *= s;
//         }else{
//             acc *= t;
//         }
//     }
//     return acc;
// }
// result = forloop(3, 2, 5); 
// console.log(result);

// 재귀 함수
// let result;
// function recursive(s, t, number){
//     // 멈출 조건
//     if( number == 1 ) return s;

//     // 반복할 코드
//     return recursive(s, t, number - 1) * t;
// }
// result = recursive(3, 2, 5);
// console.log(result);


//  ============================================================================

// 팩토리얼

// 재귀 함수
// let result;
// function recursive(number){
//     // 멈출 조건
//     if( number == 1 ) return number;

//     // 반복할 코드
//     return recursive(number - 1) * number;
// }
// result = recursive(5);
// console.log(result);

//  ============================================================================

// 피보나치 수열

// 재귀 함수
// let result;
// function recursive(number){
//     // 멈출 조건
//     if( number == 1 || number == 0 ) return number;

//     // 반복할 코드
//     //  f(n) = f(n-1) + f(n-2)
//     return recursive(number - 1) + recursive(number - 2);

//     /*
//         ** 2개의 함수!
//         1뎁스 --> number = 3;
//         f(5) = f(4) + f(3); = 3 + 2 = 5
//         f(4) = f(3) + f(2) = 2 + 1 = 3

//         2뎁스 --> number = 2;
//         f(3) = f(2) + f(1) = 1 + 1 = 2
        
//         3뎁스 --> number = 1;
//         f(2) = f(1) + f(0) = 1
//         f(1) = 1;

//         4뎁스 --> number = 0;
//         f(0) = 0
//     */
// }
// result = recursive(5);
// console.log(result);

//  ============================================================================









