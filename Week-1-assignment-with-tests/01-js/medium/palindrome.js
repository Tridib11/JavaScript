/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=strTransform(str);
  let str_p="";
    for(let i=str.length-1;i>=0;i--){
        str_p+=str[i];
    }
    return str_p.toLocaleLowerCase()==str.toLocaleLowerCase()
}
function strTransform(str){
  let answer="";
  for(let i=0;i<str.length;i++){
    if(str[i]===" "|| str[i]===","||str[i]==="?"||str[i]==="!"||str[i]==="."){
      continue;
    }
    else{
      answer+=str[i];
    }
  }
  return answer
}

module.exports = isPalindrome;
