
// if else 조건문
// let apple = 9;
// if( apple >= 10 ){
//     console.log('비싸요');
// }else if( apple < 5 ){
//     console.log('싸요');
// }else{
//     console.log('적당!');
// }
// console.log('완료');

// let age = 7;
// if( age >= 8 ) console.log('초등학생');
// else console.log('유치원생');

// // 삼항 연산자
// age = 10;
// age >= 8 ? console.log('초등학생') : console.log('유치원생');

// // 삼항 연산자와 변수
// age = 6;
// let level = age >= 8 ? '초등학생' : '유치원생';
// console.log(level);

//  ============================================================================

// Switch
// let daynum = 1;
// let day;
// switch(daynum){
//     case 1: day = 'sun';
//     // 이 case에 break가 없으니, day = 'sun'을 한 후 day = 'mon'을 한 후 break기 때문에
//     // 결론적으로 day는 mon이 된다.
//     case 2: day = 'mon';
//         break;
//     case 3: day = 'tue';
//         break;
//     case 4: day = 'wed';
//         break;
//     case 5: day = 'thu';
//         break;
//     case 6: day = 'fri';
//         break;
//     case 7: day = 'sat';
//         break;
//     default: day = 'error!';
//         break;
// }
// console.log(day);


// let browser = 'chrome'; // yes
// // let browser = '123'; // what?
// let msg;
// switch (browser){
//     case 'ie':
//         msg = 'oh no';
//         break;
//     case 'chrome':
//     case 'firefox':
//     case 'safari':
//     case 'opera':
//         msg = 'yes';
//         break;
//     default: 
//         msg = 'what?'
//         break;
// }
// console.log(msg);

//  ============================================================================

// 조건문 연습문제
// const _daynum = 1;
// let weekend = "";

// switch (_daynum) {
//     case 1: weekend = '월';
//         break;
//     case 2: weekend = '화';
//         break;
//     case 3: weekend = '수';
//         break;
//     case 4: weekend = '목';
//         break;
//     case 5: weekend = '금';
//         break;
//     case 6: weekend = '토';
//         break;
//     case 7: weekend = '일';
//         break;
//     default: weekend = '무슨 요일이지?'
//         break;
// }
// console.log(weekend);

//  ============================================================================

// 반복문
// for( let i = 0; i < 3; i++ ){
//     console.log('첫번째' + i);
// }
// console.log('첫번째 완료');

// for( let i = 10; i < 3; i++ ){
//     console.log('두번째' + i);
// }
// console.log('두번째 완료');

// let n = 1;
// for( ; n < 3; ){
//     console.log('세번째' + n);
//     n++;
// }
// console.log('세번째 완료');

// 중첩 for문
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(`${i} + ${j} = ${i+j}`);   
//     }
// }

// for in문
// const person = {
//     fname: 'mj',
//     lname: 'kim',
//     age: 27
// }

// let text = "";
// for (const x in person) {
//     text += person[x];
//     console.log(text);
//     /*
//         mj
//         mjkim
//         mjkim27
//     */
// }
// console.log(text); // mjkim27

// for of 문
// let lang = 'kimminjoo';
// let langtext = '';

// for (const x of lang) {
//     langtext += x;
//     // console.log(x); 
//     console.log('for 안에서  ' + langtext);
// }
// console.log('for 밖에서  ' + langtext);
/*
    for 안에서k
    for 안에서ki
    for 안에서kim
    for 안에서kimm
    for 안에서kimmi
    for 안에서kimmin
    for 안에서kimminj
    for 안에서kimminjo
    for 안에서kimminjoo
    for 밖에서kimminjoo
*/


//  ============================================================================

// while
// let i = 0;
// while (i < 3) { // i가 3 이상일 경우엔 아예 실행안됨
//     console.log(i);
//     i++;
// }

// i = 0;
// do {
//     console.log('첫번째! do안에서  ' + i);
//     i++;
// }while(i < 3);

// i = 4;
// do {
//     console.log('두번째! do안에서  ' + i);
//     i++;
// }while(i < 3);

//  ============================================================================

