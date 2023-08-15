function detectOS() {
    var userAgent = window.navigator.userAgent;

    if (userAgent.indexOf("Windows") != -1) {
        alert("This system is running Windows");
    } else if (userAgent.indexOf("Mac") != -1) {
        alert("This system is running Mac");
    } else if (userAgent.indexOf("Linux") != -1) {
        alert("This system is running Linux");
    } else {
        alert("Unable to detect OS");
    }
}
