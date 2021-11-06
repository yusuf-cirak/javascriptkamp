// Kesin sonuç değil ama süre bakımından da ölçebiliriz.

isPrime=(sayi)=>{
    let start=Date.now() // 1
    for(let i=2;i<sayi;i++){  // 2n+2
        if(sayi%i===0) {
            return false //n
        }
    }
    let end=Date.now() //1
    console.log(`Süre : ${(end-start)}`)//1
    return true
}
isPrime2=(sayi)=>{
    let start=Date.now()
    let max=parseInt(sayi/2)
    for(let i=2;i<max;i++){
        if(sayi%i===0) {
            return false
        }
    }
    let end=Date.now()
    console.log(`Süre : ${(end-start)}`)
    return true
}

isPrime3=(sayi)=>{
    let start=Date.now()
    let max=Math.ceil(Math.sqrt(sayi))+1
    for(let i=2;i<max;i++){
        if(sayi%i===0) {
            return false
        }
    }
    let end=Date.now()
    console.log(`Süre : ${(end-start)}`)
    return true
}


allPrimes=(...numbers)=>{
    return [...numbers].filter(p=>{
        for(let i=2;i<p;i++){
            
            if(p%i===0){
                return false
            }
        return true
        }
    });
}


dizi=[]
for(let i=2;i<100;i++){
    dizi.push(i);
}
console.log(allPrimes(...dizi))