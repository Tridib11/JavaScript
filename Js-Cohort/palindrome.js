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

console.log(isPalindrome("helo"));
