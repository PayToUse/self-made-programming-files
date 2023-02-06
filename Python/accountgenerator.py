print("Here is your generated account data:")

import random

countries = ["Japan", "Russia", "USA", "China", "India", "Canada", "Australia", "Mexico", "Austria", "Germany", "South Korea", "Mongolia", "Afghanistan", "Indonesia", "Philippines", "Morocco", "Italy", "UK", "Kazakhstan", "Sri Lanka", "Denmark", "Sweden", "Norway", "Cuba", "Bahamas", "Dominican Republic", "Puerto Rico", "Jamaica", "France", "Finland", "Hungary", "Estonia", "Belarus", "Poland", "Ukraine", "Malaysia", "Thailand", "Laos", "Cambodia", "Tajikistan", "Tunisia", "Ecuador", "Nicaragua", "Brazil", "Peru", "Uruguay", "Paraguay", "Argentina", "Chile", "Moldova", "Monaco"]

def generate_country():
    return random.choice(countries)

def passwordGenerator():
	password = ''
	for i in range(12):
		password += random.choice('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()')
	return password

def text_generator(length):
    words = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    text = ""
    for _ in range(length):
        word = random.choice(words)
        text += word + " "
    return text

if __name__ == '__main__':
    generated_text = text_generator(1)

print("Your generated password is:", passwordGenerator())

def emailGenerator():
	email = ''
	for i in range(10):
		email += random.choice('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890')
	return email+"@gmail.com"

print("Your generated email is:", emailGenerator())
print("Country:", generate_country())
print("Birthdate:", generated_text, random.randint(1,30), random.randint(1950,2000))
print("Note: these accounts don't exist yet, try creating an account with these, along with a name you want to put with it")