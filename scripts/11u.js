const foods = ['egg', 'apple', 'egg', 'ham', 'egg'];

function removeEgg(foods) {
    let count = 2;
    foods.reverse();
    for(let i=0; i< foods.length; i++) {
        if(foods[i] === 'egg' && count>0) {
            count--;
            foods.splice(i, 1);
            continue;
        } 
    }
    return foods;
}
 console.log(foods);
console.log(removeEgg(foods));