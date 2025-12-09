class EasyHTTPRequest {
    constructor (url, method){
        this.url = url;
        this.method = method;
    }
    send (userFunction){
        const request = new XMLHttpRequest();
        request.open(this.method, this.url);
        request.onreadystatechange = userFunction;
        request.send();
    }
}