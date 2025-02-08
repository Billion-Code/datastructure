import random


#write 3 lines in console
def writeLine(message):
    print("\t \t \t"+"*".center(60,"*"))
    print("\t \t \t"+ (" "+message+" ").center(60,"*"))


#Make result of Loto
def makeResult(tab):
    tab[0]=random.randint(1,99)
    tab[1]=random.randint(1,99)
    tab[2]=random.randint(1,99)
    while True: 
        if tab[1]==tab[0] or (tab[2]==tab[1] or tab[2]==tab[0]):
            tab[1]=random.randint(1,99)
            tab[2]=random.randint(1,99)
        else:
            break


#GET THE USER CHOICE NUMBER
def getUserNumber(tab):
    while True:
        tab[0]=int(input("Enter the first number between 1 and 99 :"))
        if 1<=tab[0]<=99:
            break
        else:
            continue
    while True:
        tab[1]=int(input("Enter the second number between 1 and 99 except the first number:"))   
        if 1<=tab[1]<=99:
            break
        else:
            continue
    while True:
        tab[2]=int(input("Enter the third number between 1 and 99 except the first and second number:"))   
        if 1<=tab[2]<=99:
            break
        else:
            continue
    while True: 
        if tab[1]==tab[0]:
            print("The numbers must be different, please")
            tab[1]=int(input("Enter the second number again:"))
        elif (tab[2]==tab[1] or tab[2]==tab[0]):
            print("The numbers must be different, please")
            tab[2]=int(input("Enter the third number again:"))
        else : 
            break

def printTiket(x,y,z,usern):
    num1=str(x)
    num2=str(y)
    num3=str(z)
    choiceNumber= num1+"-"+num2+"-"+num3
    writeLine("Welcome To ONELOTO")
    print("\t \t \t"+"*".center(60,"*"))
    print("\t \t \t"+(("Your Wallet : "+str(usern.wallet)+"$ ").rjust(40)).center(60,"*"))
    print("\t \t \t"+(("Your Name : "+usern.userName +" ").rjust(40)).center(60,"*"))
    writeLine("-Your Choice Number-")
    writeLine(choiceNumber)

def initUser():
    name=input("Enter your name :")
    wallet=float(input("Enter your Deposit :"))
    usern= User(wallet,name)
    return usern
#Variables 

result = [0,0,0]
userNumber=[0,0,0]


class User :
    userName=""
    wallet=None
    win=0
    Loss=0
    Bet=0
    def __init__(self,wallet,userName):
        self.wallet=wallet
        self.userName=userName
    def lossGame(self):
        self.Loss=self.Loss+1
    def winGame(self):
        self.win=self.win +1

user1=initUser()
printTiket(12,14,45,user1)