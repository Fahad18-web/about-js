const constBtn = document.getElementById("btn1")
const letBtn = document.getElementById("btn2")
const varBtn = document.getElementById("btn3")

let constDis = document.getElementById("show1")
let letDis = document.getElementById("show2")
let varDis = document.getElementById("show3")

constBtn.addEventListener("click", ()=>{
    constDis.innerHTML = "This variable is declared with the keyword const. It cannot be reassigned"
})

letBtn.addEventListener("click",()=>{
    letDis.innerHTML = "This variable is declared with the keyword let. It can be reassigned but cannot be re-decleard e.g: let userName= 'fahad  userName can be re-assign but cannot re-decleared as same variable name"
})

varBtn.addEventListener("click",()=>{
    varDis.innerHTML = "This variable is declared with the keyword var. It can be reassigned avoid using var bcz of its functional scope means if you have used variable with var keyword in multiple file and if you changed the content it will change in all files"
})