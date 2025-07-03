var zero = document.createTextNode("test")
var key = document.getElementById("key")

//答案于此显现！！！！！！！！！！！！！
var q1 = document.getElementById("Q1_title")
q1.addEventListener("click",function(){
    key.append(zero)
})