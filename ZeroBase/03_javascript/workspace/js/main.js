
// let 안녕 = '하세요';
// let hi = 'hello';
// let HI = 'HELLO';

// console.log(안녕);
// console.log(hi);
// console.log(HI);

//  ============================================================================

// 한줄짜리 주석
/*
    여러줄짜리 주석
    여러줄짜리 주석
    여러줄짜리 주석
    여러줄짜리 주석
    여러줄짜리 주석
    여러줄짜리 주석
 */

//  ============================================================================

// 변수
// let A = 123;
// console.log(A);

// A = 456;
// console.log(A);

//  ============================================================================

// 상수
// const B = 123; // 선언과 동시에 값 초기화
// console.log(B);

// const C = 1234;
// console.log(C);

//  ============================================================================

// 상수와 변수

// 선언 후 할당
// let hi;
// hi = 'hello';

// 선언과 동시에 초기화
// let hi2 = 'hello2';

// 한 줄에 여러 변수 선언과 초기화
// let name = "민주", age = "27", msg = "I love home";

// console.log(hi);
// console.log(hi2);
// console.log(name, age, msg);

// 상수는 보통 대문자로 표기
// const TESTCASE = 5;
// const BIRTHDAY = '960906'

// console.log(TESTCASE, BIRTHDAY);

//  ============================================================================

// 호이스팅

// ==== 호이스팅이 되는 var을 사용할 때
// console.log(varname);
// var varname = 'var를 쓴 name';
// console.log(varname);
// var는 호이스팅이 실행 되기 때문에 varname 선언 전에 varname을 선언했다고 가정하고 undefined를 내보낸다.
// 호이스팅으로 인해 아래와 같이 동작
// var varname2;
// console.log(varname2);
// varname2 = 'var를 쓴 name';
// console.log(varname2);

// ==== 호이스팅이 되지 않는 let, const를 사용할 때
// letname은 선언 이전에 사용하게 되면 var와 달리 오류가 나게 된다.
// // console.log(letname);
// let letname = 'let을 쓴 name';
// console.log(letname);

//  ============================================================================

// typeof
// let str = 'hello world';
// console.log(typeof str);

// console.log(typeof undefined); // undefined
// console.log(typeof 123); // 정수 number
// console.log(typeof 456n); // big int
// console.log(typeof 123.123); // 실수 number
// console.log(typeof true); // boolean
// console.log(typeof 'hello'); // string
// console.log(typeof Symbol('id')); // symbol
// console.log(typeof Math); // object
// console.log(typeof null); // object, 구버전과의 호환성때문에 object로 된다.
// console.log(typeof console.log); // function

//  ============================================================================

// boolean
// let name_check = true;
// let age_check = false;

// let value_check = 10 > 3;
// console.log(value_check); // true

//  ============================================================================

// null
// const null_check = null; // true
// const null_check2 = 123; // false
// console.log(null_check === null);
// console.log(null_check2 === null);

//  ============================================================================

// number
// let num1 = 123.0;
// let num2 = 123.456;
// let num3 = 1/0;

// console.log(num1 + num2); // = 246.45600000000002
// // 컴퓨터는 부동소수점 계산을 완벽하게 하지 못한다. number로 사용할경우 불분명,, 
// // 정확하게 하고싶다면 Math 함수 사용

// console.log((num1 + num2).toFixed(3)); // 보완하는 방법, 소수점 3번째 자리에서 반올림, = 246.456
// console.log(num3); // = Infinity
// console.log(num1 / "a"); // = NaN


//  ============================================================================

// string
// let str1 = "hello";
// let str2 = 'hello';
// let num = 999;
// let str3 = `hello${num}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

//  ============================================================================

// 객체 object
// let user = {
//     name: 'mj',
//     age: 27,
// };
// console.log(typeof user); // object
// console.log(typeof user.name); // string
// console.log(typeof user.age); // number
// console.log(user); // { name: 'mj', age: 27 }
// console.log(user[0]); // undefined
// console.log(user['name']); // mj
// console.log(user.name); // mj
// console.log(user.age); // 27

// user.age = 30;
// console.log(user.age); // 30

// // 객체 추가
// user.local = 'seoul';
// console.log(user); // { name: 'mj', age: 30, local: 'seoul' }
// console.log(user.local); // seoul

// // 객체 삭제
// delete user.age;
// console.log(user); // { name: 'mj', local: 'seoul' }

// // 객체 복사 주의
// let copyuser = user;
// console.log(copyuser);
// copyuser.name = 'ae민주';
// // copyuser만 바꿨는데 usert의 name도 바뀜
// console.log(copyuser.name); // ae민주
// console.log(user.name); // ae민주

// console.log(user.local);
// console.log(copyuser.local);
// user.local = 'seongbuk';
// console.log(user.local);
// console.log(copyuser.local);

//  ============================================================================

// 객체 - 얕은 복사 for문
// let user = {
//     name: '민주',
//     age: 27,
// };
// let copyuser = {};

// for( let key in user ){
//     copyuser[key] = user[key];
// }