// 반복문 제어
// break
// let text = "";
// for (let i = 0; i < 9; i++) {
//     if(i === 3) break;
//     text += i;
// }
// console.log(text);
// break 없을 경우 : 012345678
// break시 : 012

// continue
// let txt = "";
// for (let i = 0; i < 9; i++) {
//     if(i === 3) continue;
//     txt += i;
// }
// console.log(txt);
// continue 없을 경우 : 012345678
// continue시 : 01245678

// label
// 브레이크 없는 일반 for문
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`브레이크 없는 ${i} * ${j} = ${i*j}`);
//     }    
// }

// 브레이크 있는 일반 for문
// break시 안에 있는 for문만 끝난다.
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`브레이크 있는 ${i} * ${j} = ${i*j}`);
//         break;
//     }    
// }

// label을 붙인 for문
// break label시 바깥과 안의 for문 모두 끝난다.
// end: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`label인 for문!   ${i} * ${j} = ${i*j}`);
//         break end;
//     }    
// }

//  ============================================================================

// 반복문 연습문제

// const UNTIL_NUM = 10;
// let sum = 0;
// for (let i = 0; i <= UNTIL_NUM; i++) {
//     if( i % 2 == 0 ){
//         console.log(i);
//         sum += i;
//     }
// }
// console.log(sum); // output : 30

// 구구단
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log( `${i} * ${j} = ${i*j}` );
//     }
// }

//  ============================================================================

// 함수
// function add1(x, y){
//     console.log( x, y );
//     console.log( x + y );
// }
// add1(); // undefined undefined, NaN
// add1(10); // 10 undefined, NaN
// add1(10, 30, 100); // 10 30, 40 >> 100은 무시됨

// function add2(){
//     console.log(arguments[0] - arguments[1]);
// }
// add2(10, 10); // 0
// add2(20, 10); // 10
// add2(10, 20); // -10
// add2(10); // NaN
// add2(); // NaN

// function add3(x, y){
//     console.log('return 전');
//     // return; >> undefined
//     return x + y; // 40
//     console.log('return 후');
// }
// let result = add3(10, 30);
// console.log('result == ' + result);

// function checkage(age){
//     if( age >= 20 ) return true;
//     else return false;
// }
// console.log( checkage(19) ); // false
// console.log( checkage(20) ); // true

//  ============================================================================

// 재귀함수

// 1. basic recursive function
// function recursive(num){
//     if( num == 0 ) return 0;
//     console.log(num); // 3 2 1
//     return num + recursive(num -1);
// }
// console.log( '결론적으로 ==== ' + recursive(3) ); // 결론적으로 ==== 6


// 2. factorial function
// function factorial(x){
//     if(x === 0) return 1; // 0을 곱하면 결국 0이 될테니까 return 1로 되게 함
//     console.log(x); // 3 2 1
//     return x * factorial(x - 1);
// }
// // 3 * (2 * (1 * 1))
// const num = 3;
// let result = factorial(num);
// console.log( `The factorial of ${num} is ${result}` ); // The factorial of 3 is 6

//  ============================================================================

// 콜백 함수
// function callbackfunc(){ // 콜백함수
//     console.log('im callback func');
// }
// function higherfunc(callback){ // 고차함수
//     console.log('im higher func');
//     callback();
// }
// higherfunc(callbackfunc);

// 콜백 함수 - 계산기 예제
// function add(x, y){ return x + y; }
// function sub(x, y){ return x - y; }
// function mul(x, y){ return x * y; }
// function div(x, y){ return x / y; }
// function calc(callback, x, y){
//     return callback(x, y);
// }
// console.log( calc(add, 2, 3) );
// console.log( calc(sub, 2, 3) );
// console.log( calc(mul, 2, 3) );
// console.log( calc(div, 2, 3) );

//  ============================================================================

// 함수 연습문제
// function MAX(x, y){
//     // 내가 한 1번째 방법 - 선생님의 솔루션은 아니지만 작동됨
//     // let value = 0;
//     // x > y ? value = x : value = y;

//     // 내가 한 2번째 방법 - 선생님과 동일한 솔루션
//     // if( x > y ){
//     //     return x;
//     // }else{
//     //     return y;
//     // }

