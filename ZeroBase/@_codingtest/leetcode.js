// 09 - false! 문제 이해를 잘못함
// 단순히 앞 뒤가 같은게 아니라, 회문 정수 찾는거였음
var isPalindrome = function(x) { 
    let value = String(x);
    let arr = new Array();

    arr = value.split('');
    if( arr[0] === arr[arr.length-1] ){
        return true;
    }else{
        return false;
    }
};
// 13 - 
var romanToInt = function(s) {
    
};
// 14 - 
let arr14 = ["abc","abick","abdieuh",'abdeee'];
var longestCommonPrefix = function(strs) {
    let save = new String();
    let result = 0;
    let saveString = new Array();
    for( let i = 0; i < strs.length; i++){ save += strs[i]; }
    save = save.split('');
    for (let h = 0; h < save.length; h++) {
        let result = 0;
        save.forEach(element => {
            if( save[h] == element ){
                if( !saveString.includes(save[h]) ){
                    if( result >= strs.length-1 ){
                        saveString.push(element);
                    }else{
                        ++result;
                    }
                }
            }
        });
    }
    return saveString.join('');
};
console.log(longestCommonPrefix(arr14));
