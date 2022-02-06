
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

/*
    <feature name="http://tizen.org/feature/screen.size.normal.1080.1920"/>
    <feature name="http://tizen.org/api/application"/>
    <feature name="http://tizen.org/api/application.read"/>
    <feature name="http://tizen.org/api/application.launch"/>
    <feature name="http://tizen.org/api/application.kill"/>
    <feature name="http://tizen.org/api/setting"/>
    <feature name="http://tizen.org/api/system"/>
    <feature name="http://tizen.org/api/systemmanager"/>
    privileges
        <tizen:privilege name="http://tizen.org/privilege/download"/>
    <tizen:privilege name="http://tizen.org/privilege/internet"/>
*/
