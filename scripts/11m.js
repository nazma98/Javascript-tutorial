const result = minMax([]);
console.log(result);

const result2 = minMax([1]);
console.log(result2);

function minMax(array) {
    let initmin = 99999999, initmax = -99999999;
    if(array.length > 0) {
        for(let i=0; i<array.length; i++) {
            if(array[i] <= initmin) {
                initmin = array[i];
            }
            if(array[i] >= initmax) {
                initmax = array[i];
            }

        }
    } else {
        initmax = initmin = null;
    }

    return {min:initmin, max:initmax};
}