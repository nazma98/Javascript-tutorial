

function toggleGmBtn() {
    const gmBtnElem = document.querySelector('.js-gm-btn');

    if(gmBtnElem.classList.contains('toggled-gaming-btn')) {
        gmBtnElem.classList.remove('toggled-gaming-btn');
    } else {
        gmBtnElem.classList.add('toggled-gaming-btn');
    }
}

function toggleMsBtn() {
    const gmBtnElem = document.querySelector('.js-ms-btn');

    if(gmBtnElem.classList.contains('toggled-music-btn')) {
        gmBtnElem.classList.remove('toggled-music-btn');
    } else {
        gmBtnElem.classList.add('toggled-music-btn');
    }
}

function toggleTchBtn() {
    const gmBtnElem = document.querySelector('.js-tch-btn');

    if(gmBtnElem.classList.contains('toggled-tech-btn')) {
        gmBtnElem.classList.remove('toggled-tech-btn');
    } else {
        gmBtnElem.classList.add('toggled-tech-btn');
    }
}



/*
function toggleBtn() {
    const gmBtnElem = document.querySelector('.comm-btn');

    let btnName = gmBtnElem.innerHTML.toLowerCase();
    // console.log(btnName);

    if(gmBtnElem.classList.contains(`toggled-${btnName}-btn`)) {
        gmBtnElem.classList.remove(`toggled-${btnName}-btn`);
    } else {
        gmBtnElem.classList.add(`toggled-${btnName}-btn`);
    }
} */