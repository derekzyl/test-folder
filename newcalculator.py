print("calculator")
value =int(input("value1\n"))
value1= input("select an operator * + /-or % \n")
value2 =int( input("value 2 \n"))

print("result")

if (value1 == "+"):
    print (value +value2)

elif (value1== "*"):
    print (value *value2)
    

elif (value1 == "-"):
    print (value -value2)
elif (value1=="/"):
    print (value +value2)


elif value1 == "%":
    print (value %value2)
