
        let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let minimalValue = 3;
        let listNum = 0;

function addList() {
    // get
    let inputText = filterList(input.value);
    // set 
if (inputText) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                <div class="row">
                <div class="col-1">
                <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
                </div>
                <div class="col-6">
                    <span class=" h4" id="text${listNum}"> ${inputText} </span>
                </div>
                <div class="col-4">
                <button class=" btn btn-dark" onclick="deleteList(${listNum})">Delete</button>
                <button class=" btn btn-dark" onclick="editList(${listNum})">Edit</button>
                </div>                  
                </div>    
                </li> `;
        input.value=" ";
        listNum++;

}
}

function done(listId) { 
    let checkbox = document.getElementById(`check${listId}`);
    let current = document.getElementById(`text${listId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }else{
        current.classList.add("text-decoration-line-through");
    }
    
}

function filterList(x) {
    if (x) {
            if (x.length >= minimalValue) {
                return x;
            }
            else{
                alert("Please enter more than 3 words")
            }
    }
    else{
            return false;
    }
}

function editList(listId){
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Do you want to change list?",currentText.innerHTML);
    if (filterList(newText)) {
        currentText.innerHTML = newText; 
    }
}

function deleteList(listId) {
    let current = document.getElementById(`text${listId}`).innerHTML;
    let deleteConfirm = confirm(`Are you sure to delete:  ${current}`);
    if (deleteConfirm) {
    let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
    else{
        console.log("deleted");
    }
};  

//concatenation
const fullName = 'Agata Kristi';
console.log("Welcome " + fullName + ' to our website');

//literal template
console.log(`welcome ${fullName}  to our website`)
// array push method
const animals = ['dog', 'cat'];
animals.push('horse')

//string to Number
const stringNumber = '10';
const modifiedToNumber = parseInt(stringNumber);

// property and method
const people = {
    firstName: 'Agata',
    lastName: 'Kristi', 
    fullName:function(){
        return this.firstName + this.lastName
    }
}

//accessing element object, to do list application
document.getElementById('todo').innerHTML

// calling function in element
function add() {
    console.log('hi')
}

const ADD_BUTTON = document.getElementById('addBtn');

ADD_BUTTON.addEventListener('click', add);

const names = ['Organize workplace', 'Sending request']

function add() {
    const inputValue = document.getElementById('inputText').value;
    names.push(inputValue)
    renderList()
}

function renderList() {
    let list  = ``;
// list = `<li>${names[0]}</li>`
// list = list + `<li>${names[1]}</li>`
// list = list + `<li>${names[2]}</li>`
// for (let i = 0; i<names.length; i++) {
//     list = `<li>${names[i]}</li>`
// }
names.forEach((name) => {
    list = list + `<li>${name}</li>`
})
document.getElementById('todoList').innerHTML = list;
}

renderList();