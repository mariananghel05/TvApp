var script = document.createElement("script")
var body = document.body


script.src = "https://mariananghel05.github.io/TvApp/Production/src/Request.js"
document.head.appendChild(script)

var script = document.createElement('script')
script.src = "https://mariananghel05.github.io/TvApp/Production/src/script.js"
console.log("script: ",script)
document.head.appendChild(script)


var style = document.createElement('style')
style.rel = 'stylesheet'
style.href = 'https://mariananghel05.github.io/TvApp/Production/src/style.css'
document.head.appendChild(style)

var http = new Request("https://mariananghel05.github.io/TvApp/Production/src/index.html", "get", "text")
http.get(text=>{
    var html = document.createElement('div')
    html.innerHTML = text
    body.appendChild(html)
})

