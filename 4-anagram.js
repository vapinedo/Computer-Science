/************************
    Soluction 1
************************/

function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  
  if (str1.length !== str2.length) { return false; }
  
  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();
  
  if (lowerStr1 === lowerStr2) { return true; }
  
  let freqCounter1 = {};
  let freqCounter2 = {};
  
  for (let char of lowerStr1) {
      freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of lowerStr2) {
      freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  
  // console.log(freqCounter1);
  // console.log(freqCounter2);
    
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) { return false; } 
    if (freqCounter1[key] !== freqCounter2[key]) { return false; }
  }
  
  return true;
    
}
  
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true