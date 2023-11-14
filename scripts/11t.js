const result = [];
function removeEgg(foods) {
    let count = 2;
    foods = foods.reverse();
    for(let i=0; i< foods.length; i++) {
        if(foods[i] === 'egg' && count>0) {
            count--;
            continue;
        } else {
            result.push(foods[i]);
        }
    }
    return result;
}
// console.log(result);
console.log(removeEgg(['egg', 'apple', 'egg', 'ham', 'egg']).reverse());