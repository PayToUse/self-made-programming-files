#include<iostream>
#include<string.h>

int main()
{
    std::string osName;

#ifdef _WIN32
    osName = "Windows 32-bit";
#elif _WIN64
    osName = "Windows 64-bit";
#elif __linux__
    osName = "Linux";
#elif __APPLE__
    osName = "Mac OS";
#else
    osName = "Unknown OS";
#endif

    std::cout << "This system is running " << osName << "\n";

    return 0;
} 
