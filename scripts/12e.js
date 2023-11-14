let timeoutId;
function addMsg(){
    
    const msgElem = document.querySelector('.js-add-msg');
    msgElem.innerHTML = 'Added';

    timeoutId = setTimeout(function(){
        msgElem.innerHTML = '';
    }, 2000);
    timeoutId();
    
}

