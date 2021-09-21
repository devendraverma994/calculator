
//function for displaying values
function dis(val)
{
document.getElementById("display").value+=val
}

//function for evaluation
function solve()
{
let x = document.getElementById("display").value
let y = eval(x)
document.getElementById("display").value = y
}

//function for clearing the display
function clr()
{
document.getElementById("display").value = ""
}
