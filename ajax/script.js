function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        const container = document.querySelector('.demo');
        container.innerHTML = xhr.responseText;
    }

    xhr.open('GET', 'data.txt');

    xhr.send();
}