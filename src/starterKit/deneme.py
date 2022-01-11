

def asalMi(sayi):
    # bu gönderilen sayı asal mı değil mi kontrol eder
    for i in range(2,int(sayi/2)):
        if(sayi%i==0):
            return False
    return True

def tumAsallar(limit):
    # limite kadar olan tüm asalları bulur
    
    for a in range(2,limit):
        for x in range(2,int(a/2)):
            if(a%x==0): 
                return False            
            return True
        
def tumAsallar2(limit):

    liste=[i for i in range(2,limit)] 

print([i for i in range(2,100)])
