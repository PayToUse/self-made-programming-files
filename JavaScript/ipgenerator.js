// the ip generator made in the original language
function genIP() {
    var net1 = Math.floor(Math.random() * 255) + 1;
    var net2 = Math.floor(Math.random() * 255) + 1;
    var host = Math.floor(Math.random() * 255) + 1;
    var subNet = Math.floor(Math.random() * 255) + 1;
    
    var ip = net1 + "." + net2 + "." + host + "." + subNet;
    
    return ip;
}

function getIP() {
    document.getElementById("ip").innerHTML = "here are the generated ip addresses: " + genIP() + ", " + genIP() + ", " + genIP() + ", " + genIP() + ", " + genIP() + ", and " + genIP() + ". please note that it may be accurate";
}
