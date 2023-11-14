const todos = [];

function addTodo() {
    const inputElement = document.querySelector('.js-input-todo');
    const todo = inputElement.value;
    todos.push(todo);
    console.log(todos);


    inputElement.value = '';

}