const stringArr = ['hello', 'world', 'search', 'good'];

const stringArr2 = ['not', 'found'];

function loopSearch(stringArr) {
    for(let i=0; i<stringArr.length; i++) {
        if(stringArr[i] === 'search') {
            return i;
        }
    }
    return -1;
}

console.log(loopSearch(stringArr));
console.log(loopSearch(stringArr2));
