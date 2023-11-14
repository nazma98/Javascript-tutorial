const result = [];
function removeEgg(foods) {
    for(let i=0; i< foods.length; i++) {
        if(foods[i] === 'egg') {
            // foods.splice(i, 1);
            continue;
        } else {
            result.push(foods[i]);
        }
    }
    return result;
}
// console.log(result);
console.log(removeEgg(['egg', 'apple', 'egg', 'ham', 'egg']));