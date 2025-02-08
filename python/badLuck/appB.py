from random import *

def throw_game_AB(gh):
    g=gh
    choice=random()
    if choice<=0.49:
        # def  throw_game_B(g) :
        if g%3==0:
            x=random()
            if x<0.09:
                g=g+1
            else:
                g=g-1
        else:
            x=random()
            if x<0.74:
                g=g+1
            else:
                g=g-1
        return g
    else :
        def throw_game_A():
            x=random()
            if x<0.49:
                return 1
            else :
                return -1
        for i in range(1):
            th=throw_game_A()
            if th == 1:
                g=g+1
            elif th == -1:
                g=g-1
        return g

def gain_game_AB(N):
    g=0
    for i in range(N):
        g=throw_game_AB(g)
    return g

def expected_value_game_AB(N):
    return gain_game_AB(N)/N

print(expected_value_game_AB(100000))
