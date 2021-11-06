# burada bir dene bakalım nasıl yapacaksın :)
# asal sayı bulma metodunu yazdır. metod nasıl yazılıyordu hatırlamıyorum :) normalde şöyle yapardım

def asalMi(sayi):
    # bu gönderilen sayı asal mı değil mi kontrol eder
    for i in range(2,int(sayi/2)):
        if(sayi%i==0):
            return False
    return True

def tumAsallar(limit):
    # limite kadar olan tüm asalları bulur
    # yazmaya çalışayım  => limit/2 burada kullanılmaz.limite kadar olan tüm asalları bulacağız.
    # 2 den limite kadar gideceğiz her defasında o sayı asal mı değil mi bakacağız.
    for a in range(2,limit): #+1 demeye gerek yok defaultu öyle sanırım.burada gerek yok.
        #hocam iç içe yazacam ama yazamıyorum :D kızacaksınız diye:) bu şartlar altında yazılması gerekiyor zaten.
        # ilk for döngüsü listeyi oluşturmak için, 2.for döngüsü asallık kontrolü için
        # daha sonra kullanır mısın bilmem ama sass syntaxı ile aynı şekilde çalışıyor python.css tarafında sass kullanmak istersen işine yarayabilir
        # text indent bazlı çalışıyor bu iki dil.Bu haliyle çalışması lazım
        for x in range(2,int(a/2)):
            if(a%x==0): 
                return False            
            return True
        
# python list comprehensionlar da da for kullanabilirsin.
def tumAsallar2(limit):
    # bu şekilde de kullanabilirsin.ama genel olarak list comprehensionlar okumayı zorlaştırır.iç içe istediğin kadar döngüyü yapabilirsin tek satırda

    liste=[i for i in range(2,limit)] # 2-limit arası tüm sayıları aldık.sonra for ile tekrar gezinebiliriz.
    # python ile ilgili sormak istediğin varmı bildiğim kadarıyla cevaplarım.
    # python syntax olarak ve davranış biçimi mi desem ne desem farklı gözüküyor. derste şu kodu görmedim ben.
    # python aslında güzel bir dil.c# a alışmışsın sanırım sen.
    # evet. veri bilimi konularına işim düşerser öğrenmek isterim bu dili daha doğrusu. 
    # bilmekte veya aşina olmakta fayda var.soracağın birşey yoksa sen çalışmana devam et.
    # yok hocam çok sağolun. pythona da vakit ayırabileceğim inşallah. algoritmaya bakmak lazım biraz onu anladım.
    # basit temel şeylerde bile herkesin yazdığı koddan bir farkım yoksa bir işe yarayamam.ben kafayı yedim zamanında
    # sen de yemezsen farkın olmayacak :)
    # bakalım kafayı yiyecek miyim :) 

print([i for i in range(2,100)]) # 2-100 arası sayıları direk yazar.ama kullanamıyoruz vscode da şuan.
# isterseniz vsden açabilrisinz // sanırım bendekinde eklenti ile öyle çalışıyor.sen indirmemişsn galiba.
# indirmedim hocam yüksek ihtimal.başka eklenti olabilir.bende bir sürü var.daha sonra nette bakarsın hangi eklenti diye
