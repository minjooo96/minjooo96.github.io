// 배열 선언
// let arr1 = new Array();
// let arr2 = new Array(10);
// let arr3 = [];

// console.log(arr1); // []
// console.log(arr2); // [ <10 empty items> ]
// console.log(arr3); // []

// let fruits = ['apple', 'banana', 'melon']
// console.log( fruits, fruits.length ); // [ 'apple', 'banana', 'melon' ] 3
// console.log( fruits[0] ); // apple

// // 배열 접근해서 변경하기
// fruits[1] = 'kiwi';
// console.log(fruits);

//  ============================================================================

// 배열의 연속성
// let nums = new Array();
// nums[0] = 'one';
// nums[1] = 'two';
// console.log(nums, nums.length);

// nums['once'] = 'once';
// nums['twice'] = 'twice';
// console.log(nums, nums.length);

// console.log(Object.getOwnPropertyDescriptors(nums));

//  ============================================================================

// 베열 타입 확인 및 요소 삭제
// let num = 123.456;
// let str = 'hi';
// let fruits = ['apple', 'banana', 'melon'];

// console.log( Array.isArray(num) ); // false
// console.log( Array.isArray(str) ); // false
// console.log( Array.isArray(fruits) ); // true

// console.log( fruits,  fruits.length); // [ 'apple', 'banana', 'melon' ] 3

// delete fruits[1];
// console.log( fruits,  fruits.length); // [ 'apple', <1 empty item>, 'melon' ] 3

//  ============================================================================

// 배열 추가 삭제
// let fruits = ['apple', 'banana', 'melon'];
// let ret;

// ret = fruits.push('orange'); // 객체의 length 값을 return 해준다.
// console.log(fruits, fruits.length); // [ 'apple', 'banana', 'melon', 'orange' ] 4
// console.log(ret); // 4

// ret = fruits.pop();
// console.log(fruits, fruits.length); // [ 'apple', 'banana', 'melon' ] 3
// console.log(ret); // orange << 삭제된 value값

// ret = fruits.unshift('kiwi');
// console.log(fruits, fruits.length); // [ 'kiwi', 'apple', 'banana', 'melon' ] 4
// console.log(ret); // 4

// ret = fruits.shift();
// console.log(fruits, fruits.length); // [ 'apple', 'banana', 'melon' ] 3
// console.log(ret); // kiwi

//  ============================================================================

// 배열 삭제/변경
// let fruits = ['apple', 'banana', 'melon'];
// let ret;
// console.log( fruits.splice(1) ); // [ 'banana', 'melon' ]

// ret = fruits.splice(1);
// console.log( ret ); // [ 'banana', 'melon' ] >> 1번째부터 꺼내온 것
// console.log( fruits ); // [ 'apple' ] >> 남아있는것

// 바나나만 삭제하고 싶음!
// ret = fruits.splice(1, 1);
// console.log( ret ); // [ 'banana' ]
// console.log( fruits ); // [ 'apple', 'melon' ]

// ret = fruits.splice(0, 1);
// console.log( ret ); // [ 'apple' ]
// console.log( fruits ); // [ 'melon' ]

// fruits = ['apple', 'banana', 'melon', 'strawberry'];
// ret = fruits.splice(2, 1, 'mango', 'kiwi');
// console.log( ret ); // [ 'melon' ]
// console.log( fruits ); // [ 'apple', 'banana', 'mango', 'kiwi', 'strawberry' ]

//  ============================================================================

// 배열 요소 삭제 - slice
// let fruits = ['apple', 'banana', 'melon', 'strawberry'];
// console.log( fruits.slice(1) ); // [ 'banana', 'melon', 'strawberry' ]
// console.log( fruits ); // [ 'apple', 'banana', 'melon', 'strawberry' ]
// console.log( fruits.slice(1, 2) ); // [ 'banana' ] >> 뒤에 2가 개수가 아닌 index!
// console.log( fruits.slice(-1) ); // [ 'strawberry' ] >> 뒤에 1번째 이후 데이터를 삭제해오기
// console.log( fruits.slice(-3) ); // [ 'banana', 'melon', 'strawberry' ]

// // 배열 병합
// let addfruits = ['cherry', 'orange'];
// console.log( fruits.concat(addfruits) ); // [ 'apple', 'banana', 'melon', 'strawberry', 'cherry', 'orange' ]
// console.log( fruits ); // [ 'apple', 'banana', 'melon', 'strawberry' ]

//  ============================================================================

// 배열 반복문
// let fruits = ['apple', 'banana', 'melon', 'strawberry'];

