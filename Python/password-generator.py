import random

#Defining the characters used to create a password
characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"

#Defining the length of the password
length = 16

#Creating a for loop to generate a random password
password = ""
for c in range(length):
    password += random.choice(characters)

#Printing the generated password
print(password)