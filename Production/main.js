class HttpRequest{
    constructor(url, method="GET", responseType="text"){
        this.url = url;
        this.method = method;
        this.responseType = responseType;
        this.xhr = new XMLHttpRequest();
    }

    get(implementation){
        this.xhr.open(this.method, this.url, true);
        this.xhr.responseType = this.responseType;
        this.xhr.onload = ()=>{
            implementation(this.xhr.response);
        }
        this.xhr.send();
    }
}

var script = document.createElement("script")
var body = document.body


//script.src = "https://mariananghel05.github.io/TvApp/Production/src/Request.js"
//document.head.appendChild(script)

//var script = document.createElement("script")
script.src = "https://mariananghel05.github.io/TvApp/Production/src/script.js"
console.log("script: ",script)
document.head.appendChild(script)


var style = document.createElement("style")
style.rel = 'stylesheet'
style.href = 'https://mariananghel05.github.io/TvApp/Production/src/style.css'
document.head.appendChild(style)

var http = new HttpRequest("https://mariananghel05.github.io/TvApp/Production/src/index.html", "GET")
http.get(text=>{
    var html = document.createElement("div")
    html.innerHTML = text
    body.appendChild(html)
})

