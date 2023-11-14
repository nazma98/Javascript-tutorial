function toggleBtn(){
    const gmBtnElem = document.querySelector('.js-gaming-btn');
    console.log(gmBtnElem);
    // if(gmBtnElem.classList.contains('gaming-btn')) {
    //     gmBtnElem.classList.add('toggled-gaming-btn');
    //     gmBtnElem.classList.remove('gaming-btn');
    // } else {
    //     gmBtnElem.classList.add('gaming-btn');
    //     gmBtnElem.classList.remove('toggled-gaming-btn');
    // }

    if(gmBtnElem.classList.contains('toggled-gaming-btn')) {
        gmBtnElem.classList.remove('toggled-gaming-btn');
    } else {
        gmBtnElem.classList.add('toggled-gaming-btn');
    }
}
