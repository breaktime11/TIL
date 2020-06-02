const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

let toDos = [];
//toDos는 나중에 값이 바뀌기에 let

function deleteToDo(event){
    // 클릭이 된 버튼이 어떤건지 알기 위해 (parentNode)
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        //li.id는 String이기에 Int로 바꿈
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    //localStorage는 String만 저장
    // javascript object -> String : JSON.stringify
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    //delete를 위해 li에도 id 부여
    const newId = toDos.length + 1;
    const span = document.createElement("span");
    
    delBtn.innerText = "X"
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);

    const toDoObj = {
        text: text, 
        id: newId
    };

    //push를 써서 array 안에 element 하나 넣어줌
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);

    //Enter 누르면 ToDo 추가
    todoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos != null) {
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();