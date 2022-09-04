
const ADD_BUTTON = document.getElementById('addBtn');

ADD_BUTTON.addEventListener('click', add);

let names = [{
    id: 1,
    text:'Wake up at 6', 
    completed: false
},{
    id: 2,
    text:'Brush my teeth', 
    completed: false
    }, {
    id: 3,
    text:'Ride cycle', 
    completed: false
}];

function add() {
    const inputElement = document.getElementById('inputText')
    const inputValue =inputElement.value;
    const isDuplicated = names.filter((item)=>{
        if(item.text ===inputValue) {
            return item;
        }
    });
    if(isDuplicated.length > 0) {
        alert(`"${inputValue}" is is duplicated item`)
    }else {
        names.push({
            id: names.length + 1,
            text: inputValue,
            completed: false,
        });
    }
    
    inputElement.value = '';
    renderList(names);
}

function renderList(namesArray) {
    let list  = ``;
// list = `<li>${names[0]}</li>`
// list = list + `<li>${names[1]}</li>`
// list = list + `<li>${names[2]}</li>`
// for (let i = 0; i<names.length; i++) {
//     list = `<li>${names[i]}</li>`
// }
namesArray.forEach((name) => {
    list = list + `<li>${name.text}  <button data-id="${name.id}">Edit</button> <button class = "m-2" data-id= "${name.id}">Delete</button></li>`
})
document.getElementById('todoList').innerHTML = list;
}

renderList(names)

document.body.addEventListener('click', (e) => {
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("marked")
    } else if (e.target.tagName === "BUTTON"){
        const id = e.target.getAttribute('data-id');
        if(e.target.innerHTML ==="Edit") {
            const editArrayItem = names.filter((item) => {
                if(item.id == id) {
                    return item;
                }
            });
            const editValue = editArrayItem[0].text;
            console.log(editValue)
            document.getElementById("inputContainer").innerHTML = `<input class="py-3 form-control shadow mt-2" 
            placeholder="Update toDo task" type="text" value = "${editValue}" id="todoUpdateInput">
            <button class="mt-2 btn btn-dark" id="updateBtn">Update</button>`
        
        
        const todoUpdateInput = document.getElementById('todoUpdateInput');
        const updateBtn = document.getElementById('updateBtn');
        updateBtn.addEventListener('click', function() {
            names = names.map(item => {
                if(item.id == id) {
                    item.text = todoUpdateInput.value;
                    return item;
                } else {
                    return item;
                }
            })
        })
        } else if(e.target.innerHTML === "Delete") {
            names= names.filter((item) => {
                if(item.id == id) {
                } else {
                    return item;
                }
            });
        } 
        renderList(names)
    }
    else {
        console.log('you are not clicked')
    }
})


