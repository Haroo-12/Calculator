let string = ""
let buttons = document.querySelectorAll(".button")
let cnvtarr = Array.from(buttons)
cnvtarr.forEach(function(button){
    button.addEventListener("click",function(e){
console.log((e.target.textContent))
if(e.target.innerHTML == "="){
    string = eval(string)
document.querySelector("input").value = string

}
else if(e.target.innerHTML=="C"){
    string = ""
document.querySelector("input").value = string
}
else{
string = string+e.target.innerHTML
document.querySelector("input").value = string
}
    })
})