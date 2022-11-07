//2 methods of declaring an elements in array
var person = {}
person.name = "Pavithra"
person.age = 23
person.gender = "Female"

var person_two = { 
name: "pavithra",
age: 23,
gender: "Female",
isMarried: false
}
console.log(person_two)





var todos = [];

function addTodo(){
    let todo = document.getElementById('todo').value
    todos.push(todo)
    displayTodo()
}

function displayTodo(){
    let list = ""
    todos.forEach((element) => {
        list = list + "<b><li>" + element + "</li></b>"
    });
document.getElementById('todo-list').innerHTML = list;
todo.value = "";
}
