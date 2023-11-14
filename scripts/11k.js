const result = countPositive([1,-3,4,-7,9,0,-23, 2,43,34]);
console.log(result);

function countPositive(array) {
    let cnt=0;
    for(let i=0; i<array.length; i++) {
        if(array[i]>0) {
            cnt++;
        }
    }
    return cnt;
}