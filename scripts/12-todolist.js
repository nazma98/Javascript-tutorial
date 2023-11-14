const todos = [{
    name: 'make dinner',
    dueDate: '2022-12-22'},
   {
    name: 'wash dishes',
    dueDate: '2022-12-23'} 
];

renderHtml();

function renderHtml() {


    let todoListHtml = '';

    todos.forEach((taskObject, index) => {
     
        const {name,dueDate} = taskObject;
        const htmlElement = `
         <div> ${name}</div>
         <div> ${dueDate} </div>
         <button class="btn-delete js-delete-btn"
         >Delete</button>
         `;
        todoListHtml += htmlElement;
        
        document.querySelector('.task-container').innerHTML = todoListHtml;

        document.querySelectorAll('.js-delete-btn')
         .forEach((deleteButton, index)=>{
            deleteButton.addEventListener('click', ()=> {
                todos.splice(index, 1);
                renderHtml();
            });
         });
    });



    console.log(todoListHtml);

}

document.querySelector('.js-add-btn').addEventListener('click', () => {
    addTodo();
});


function addTodo() {
    const inputElement = document.querySelector('.js-input-todo');
    const todo = inputElement.value;

    const dateInputElement = document.querySelector('.js-input-due-date');
    const dueDate = dateInputElement.value;

    todos.push({
        name:todo,
        dueDate});

    todos.forEach(() => {
        inputElement.value = '';
        dateInputElement.value = '';
        renderHtml();
    });

    
}