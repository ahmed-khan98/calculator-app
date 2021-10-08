
function btn(num){
    var result =document.getElementById("result")
    result.value += num; 
}
function clearResult(){
    var result = document.getElementById("result")
    result.value = "";
}
function final(){
    var result = document.getElementById("result")
    result.value = eval(result.value);
}