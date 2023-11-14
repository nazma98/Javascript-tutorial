let newArr = addNum([1,2,3], 2);
console.log(newArr);
newArr = addNum([1,2,3], 3);
console.log(newArr);
newArr = addNum([-2,-1,0,99], 2);
console.log(newArr);
function addNum(array, num) {
    for(let i=0; i< array.length; i++) {
        array[i] += num;
    }
    return array;
}