function calculate(){
    const inputElement = document.querySelector('.js-input');
    const cost = Number(inputElement.value);

    // console.log(cost);
    const costMsg = document.querySelector('.js-msg');
    if(cost < 0) {
        costMsg.classList.add('error-msg');
        costMsg.innerHTML = 'Error: cost cannot be less than $0';
    } else {
        let total;
        if(cost < 40) {
            total = cost + 10;
        } else {
            total = cost;
        }
        costMsg.classList.remove('error-msg');
        costMsg.innerHTML = `Total cost: $${total}`;
    }
}