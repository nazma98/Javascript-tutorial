const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = array1;

console.log(array2);

array2.push(4);

console.log(array1);
console.log(array2);

array1.push(5);

console.log(array1);
console.log(array3);

const array4 = array2.slice();
array2.push(6);
console.log(array2);
console.log(array4);

//Destructuring array

console.log(array1[0]);
const [firstvalue, secondvalue] = [1, 2, 3, 4];

console.log(firstvalue);
console.log(secondvalue);