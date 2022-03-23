
// 고차 함수 - 숫자 sort
// let num = [1, -1, 4, 0, 10, 20, 12];
// console.log( num.sort() );
// console.log( num.reverse() );

// /* 두개의 값을 계산한 후, 이전 숫자보다 크다면 정렬되는 것 */
// let ascending_order = function(x, y){
//     return x - y;
// }
// let descending_order = function(x, y){
//     return y - x;
// }
// console.log( num.sort(ascending_order) );
// console.log( num.sort(descending_order) );

// 고차 함수 - 문자 sort - 대소문자 구분 X
// let ascending_order = function(x, y){
//     x = x.toUpperCase();
//     y = y.toUpperCase();

//     if( x > y ) return 1;
//     else if ( y > x ) return -1;
//     else return 0;
// }
// let descending_order = function(x, y){
//     x = x.toUpperCase();
//     y = y.toUpperCase();

//     if( x < y ) return 1;
//     else if ( y < x ) return -1;
//     else return 0;
// }

// // let fruits = ['apple', 'orange', 'Orange', 'melon'];
// let fruits = ['apple', 'orange', 'Orange', 'melon'];
// console.log( fruits.sort() );
// console.log( fruits.sort(ascending_order) );
// console.log( fruits.sort(descending_order) );

// 고차 함수 - 숫자, 문자 공통
// let num = [1, -1, 4, 0, 10, 20, 12];
// let fruits = ['apple', 'orange', 'Orange', 'melon'];

// let ascending_order = function(x, y){
//     if(typeof x === 'string') x = x.toUpperCase();
//     if(typeof y === 'string') y = y.toUpperCase();
//     return x > y ? 1 : -1;
// }
// let descending_order = function(x, y){
//     if(typeof x === 'string') x = x.toUpperCase();
//     if(typeof y === 'string') y = y.toUpperCase();
//     return y > x ? 1 : -1;
// }

// console.log( num.sort(ascending_order) );
// console.log( num.sort(descending_order) );

// console.log( fruits.sort(ascending_order) );
// console.log( fruits.sort(descending_order) );

//  ============================================================================

// forEach()
// let nums = [1, 2, 3];
// for (let i = 0; i < nums.length; i++) {
//     console.log(i, nums[i]);
// }
// nums.forEach(function(e, i, a){
//     console.log(i, e);
// });
// nums.forEach((e, i, a) => {
//     console.log(e, i, a);
// });

//  ============================================================================

// map
// let nums = [1, 2, 3, 4, 5];
// let save = [];
// for (let i = 0; i < nums.length; i++) {
//     save.push( nums[i] * 2 );
// }
// console.log( save );

// let usemap = nums.map(function(e, i, ar){
//     return e * 2;
// });
// let usemap2 = nums.map((e, i, arr) => {
//     return e * 2;
// });
// console.log(usemap);
// console.log(usemap2);

//  ============================================================================

// find
// let users = [
//     { name: 'mj', age: 27, job: true },
//     { name: 'mg', age: 32, job: true },
//     { name: 'hj', age: 23, job: false },
// ]
// let findJob = users.find((e, i, arr) => {
//     return e.job == false;
// });
// console.log(findJob);

//  ============================================================================

// filter
// let users = [
//     { name: 'mj', age: 27, job: true },
//     { name: 'mg', age: 32, job: true },
//     { name: 'hj', age: 23, job: false },
// ]
// let findJob = users.filter((e, i, arr) => {
//     return e.age < 30;
// });
// console.log(findJob);

//  ============================================================================

// reduce
// let nums = [1, 2, 3, 4, 5];
// let callcount = 0;
// console.log('result \t value \t index');
// let sum = nums.reduce((acc, e, i, arr) => {
//     console.log(`${acc} \t\t ${e} \t\t ${i} \t\t ${arr}`);
//     callcount++;
//     return acc + e;
// }, 2);
// console.log(callcount);
// console.log(sum);

//  ============================================================================

// 생성자 함수
// function FishBread(flavor, price){
//     this.flavor = flavor;
//     this.price = price;
//     this.base = 'flour';
// }
// let b1 = new FishBread('milk', 1000);
// let b2 = new FishBread('cream', 1000);
// let b3 = new FishBread('redbean', 800);
// console.log( b1 );
// console.log( b2 );
// console.log( b3 );

//  ============================================================================

// 생성자 함수2
// function User(name){
//     if( !new.target ){
//         return new User(name);
//     }
//     return this.name = name;
// }
// let result1 = User('mj');
// let result2 = new User('hui');
// console.log(result1);
// console.log(result2);

//  ============================================================================

// Map
// let exmap = new Map();
// console.log( exmap ); // Map(0) {} >> 0은 사이즈를 나타냄

