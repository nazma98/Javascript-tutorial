
function textChange(){
    const btnElem = document.querySelector('.js-btn-start');
    btnElem.innerHTML = 'Loading...';

    setTimeout(function(){
        btnElem.innerHTML = 'Finished!';
    }, 1000);
}

