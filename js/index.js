
// Calculadora

let calculador = () => {
    let num1 = +document.getElementById("num1").value
    let num2 = +document.getElementById("num2").value
    let calculo = document.getElementById("calculo").value
    if (calculo === "+") {resultado.textContent = num1 + num2}
    else if(calculo === "-") {resultado.textContent = num1 - num2}
    else if(calculo ==="*") {resultado.textContent = num1 * num2}
    else if (calculo === "/") {resultado.textContent = num1 / num2}
    };

calcular.addEventListener('click', calculador);


// Agregar tareas


let listaTareas = [];

let agregarTarea = () => {


    let tarea = document.getElementById("tarea").value
    listaTareas.push (tarea)

    let todolist = document.getElementById("todolist")

    while (todolist.firstChild) {
        todolist.removeChild(todolist.firstChild)
    }

    let paraEliminar = document.getElementById("tareaRealizada")

    while (paraEliminar.firstChild) {
        paraEliminar.removeChild(paraEliminar.firstChild)

    }

    listaTareas.forEach(function(listaTarea) {

        let li = document.createElement("li")
        li.textContent = listaTarea
        todolist.appendChild(li)

        let option = document.createElement("option")
        option.textContent = listaTarea
        tareaRealizada.appendChild (option)})

        
}
        
agregar.addEventListener('click', agregarTarea);

let inputTarea = document.getElementById("tarea")

inputTarea.addEventListener('keydown', function(enter) {
    if (enter.key === 'Enter') { 
        agregarTarea()}
    }
);

// Lista de tareas para eliminar

listaTareas.forEach(function(eliminartareas){

    let option = document.createElement("option")
    option.textContent = listaTarea
    tareaRealizada.appendChild = ("option")
})

// Eliminar tareas

let eliminarTarea = () => {

let tareaSeleccionada = document.getElementById("tareaRealizada").value

let index = listaTareas.findIndex(tarea => tarea == tareaSeleccionada);
listaTareas.splice (index, 1)

let todolist = document.getElementById("todolist")

    while (todolist.firstChild) {
        todolist.removeChild(todolist.firstChild)
    }

let paraEliminar = document.getElementById("tareaRealizada")

    while (paraEliminar.firstChild) {
        paraEliminar.removeChild(paraEliminar.firstChild)

    }


listaTareas.forEach(function(listaTarea) {

    let li = document.createElement("li")
    li.textContent = listaTarea
    todolist.appendChild(li)

    let option = document.createElement("option")
    option.textContent = listaTarea
    tareaRealizada.appendChild (option)})

}

eliminar.addEventListener ("click", eliminarTarea)







