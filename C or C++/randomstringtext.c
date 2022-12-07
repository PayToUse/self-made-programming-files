#include <stdio.h>
#include <stdlib.h>
#include <time.h>
 
int main()
{
    int i;
    char characters[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    char randomString[11] = {0};
 
    srand(time(NULL));
 
    for (i = 0; i < 10; i++)
    {
        randomString[i] = characters[rand() % 62];
    }
 
    printf("Random string: %s\n", randomString);
 
    return 0;
}