// let map = new Map();
// map.set('name', 'mj');
// map.set(123, 111);
// map.set(true, 'bool_type');
// console.log(map); // Map(3) { 'name' => 'mj', 123 => 111, true => 'bool_type' }

// console.log(map.get('name')); // mj
// console.log(map.get(123)); // 111

// map.delete(123); 
// console.log(map); // Map(2) { 'name' => 'mj', true => 'bool_type' }

// map.clear();
// console.log(map); // Map(0) {}

// map.set(123, 789).set(false, 'bool').set('f', 'banana');
// console.log(map); // Map(3) { 123 => 789, false => 'bool', 'f' => 'banana' }

//  ============================================================================

// Map for of
// let recipe_j = new Map([
//     // [key, value],
//     [ 'strawberry', 50 ],
//     [ 'banana', 100 ],
//     [ 'ice', 150 ],
// ]);
// for( let item of recipe_j.keys() ){
//     console.log(item);
//     /*
//     strawberry
//     banana
//     ice
//     */
// }
// for( let amount of recipe_j.values() ){
//     console.log(amount);
//     /*
//     50
//     100
//     150
//     */
// }
// // for( let entitys of recipe_j.entries() ){ --> 아래의 결과와 같음
// for( let entitys of recipe_j ){
//     console.log(entitys);
//     /*
//     [ 'strawberry', 50 ]
//     [ 'banana', 100 ]
//     [ 'ice', 150 ]
//     */
// }

//  ============================================================================

// Map과 Object간의 변환
// let recipe_j = new Map([
//     // [key, value],
//     [ 'strawberry', 50 ],
//     [ 'banana', 100 ],
//     [ 'ice', 150 ],
// ]);
// console.log(recipe_j); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
// let recipe_j_obj = Object.fromEntries(recipe_j);
// console.log(recipe_j_obj); // { strawberry: 50, banana: 100, ice: 150 }
// let recipe_j_kv = Object.entries(recipe_j_obj);
// console.log(recipe_j_kv); // [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

// let recipe_j_map = new Map(recipe_j_kv);
// console.log(recipe_j_map); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
// ▲▲▲▲ 기존의 map과 동일하게 됨

//  ============================================================================

// Set
// let set = new Set();
// let num = new Set([1,2,3,4,5]);
// let str = new Set('hello');

// console.log(set);
// console.log(num);
// console.log(str);

// set.add(1).add(1).add(10).add(20);
// console.log(set);

// console.log(set.has(10));
// console.log(str.has('h'));

// set.delete(1);
// console.log(set);

// set.delete(2);
// console.log(set);

// console.log( set.delete(10) ); // true
// console.log( set.delete(12) ); // false

//  ============================================================================

// set 반복문
// let str = new Set('hello');
// console.log( str );

// for( let item of str ){
//     console.log(item); // h e l o
// }
// for( let item of str.keys() ){
//     console.log(item); // h e l o
// }
// for( let item of str.values() ){
//     console.log(item); // h e l o
// }
// for( let item of str.entries() ){
//     console.log(item);
//     /* --> 맵과의 호환성을 위해 이렇게 호출함
//         [ 'h', 'h' ]
//         [ 'e', 'e' ]
//         [ 'l', 'l' ]
//         [ 'o', 'o' ]
//     */
// }

//  ============================================================================

// Math - 최대/최소/절대값
// console.log( Math.max(1, -1) );
// console.log( Math.min(1, -1) );
// console.log( Math.max(2, 1, 15, 28, 200, 47463, 262736) );
// console.log( Math.min(2, 1, 15, 28, 200, -47463, 262736) );

// let num = [ 1, 15, 28, 200, -47463 ];
// // apply
// console.log( Math.max(num) ); // NaN, 숫자가 아니기때문
// console.log( Math.max.apply(null, num) );
// console.log( Math.min.apply(null, num) );
// // spread
// console.log( Math.max(...num) );
// console.log( Math.min(...num) );
// // 절대값
// console.log( Math.abs(1) );
// console.log( Math.abs(-1) );
// console.log( Math.abs(-Infinity) );

//  ============================================================================

// Math - 난수 랜덤 값
// // property
// console.log( Math.E );
// console.log( Math.PI );

// // random
// console.log( Math.random() );
// console.log( Number.parseInt(Math.random() * 10) );

// 0부터 1000까지 랜덤값을 10개 출력하기
// for (let i = 0; i < 10; i++) {
//     console.log( Number.parseInt(Math.random() * 1000) );
// }

//  ============================================================================

// Math - 제곱/제곱근/소수점
// console.log( Math.pow(2, 3) ); // 2의 3승 = 8
// console.log( 2 ** 3 ); // 2의 3승 = 8

// console.log( Math.sqrt(4) ); // 4의 제곱근인 2
// console.log( Math.sqrt(2) ); // 2의 제곱근인 1.4142135623730951

