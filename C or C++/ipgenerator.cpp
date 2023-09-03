#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>

std::string genIP() {
    int net1 = rand() % 255 + 1;
    int net2 = rand() % 255 + 1;
    int host = rand() % 255 + 1;
    int subNet = rand() % 255 + 1;
    std::string ip = std::to_string(net1) + "." + std::to_string(net2) + "." + std::to_string(host) + "." + std::to_string(subNet);
    return ip;
}

void getIP() {
    std::srand(std::time(0));
    std::cout << "here are the generated ip addresses: " << genIP() << ", " << genIP() << ", " << genIP() << ", " << genIP() << ", " << genIP() << ", and " << genIP() << ". please note that it may be accurate" << std::endl;
}

int main() {
    getIP();
    return 0;
}
