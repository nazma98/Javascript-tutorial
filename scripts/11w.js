function findIndex(array, word){
    for(let i=0; i<array.length; i++){
        if(array[i]=== word){
            return i;
        }
    }
    return -1;
}

function unique(array){
    const uniqueArr = [];
    for(let i=0; i<array.length; i++) {
        if(findIndex(uniqueArr, array[i]) === -1) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;

}

const result = unique(['green', 'red', 'blue', 'red']);
const result2 = unique(['green', 'red', 'blue', 'red', 'yellow', 'green', 'pink']);
console.log(result);
console.log(result2);

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));

// console.log(findIndex(['green', 'red', 'blue'],'yellow'));