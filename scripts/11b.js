const result = getLastValue([1,20,22,24,5]);
console.log(result);

const result2 = getLastValue(['hello', 'hi', 'ohayo', 'arigato', 'sumimasen']); 
console.log(result2);

function getLastValue(array) {
    const lastValue = array[array.length - 1];
    return lastValue;
}

