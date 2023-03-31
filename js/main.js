let counter = 1;

let form = document.getElementById('toDoForm');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    buildToDoCard(event.target.toDo.value)
    event.target.toDo.value = '';
}

function buildToDoCard(value){
    console.log(value)

    let toDoH = document.createElement('h5');
    toDoH.innerHTML = `${counter}. ${value}`;

    let col = document.createElement('div');
    col.className = 'col-12';

    col.append(toDoH);

    counter ++;
    let toDoDisplay = document.getElementById('toDoDisplay');
    toDoDisplay.append(col);

}


