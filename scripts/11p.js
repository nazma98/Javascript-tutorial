const stringArr = ['hello', 'world', 'search', 'good', 'search'];

const stringArr2 = ['not', 'found'];

function loopSearch(stringArr) {
    for(let i=0; i<stringArr.length; i++) {
        if(stringArr[i] === 'search') {
            console.log(i);
            break;
        }
    }
    // return -1;
    console.log(-1);
}
loopSearch(stringArr);
// console.log(loopSearch(stringArr));
// console.log(loopSearch(stringArr2));
loopSearch(stringArr2);
