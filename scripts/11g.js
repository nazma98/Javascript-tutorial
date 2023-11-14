console.log(newArray([1,2,3]));
function newArray(array){
    for(let i=0; i<array.length; i++) {
        array[i]++;
    }

    return array;
}