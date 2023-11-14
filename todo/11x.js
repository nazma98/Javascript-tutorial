const todos = JSON.parse(localStorage.getItem('todos')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'},
   {
    name: 'wash dishes',
    dueDate: '2022-12-23'} 
];

renderHtml();

function renderHtml() {


    let todoListHtml = '';

    for(let i = 0; i < todos.length; i++) {
        const taskObject = todos[i];
        // console.log(task);
        const {name,dueDate} = taskObject;
        // const {dueDate} = taskObject;
        const htmlElement = `
         <div> ${name}</div>
         <div> ${dueDate} </div>
         <button class="btn-delete"
         onclick = "
          todos.splice(${i},1);
          renderHtml();
          saveToStorage();
          ">Delete</button>
         `;
        todoListHtml += htmlElement;
        
        document.querySelector('.task-container').innerHTML = todoListHtml;
    }

    console.log(todoListHtml);

}


function addTodo() {
    const inputElement = document.querySelector('.js-input-todo');
    const todo = inputElement.value;

    const dateInputElement = document.querySelector('.js-input-due-date');
    const dueDate = dateInputElement.value;

    todos.push({
        name:todo,
        dueDate});
    // console.log(todos);

    for(let i = 0; i < todos.length; i++) {
        const task = todos[i];
        // console.log(task);
        
        inputElement.value = '';

        renderHtml();
        saveToStorage();
    }
}

function saveToStorage(){
    localStorage.setItem('todos', JSON.stringify(todos));
}