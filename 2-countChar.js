/************************
    Soluction 1
************************/

// function countChar(str) {
//     var result = {};
//     var lowerCaseStr = str.toLowerCase();

//     // loop over the string, through each char
//     for (var i=0; i<lowerCaseStr.length; i++) {
//         var char = lowerCaseStr[i];

//         if (/[a-z0-9]/.test(char)) {
//             if (result[char]) {
//                 result[char]++;
//             }
//             else {
//                 result[char] = 1;
//             }
//         }
//     }

//     return result;
// }


/************************
    Soluction 2
************************/

// function countChar(str) {
//     let obj = {};
//     let formatedStrings = str.toLowerCase();

//     for (let char of formatedStrings) {
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

/************************
    Soluction 3
************************/

function countChar(str) {
    let obj = {};
    let formatedStrings = str.toLowerCase();

    for (let char of formatedStrings) {
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

const result = countChar("Hello hi!");
console.log(result);