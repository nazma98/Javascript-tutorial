const result = minMax([1,-3,5]);
console.log(result);

const result2 = minMax([1,-3,5, 2, -5,7,10]);
console.log(result2);

function minMax(array) {
    let initmin = 99999999, initmax = -99999999;
    for(let i=0; i<array.length; i++) {
        if(array[i] < initmin) {
            initmin = array[i];
        }
        if(array[i] > initmax) {
            initmax = array[i];
        }

    }
    return {min:initmin, max:initmax};
}