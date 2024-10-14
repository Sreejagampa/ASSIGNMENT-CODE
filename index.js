document.querySelector("form").addEventListener("submit",myTodoList);
function myTodoList(){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let Qty = document.querySelector("#qty").value;
    let Priority =document.querySelector("#priority").value;
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = name;
    let td2 = document.createElement("td");
    td2.innerText = Qty;
    let td3 = document.createElement("td");
    td3.innerText = Priority;
    tr1.append(td1,td2,td3);
    document.querySelector("tbody").append(tr1);
    document.querySelector("#name").value = "";
    document.querySelector("#qty").value = "";



}