//     // 선생님의 2번째 솔루션
//     return x > y ? x : y;
// }
// console.log( MAX(0, 3) );
// console.log( MAX(-1, 5) );
// console.log( MAX(100, 7) );

//  ============================================================================

// method
// function add(x, y){ return x + y; }
// console.log( Object.getOwnPropertyDescriptors(add) );
/* 위 콘솔의 내용
    {
        length: { value: 2, writable: false, enumerable: false, configurable: true },
        name: {
        value: 'add',
        writable: false,
        enumerable: false,
        configurable: true
        },
        arguments: {
        value: null,
        writable: false,
        enumerable: false,
        configurable: false
        },
        caller: {
        value: null,
        writable: false,
        enumerable: false,
        configurable: false
        },
        prototype: { value: {}, writable: true, enumerable: false, configurable: false }
    }
*/

//  ============================================================================

// 함수 저장
// let list = [ 'mj', 27, function hello_func(){ console.log('hi im mj'); } ]
// let obj = {
//     name: 'mj',
//     age: 27, 
//     hello_func(){
//         console.log('hi im mj2');
//     }
// }
// function hello_func(){ console.log('hi im mj3'); }

// hello_func();
// obj.hello_func();
// list[2]();

// console.log(typeof hello_func);
// console.log(typeof obj.hello_func);
// console.log(typeof list[2]);

// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(Object.getOwnPropertyDescriptors(list));

//  ============================================================================

// method
// function hello(){ console.log('hello'); }
// function hi(){ console.log('hi'); }
// let obj = { name: 'mj', age: 27, func: hello, }
// hello(); // hello
// hi(); // hi
// obj.func(); // hello
// console.log( hello == obj.func ); // true

// obj.func = hi; // --> 주소값이 hello에서 hi로 이동, 실제 hi와 동일한 주소값을 봄
// obj.func(); // hi
// console.log( hi == obj.func ); // true

//  ============================================================================

// this 예제
// let obj = {
//     name: 'mj',
//     age: 27,
//     hi(){
//         console.log( this.name );
//     }
// }
// obj.hi();

// // this 예제2
// let user = { name: 'mj' };
// let admin = { name: 'admin' };

// // 함수 내 this 값은 런타임에 결정
// function hello(){ console.log( `hi ${this.name}` ); }

// // 객체에 함수 넣어주기! 그렇기때문에 hello 함수 안의 this를 사용할 수 있음
// user.func = hello;
// admin.func = hello;

// // 호출 - 접근 방법은 다양함
// user.func(); // hi mj
// admin.func(); // hi admin

// user['func'](); // hi mj
// admin['func'](); // hi admin


//  ============================================================================

// Number

// let us = 1e-6;
// console.log( us ); // 0.000001
// console.log( us.toString() ); // 0.000001
// console.log( typeof us.toString() ); // string
// console.log( typeof String(us) ); // string
// console.log( typeof us + '' ); // number
// console.log( typeof (us + '') ); // string


// let num1 = 125.0;
// let num2 = 123.456;
// console.log( num1 - num2 );
// console.log( (num1 - num2).toFixed(3) ); // 소수점만 3자리
// console.log( (num1 - num2).toPrecision(3) ); // 정수 포함 3자리까지

// // NaN인지 아닌지
// console.log( Number.isNaN(0.01) ); // false NaN이 아니다.
// console.log( !Number.isNaN(0.01) ); // true NaN이다.
// console.log( Number.isNaN(0.123 / 'hello') ); // true NaN이다.

// // 유한수인지 아닌지
// console.log( Number.isFinite(-123) ); // true - 유한수임
// console.log( Number.isFinite(Infinity) ); // false - 유한수 아님
// console.log( Number.isFinite('hello') ); // false - 유한수 아님

// // parse
// console.log( Number.parseInt('123.123'), typeof Number.parseInt('123.123') ); // 123 number
// console.log( Number.parseInt('456px'), typeof Number.parseInt('456px') ); // 456 number
// console.log( Number.parseInt(789), typeof Number.parseInt(789) ); // 789 number