// console.log( Math.round( 3.5534867236487368475 ) );
// console.log( Math.ceil( -3.634283647238467 ) ); // -3
// console.log( Math.ceil( 3.634283647238467 ) ); // 4
// console.log( Math.floor( -3.634283647238467 ) ); // -4
// console.log( Math.floor( 3.634283647238467 ) ); // 3

//  ============================================================================

// Date
// let date = new Date();
// let date2 = Date();
// console.log( typeof new Date() );
// console.log(date);
// console.log( typeof Date() );
// console.log(date2);
// let date3 = new Date(0);
// let date4 = new Date(1000 * 3600 * 24);
// console.log(date3);
// console.log(date4);


// let datestring = new Date('2020-01-01');
// console.log(datestring); // 2020-01-01T00:00:00.000Z
// let dateparam = new Date(2021, 00, 01);
// let dateparam2 = new Date(Date.UTC(2021, 00, 01));
// console.log(dateparam); // 2020-12-31T15:00:00.000Z
// // 날짜 다른 이유 : UCT 때문, 우리나라와의 시차때문
// console.log(dateparam2); // 2021-01-01T00:00:00.000Z


// 날짜 정보 얻기
// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

// let date2 = new Date(Date.UTC(2021, 0, 1));
// console.log(date2);
// console.log(date2.getFullYear());
// console.log(date2.getMonth());
// console.log(date2.getDay());
// console.log(date2.getHours()); // 9 시차때문에 9!
// console.log(date2.getUTCHours()); // UTC 붙여서 0
// console.log(date2.getTime()); // ms로 나오기때문에 1609459200000
// console.log(new Date(date2.getTime())); // 2021-01-01T00:00:00.000Z
// console.log(date2.getTimezoneOffset()); // -540 : 60으로 나누면 -9, 9시간의 차이가 나타남

// 날짜 정보 설정
// let date = new Date();
// console.log(date);

// let setYear = date.setFullYear(2020, 3, 15);
// console.log(date, setYear); // 2020-04-15T11:18:05.868Z, 1586949485868
// console.log(new Date(setYear)); // 2020-04-15T11:19:06.638Z

// date.setDate(1);
// console.log(date); // 2020-04-01T11:19:27.565Z

// date.setDate(0);
// console.log(date); // 2020-03-31T11:19:48.671Z

// date.setHours(date.getHours() + 2);
// console.log(date); // 2020-03-31T13:20:59.111Z

//  ============================================================================

// Date parse
// let mparse = Date.parse('2020-03-22T00:00:00.000');
// console.log(mparse); // 1584802800000
// console.log(new Date(mparse)); // 2020-03-21T15:00:00.000Z >> Z가 붙은건 -9시간으로 돌아간다.
// console.log(new Date(Date.parse('2020-03-22T00:00:00.000Z'))); // 2020-03-22T00:00:00.000Z

//  ============================================================================

// Date 성능측정
// ms 로 바꿨을 때와 안바꿨을 때 계산했을 경우 어떤 경우가 빠른지 계산하는 것
// function datesub(olddate, newdate){
//     return newdate - olddate;
// }
// function gettimesub(olddate, newdate){
//     return newdate.getTime() - olddate.getTime();
// }
// function benchmark(callbackfunction){
//     let date1 = new Date('2020-01-01');
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) {
//         callbackfunction(date1, date2);
//     }
//     return Date.now() - start;
// }
// console.log('datesub' + benchmark(datesub) + 'ms'); // datesub21ms
// console.log('gettimesub' + benchmark(gettimesub) + 'ms'); // gettimesub5ms

//  ============================================================================

// N차원 array
// let arr = [
//     [101, 102, 103],
//     [201, 202, 203],
//     [301, 302, 303]
// ]
// console.log(arr); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
// console.log(arr[0]); // [ 101, 102, 103 ]
// console.log(arr[0][2]); // 103
// console.log(arr[1][0]); // 201
// console.log(arr[2][1]); // 302

// let arr2 = arr.pop(); // 가장 뒤 데이터를 가져옴
// console.log(arr.length); // 2
// console.log(arr2.length); // 3
// console.log(arr); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]
// console.log(arr2); // [ 301, 302, 303 ]

// let arr3 = arr.push([401, 402, 403]);
// console.log(arr.length); // 3
// console.log(arr3); // 3
// console.log(arr); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]

//  ============================================================================

// 2중 for문
// let arr = [
//     [101, 102, 103, 104, 105],
//     [201, 202, 203],
//     [301, 302, 303],
//     [401, 402, 403],
// ]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// let fruits = [
//     ['banana', 50],
//     ['strawberry', 10],
//     ['kiwi', 100],
// ]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`fruits : ${fruits[i][0]}, amount : ${fruits[i][1]}`);
// }


