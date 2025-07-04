var key1 = document.createTextNode("使用非常手段之人，你的问题往往即是答案")
var key2 = document.createTextNode("你想要的,早已经交给你了，嘘~切莫声张")
var bt = document.getElementById("sub1")
var br = document.createElement("br")

bt.addEventListener("click",function(){
    let link = document.createElement('a')
    link.style.display = 'none'
    let q = document.getElementById('question')
    q.appendChild(key1)
    q.appendChild(br)
    q.appendChild(key2)
    q.appendChild(link)

    link.href = "../file/The keys of Python.docx"
    link.download = "The keys of Python.docx"

    link.click();

    q.removeChild(link)
})