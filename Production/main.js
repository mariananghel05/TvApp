
/*
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


    <access origin="https://www.ulore.com" subdomains="true"></access>
    <access origin="*" subdomains="true"></access>
    features
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
        <tizen:privilege name='http://tizen.org/privilege/tv.inputdevice'></tizen:privilege> 
        <tizen:privilege name="http://tizen.org/privilege/internet"/>











<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" xmlns:tizen="http://tizen.org/ns/widgets" id="http://yourdomain/Avizier1" version="1.0.0" viewmodes="maximized">
    <tizen:application id="tiubyRcv7v.Avizier1" package="tiubyRcv7v" required_version="2.3"/>
    <content src="index.html"/>
    <access origin="https://mariananghel05.github.io" subdomains="true"></access>
    <access origin="*" subdomains="true"></access>
    <feature name="http://tizen.org/feature/screen.size.normal.1080.1920"/>
    <feature name="http://tizen.org/feature/network.ethernet"/>
    <feature name="http://tizen.org/feature/network.internet"/>
    <feature name="http://tizen.org/feature/network.wifi"/>
    <feature name="http://tizen.org/feature/network.wifi.direct"/>
    <feature name="http://tizen.org/feature/screen"/>
    <feature name="http://tizen.org/feature/tv.audio"/>
    <feature name="http://tizen.org/feature/tv.display"/>
    <feature name="http://tizen.org/feature/tv.information"/>
    <feature name="http://tizen.org/feature/tv.inputdevice"/>
    <feature name="http://tizen.org/feature/tv.pip"/>
    <feature name="*"/>
    <icon src="icon.png"/>
    <name>Avizier1</name>
    <tizen:privilege name='http://tizen.org/privilege/tv.inputdevice'></tizen:privilege> 
    <tizen:privilege name='http://tizen.org/privilege/tv.audio'></tizen:privilege> 
    <tizen:privilege name='http://tizen.org/privilege/tv.display'></tizen:privilege>
    <tizen:privilege name='http://tizen.org/privilege/tv.window'></tizen:privilege>
	<tizen:privilege name='http://tizen.org/privilege/volume.set'></tizen:privilege>
    <tizen:privilege name='http://tizen.org/privilege/websetting'></tizen:privilege> 
    <tizen:privilege name='http://tizen.org/privilege/widget.viewer'></tizen:privilege> 
    <tizen:privilege name='http://tizen.org/privilege/websetting'></tizen:privilege>  
    <tizen:privilege name='http://tizen.org/privilege/fullscreen'></tizen:privilege>  
    <tizen:profile name="tv-samsung"/>
    <tizen:setting screen-orientation="portrait" context-menu="enable" background-support="enable" encryption="disable" install-location="auto" hwkey-event="enable"/>
</widget>
        */
window.onload = function() {

    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
        switch(e.keyCode){
        case 37: //LEFT arrow
            break;
        case 38: //UP arrow
            break;
        case 39: //RIGHT arrow
            break;
        case 40: //DOWN arrow
            break;
        case 13: //OK button
//          window.open("/page2.html");
            break;
        case 10009:
            tizen.application.getCurrentApplication().exit();
            break;
        default:
            console.log('Key code : ' + e.keyCode);
	    
            break;
        }
    });
    
};
let iframe = document.createElement("iframe");
iframe.setAttribute("src", "https://mariananghel05.github.io/TvApp/Production/src/");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("width","100%");
iframe.setAttribute("height","100%");
iframe.setAttribute("allowfullscreen");
iframe.setAttribute("allowfullscreen", "");
document.body.append(iframe);
//window.location = "https://mariananghel05.github.io/TvApp/Production/src/index.html";
