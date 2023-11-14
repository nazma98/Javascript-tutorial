let words = ['apple', 'grape', 'apple', 'apple'];
console.log(countWords(words));
function countWords(words) {

    const count = {};
     
    for(let i=0; i<words.length; i++){
        const word = words[i];

        if(!count[word]) {
            count[word] = 1;
        } else {
            count[word]++;
        }
    }
    return count;
}