# This may not work, but imagine testing it.

import random

def genIP():
    net1 = random.randint(1, 255)
    net2 = random.randint(1, 255)
    host = random.randint(1, 255)
    subNet = random.randint(1, 255)
    ip = f"{net1}.{net2}.{host}.{subNet}"
    return ip

def getIP():
    ip_element = document.getElementById("ip")
    ip_element.innerHTML = "Thanks for using the IP Generator. Here are the generated ip addresses: " + genIP() + ", " + genIP() + ", " + genIP() + ", " + genIP() + ", " + genIP() + ", and " + genIP() + ". please note that it may or may not be accurate"
