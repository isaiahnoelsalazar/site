class UncachedCSSAdder {
    constructor (url){
        this.url = url;
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = this.url + "?nocache=" + new Date().getTime();
        document.head.appendChild(css);
    }
}