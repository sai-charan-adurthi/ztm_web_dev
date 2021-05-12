var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll("li");
var delButtons = document.querySelectorAll(".deleteButton");


function inputLength(){
    return input.value.length;
};

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete!"));
    li.appendChild(button);

    button.onclick = removeParent;
    li.onclick = underLineLi;
};

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
};

function addListAfterkeyPress(event){
    if(inputLength() > 0 && event.key == "Enter"){
        createListElement();
    }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterkeyPress);

liItems.forEach(myFunction);
delButtons.forEach(deleteItem);


function deleteItem(item, index){
    item.addEventListener("click", function() {
        parent = item.parentElement;
        parent.remove();
    });
};

function removeParent(event){
    event.target.parentNode.remove();
};

function underLineLi(event){
    event.target.classList.toggle("done");
}

function myFunction(item, index){
    item.addEventListener("click", function(){
        item.classList.toggle("done");
    });
};