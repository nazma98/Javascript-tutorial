console.log(arraySwap([1,20,33,24, 5]));

console.log(arraySwap(['hi', 'heelo', 'good']));

function arraySwap(array) {
    const firstValue = array[0];
    const lastVal = array[array.length - 1];
    array[0] = lastVal;
    array[array.length - 1] = firstValue;
    return array;
}