let form = document.querySelector("form")
let todos = document.querySelector(".todos")
let input = document.querySelector("input")

function getTodos(value) {
    let todo = document.createElement('div')
    let textEl = document.createElement("span")

    textEl.innerHTML = value;
    todo.appendChild(textEl);

    let closeEl = document.createElement('span');
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete");

    closeEl.addEventListener("click", ()=>{
        todos.removeChild(todo);
    })

    todo.appendChild(closeEl);
    todo.classList.add('todo');
    return todo;

}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    value = input.value;
    if (!value.trim()) {
        return;
    }
    todos.appendChild(getTodos(value))
    input.value = "";
})
