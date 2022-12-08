#include <iostream>
#include <chrono>
#include <thread>
#include <cmath>

//Function to test internet speed
void internetSpeedTest()
{
    // Initialize variables
    double start_time;
    double end_time;
    double download_size = 0;
    double download_speed;

    // Start the timer
    start_time = std::chrono::system_clock::now().time_since_epoch().count();

    // Simulate download
    while (download_size < 10000000) // 10 MB in bytes
    {
        download_size += 1024; // download 1 KB
        std::this_thread::sleep_for(std::chrono::milliseconds(10)); // wait 10 milliseconds
    }

    // Stop the timer
    end_time = std::chrono::system_clock::now().time_since_epoch().count();

    //Calculate download speed
    download_speed = (download_size / (end_time - start_time)) * 1000; // bytes per millisecond

    //Print download speed
    std::cout << "Your download speed is: " << std::round(download_speed / 1024.0) << " KB/s" << std::endl;

}

int main()
{
    internetSpeedTest();
    return 0;
} 