// for( let i = 0; i < fruits.length; i++ ){ // 인덱스
//     console.log( `일반 for문 >>> ${i}, ${fruits[i]}` );
//     /*
//         일반 for문 >>> apple
//         일반 for문 >>> banana
//         일반 for문 >>> melon
//         일반 for문 >>> strawberry
//     */
// }
// for( let x of fruits ){ // 요소
//     console.log( `for of 문 >>> ${x}` );
//     /*
//         for of 문 >>> apple
//         for of 문 >>> banana
//         for of 문 >>> melon
//         for of 문 >>> strawberry
//     */
// }
// for( let key in fruits ){ // key값으로 요소 가져오기
//     console.log( `for in 문 >>> ${key}, ${fruits[key]}` );
//     /*
//         for in 문 >>> 0
//         for in 문 >>> 1
//         for in 문 >>> 2
//         for in 문 >>> 3
//     */
// }

//  ============================================================================

// 배열 탐색/변형
// let fruits = ['apple', 'banana', 'melon', 'banana', 'strawberry', 'banana'];

// console.log( fruits.indexOf('banana') ); // 첫번째 바나나인 1을 출력
// console.log( fruits.indexOf('Banana') ); // 대소문자 구별하기때문에, Banana가 없으므로 -1 출력
// console.log( fruits.indexOf('banana', 2) ); // 2번째부터 탐색하기 때문에 3을 출력
// console.log( fruits.lastIndexOf('banana') ); // 마지막에서부터 탐색 > 5을 출력
// console.log( fruits.lastIndexOf('banana', -3) ); // 3 두번째 바나나부터 뒤로 가며 찾기, 자기자신이니 자신의 인덱스 출력
// console.log( fruits.lastIndexOf('banana', -4) ); // 1 멜론부터 뒤로 가며 찾기, 첫번째 바나나 출력
// console.log( fruits.lastIndexOf('banana', 0) ); // 0 부터 뒤로가기때문에 아무것도 없으므로 -1 출력, 대신 apple은 0번째기때문에 apple로 검색할 경우 0이 출력된다.

// console.log( fruits.includes('apple') ); // true
// console.log( fruits.includes('Apple') ); // false

//  ============================================================================

// 배열 변형 - 배열 정렬/반전
// let num = [-1, 5, 7, 2, 8];
// console.log( num ); // [ -1, 5, 7, 2, 8 ]
// console.log( num.reverse() ); // [ 8, 2, 7, 5, -1 ] >> 기존 num 그냥 뒤집기!
// console.log( num ); // [ 8, 2, 7, 5, -1 ] >> 리버스한거 저장됨
// console.log( num.sort() ); // [ -1, 2, 5, 7, 8 ] >> 정렬시키기
// console.log( num ); // [ -1, 2, 5, 7, 8 ] >> 정렬된거 저장됨
// console.log( num.reverse() ); // [ 8, 7, 5, 2, -1 ] >> 정렬된거를 반대로! 내림차순됨
// console.log( num.reverse() ); // [ -1, 2, 5, 7, 8 ] >> 다시 오름차순으로~

// let fruits = ['apple', 'banana', 'melon', 'banana', 'strawberry', 'banana'];
// console.log( fruits ); // [ 'apple', 'banana', 'melon', 'banana', 'strawberry', 'banana' ]
// console.log( fruits.reverse() ); // [ 'banana', 'strawberry', 'banana', 'melon', 'banana', 'apple' ]
// console.log( fruits ); // [ 'banana', 'strawberry', 'banana', 'melon', 'banana', 'apple' ]
// console.log( fruits.sort() ); // [ 'apple', 'banana', 'banana', 'banana', 'melon', 'strawberry' ]
// console.log( fruits ); // [ 'apple', 'banana', 'banana', 'banana', 'melon', 'strawberry' ]

// let fruits2 = ['apple', 'banana', 'melon', 'Banana', 'strawberry', 'banana'];
// console.log( fruits2 ); // [ 'apple', 'banana', 'melon', 'Banana', 'strawberry', 'banana' ]
// console.log( fruits2.reverse() ); // [ 'banana', 'strawberry', 'Banana', 'melon', 'banana', 'apple' ]
// console.log( fruits2.sort() ); // [ 'Banana', 'apple', 'banana', 'banana', 'melon', 'strawberry' ]


//  배열 변형 - 배열을 문자열로 변환
// let fruits = ['apple', 'banana', 'melon', 'banana', 'strawberry', 'banana'];
// let str1 = fruits.join();
// let str2 = fruits.join('/');

// console.log( str1 ); // apple,banana,melon,banana,strawberry,banana
// console.log( str2 ); // apple/banana/melon/banana/strawberry/banana
// console.log( fruits ); // [ 'apple', 'banana', 'melon', 'banana', 'strawberry', 'banana' ]

// let result = str2.split('/');
// console.log( str2 ); // apple/banana/melon/banana/strawberry/banana
// console.log( result ); // [ 'apple', 'banana', 'melon', 'banana', 'strawberry', 'banana' ]

//  ============================================================================
//  ============================================================================
//  ============================================================================
//  ============================================================================