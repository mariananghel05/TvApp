
var httpRequest = document.createElement("script");
httpRequest.src = "https://mariananghel05.github.io/TvApp/Production/src/HttpRequest.js";
document.head.appendChild(httpRequest);

window.addEventListener('load',()=>{
var script = document.createElement("script");
script.src = "https://mariananghel05.github.io/TvApp/Production/src/script.js";
document.head.appendChild(script);

var style = document.createElement("link");
style.rel = "stylesheet";
style.href = "https://mariananghel05.github.io/TvApp/Production/src/style.css";
document.head.appendChild(style);

var http = new HttpRequest("https://mariananghel05.github.io/TvApp/Production/src/index.html", "GET")
http.get(data=>{
    document.body.innerHTML = data;
});
})
