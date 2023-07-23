e = int(input())

for i in range(0, e):
    x = int(input())
    str=''
    if (x == 0):
        print("NULL")
    
    else:
        if (x % 2 == 0):
            str+="EVEN" 
        
        else:
            str+="ODD" 
        

        if (x > 0):
            str+=" POSITIVE" 
        
        else:
            str+=" NEGATIVE" 
        
        print(str)
        