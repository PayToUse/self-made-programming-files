#include <iostream>
#include <string>
#include <stdlib.h>
#include <time.h>

using namespace std;

int main()
{
	srand (time(NULL));
	int len = 8; 		//length of the password
	string pw; 		//string to store password
	
	for(int i = 0; i < len; i++)
	{
		int randomChar = rand() % 94 + 33;
		pw.push_back((char)randomChar);
	}
	
	cout << pw << endl;
	
	return 0;
}