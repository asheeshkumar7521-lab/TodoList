
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const submitButton = document.getElementById('submit-button');
const todocontainer = document.getElementById('todo-container');

let todos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const todo = {
        text: input.value
    };

    todos.push(todo);
    console.log(todos);

    form.reset();
    displayTodos();
});

function displayTodos() {
    todocontainer.innerHTML = '';

    todos.forEach((data, index) => {
        const todocard = document.createElement('div');
        const todotcontent = document.createElement('p');

        todotcontent.textContent = data.text;

        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'Delete';
        deletebutton.classList.add('delete-button');

        deletebutton.addEventListener('click', function() {
            todos.splice(index, 1);
            displayTodos();
        });

        todocard.classList.add('todo');

        todocard.append(todotcontent, deletebutton);
        todocontainer.append(todocard);
    });
}





















































