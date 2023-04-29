function letterCombinations(num) {
  //Complete the function
	let a = [0,1,"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
//function f(num){
    let s=num.toString();
    //console.log(s, typeof s )
    let d1 = parseInt(s[1])
    let d2 = parseInt(s[0])
    //console.log(d1, typeof d1, d2, typeof d2)
    let s1=a[d1]
    let s2=a[d2]
    console.log(s1, s2)
    let ar = []
    for(let i=0;i<s1.length;i++){
       for(let j=0;j<s2.length;j++){
           let newString="";
           newString=newString+s1[i]
           newString=newString+s2[j]
           ar.push(newString)
       }
	}	
	return ar;
}

module.exports = letterCombinations;