// user.name = 'ae민주';
// console.log(user.name); // ae민주
// console.log(copyuser.name); // 민주


// 객체 - 얕은 복사 Object.assign
// let user = {
//     name: '민주',
//     age: 27,
// };
// let copyuser = Object.assign({},user);
// console.log(copyuser);

// user.name = 'ae민주';
// console.log(user.name); // ae민주
// console.log(copyuser.name); // 민주

// 객체 - es6부터 지원하는 전개 연산자(Spread Operator)
// let user = {
//     name: '민주',
//     age: 27,
// };
// let copyuser = { ...user };
// console.log(copyuser);

//  ============================================================================

// 객체 - 깊은 복사 json 활용
// let user = {
//     name: '민주',
//     age: 27,
//     sizes: {
//         height: 168,
//         weight: 20,
//     }
// };
// let copyuser = JSON.parse(JSON.stringify(user));

// copyuser.sizes.height = copyuser.sizes.height + 2; // 170

// console.log(user.sizes.height); // 168
// console.log(copyuser.sizes.height); // 170

//  ============================================================================

// 형 변환 - String
// console.log( String(123) );
// console.log( String(1/0) );
// console.log( String(-1/0) );
// console.log( String(NaN) );
// console.log( String(true) );
// console.log( String(false) );
// console.log( String(undefined) );
// console.log( String(null) );
// console.log( String('kkk') );

// 형 변환 - Number
// console.log( Number('') ); // 0
// console.log( Number('123') ); // 123
// console.log( Number('hello') ); // NaN
// console.log( Number('123aa') ); // NaN
// console.log( Number(123 + 'aa') ); // NaN
// console.log( Number(true) ); // 1
// console.log( Number(false) ); // 0
// console.log( Number(undefined) ); // NaN
// console.log( Number(null) ); // 0
// console.log( parseInt(123.123) ); // 123
// console.log( parseInt('123.123') ); // 123
// console.log( parseFloat(123.123) ); // 123.123
// console.log( parseFloat('123.123') ); // 123.123
// console.log( typeof parseInt(123.123) ); // number
// console.log( typeof parseInt('123.123') ); // number
// console.log( typeof parseFloat(123.123) ); // number
// console.log( typeof parseFloat('123.123') ); // number

// 형 변환 - boolean
// console.log( '1' + Boolean() ); // false
// console.log( '2' + Boolean('') ); // false
// console.log( '3' + Boolean('0') ); // true >> 문자열로 인식하기때문에!
// console.log( '4' + Boolean('123') ); // true
// console.log( '5' + Boolean('hello') ); // true
// console.log( '6' + Boolean(0) ); // false
// console.log( '7' + Boolean(123) ); // true
// console.log( '8' + Boolean(NaN) ); // false
// console.log( '9' + Boolean(true) ); // true
// console.log( '10' + Boolean(false) ); // false
// console.log( '11' + Boolean(undefined) ); // false
// console.log( '12' + Boolean(null) ); // false
// console.log( '13' + Boolean(Number('0')) ); // false


//  ============================================================================

// 산술 대입 연산자
// 나머지 연산자
// console.log(31 % 10); // 1
// 거듭제곱
// console.log(2 ** 3); // 8

// 대입 연산자
// let n1 = 123;
// let n2 = 345;
// let s1 = 'hi     ';
// let s2 = 'world';

// let n3, s3;

// n3 = n1 + n2;
// s3 = s1 + s2;

// console.log(n3); // 468
// console.log(s3); // hi     world

// let n4 = n1 - n2;
// console.log(n4); // -222

// 복합 대입 연산자
let num = 10;
let r1, r2, r3, r4, r5;
r1 = r2 = r3 = r4 = r5 = 31;

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);

// r1 += num;
// console.log(r1); // 41

// r2 -= num;
// console.log(r2); // 21

// r3 *= num;
// console.log(r3); // 310

// r4 /= num;
// console.log(r4); // 3.1

// r5 %= num;
// console.log(r5); // 1

//  ============================================================================

// 비교 연산자
// console.log('z' > 'a'); // true
// console.log('za' > 'aaaa'); // true - 첫번째 문자인 z와 a를 비교한 걸로 결과가 나온다.
// console.log('hello' < 'hi'); // true
// console.log('hello' >= 'helloo'); // false
// console.log('hello' <= 'helloo'); // true
// console.log('10' <= 10); // true

//  ============================================================================

// scope
let x = 1;
let y = 2;
let z = 100;
console.log(x);
console.log(y);

{
    let x = 3;
    let y = 4;
    let zz = 101;
    console.log(x); // 3
    console.log(y); // 4
    console.log(z); // 100

    {
        let x = 5;
        let y = 6;
        console.log('로컬안에 로컬' + x); // 3
        console.log('로컬안에 로컬' + y); // 4
    }
}

console.log(x); // 1
console.log(y); // 2
// console.log(zz); // 오류

//  ============================================================================
//  ============================================================================
//  ============================================================================
//  ============================================================================
//  ============================================================================