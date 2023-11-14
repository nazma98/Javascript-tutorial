function toggleBtn(btn) {
    const btnElem = document.querySelector(btn);
    // console.log(btnElem);
    // console.log(btn);
    
    if(btnElem.classList.contains('toggled-btn')) {
        btnElem.classList.remove('toggled-btn');
        
    } else {
        turnOffToggleBtn();
        btnElem.classList.add('toggled-btn');
    }
}

function turnOffToggleBtn(){
    const btnElement = document.querySelector('.toggled-btn');
    if(btnElement) {
        btnElement.classList.remove('toggled-btn');
    }
}