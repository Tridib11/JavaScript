function isAnagram(str1,str2)
{
    let str_1=str1.split('').sort().join('');
    let str_2=str2.split('').sort().join('');
    if(str_1==str_2){
        return true;
    }
    else{
        return false;
    }
}

var ans=isAnagram("rasp","pasr");
console.log(ans);