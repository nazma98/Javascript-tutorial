const comments = []

renderHtml();

function renderHtml() {
    let htmlElement = '';

    for(let i=0; i<comments.length; i++) {
        const comment = comments[i];
        let html = `<p>${comment}</p>`;
        htmlElement += html;
        document.querySelector('.js-comment-container')
         .innerHTML = htmlElement;

    }
    
    console.log(htmlElement);
}

function postComment() {
    const inputElement = document.querySelector('.js-input-comment');
    const commentValue = inputElement.value ;
    comments.push(commentValue);
    console.log(comments); 

    inputElement.value = '';

    renderHtml();
}