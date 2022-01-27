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