// // float
// console.log( Number.parseFloat('7.89'), typeof Number.parseFloat('7.89') ); // 7.89 number
// console.log( Number.parseFloat('1.25em'), typeof Number.parseFloat('1.25em') ); // 1.25 number
// console.log( Number.parseFloat(2.34), typeof Number.parseFloat(2.34) ); // 2.34 number

//  ============================================================================

// String
// console.log('line\nfeed');
// console.log('line\rfeed');
// console.log('line\feed');
// console.log('line\\feed');
// console.log('line   feed');
// console.log('line\tfeed');
// console.log('\u{1F60D}');

// length
// let str = "helllo\nworld\n!!!!"
// console.log( str.length );

// 문자열 접근
// let str2 = 'hello, world!'
// console.log( str.charAt(0) ); // h
// console.log( str.charAt(1) ); // e
// console.log( str.charCodeAt(1) ); // 101
// console.log( str[0] ); // h

// 문자열 검색
// let text = 'hello, world!'
// console.log( text.indexOf('!') ); // 12
// console.log( text.indexOf('l', 3) ); // 3
// console.log( text.lastIndexOf('w') ); // 7
// console.log( text.includes('w') ); // true
// console.log( text.includes('hello') ); // true
// console.log( text.includes('Hello') ); // false (대소문자 구분)
// console.log( text.startsWith('world') ); // false
// console.log( text.startsWith('hel') ); // true
// console.log( text.startsWith('hel', 1) ); // false
// console.log( text.startsWith('ello', 1) ); // true
// console.log( text.endsWith('!') ); // true
// console.log( text.endsWith('world!') ); // true
// console.log( text.endsWith('world') ); // false

// 문자열 대소문자
// let str = "Naevis Calling";
// console.log( str ); // Naevis Calling
// console.log( str.toUpperCase() ); // NAEVIS CALLING
// console.log( str.toLowerCase() ); // naevis calling

//  ============================================================================

// 문자열 변환
// let text = 'HeLlo, world!!!';
// let ctext = '';

// ctext = text.replace('world', 'mj');
// console.log( ctext );

// console.log( text.replace('!', '?') ); // HeLlo, world?!!
// console.log( text.replace('l', 'i') ); // HeLlo, world?!!

// // 정규표현식
// console.log( text.replace(/l/g, 'i') ); // HeLio, worid!!!
// console.log( text.replace(/L/g, 'a') ); // Healo, world!!!
// console.log( text.replace(/l/gi, 'b') ); // Hebbo, worbd!!!
// console.log( text.replace(/L/gi, 'c') ); // Hecco, worcd!!!
// console.log( text.replace(/!/g, '?') ); // HeLlo, world???


// 문자열 추출
// let txt = 'naevis calling, ae~';
// console.log( txt.slice(0, 6) ); // naevis
// console.log( txt.slice(7) ); // calling, ae~
// console.log( txt.slice(-3) ); // ae~

// console.log( txt.substring(0, 6) ); // naevis
// console.log( txt.slice(6, 2) ); // 
// console.log( txt.substring(6, 2) ); // evis

// console.log( txt.substr(2, 7) ); // evis ca
// console.log( txt.substr(-3, 3) ); // ae~

// 문자열 분할
// let fruits = 'apple banana melon';
// result = fruits.split(' ');
// console.log( result ); // [ 'apple', 'banana', 'melon' ]
// console.log( result[0] ); // apple
// console.log( result[1] ); // banana
// console.log( result[2] ); // melon

// let fruits2 = 'apple,banana,melon';
// result = fruits2.split(',');
// console.log( result ); // [ 'apple', 'banana', 'melon' ]
// console.log( result[0] ); // apple
// console.log( result[1] ); // banana
// console.log( result[2] ); // melon

// let text = 'hello';
// result = text.split();
// console.log( result ); // [ 'hello' ]
// result = text.split('');
// console.log( result ); // [ 'h', 'e', 'l', 'l', 'o' ]
// result = text.split('', 3);
// console.log( result ); // [ 'h', 'e', 'l' ]