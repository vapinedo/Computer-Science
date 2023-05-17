/************************
    Soluction 1
************************/

function validAnagram(str1, str2){
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
    
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) { return false; } 
    if (freqCounter1[key] !== freqCounter2[key]) { return false; }
  }
  
  return true;    
}

/************************
    Soluction 2
************************/

function validAnagram2(first, second) {
  if (first.length !== second.length) { return false; }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
  }

  for (let i=0; i<second.length; i++) {
    let letter = second[i];

    if (lookup[letter]) {
      lookup[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;
}
  
console.log(validAnagram2('', '')); // true
console.log(validAnagram2('aaz', 'zza')); // false
console.log(validAnagram2('anagram', 'nagaram')); // true
console.log(validAnagram2("rat","car")); // false
console.log(validAnagram2('awesome', 'awesom')); // false
console.log(validAnagram2('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram2('qwerty', 'qeywrt')); // true
console.log(validAnagram2('texttwisttime', 'timetwisttext')); // true