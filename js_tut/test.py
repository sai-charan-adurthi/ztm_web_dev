a = 10


def y():
    print(123)


def x(a):
    y()
    print(a)
    return a*10


b = x(a)
