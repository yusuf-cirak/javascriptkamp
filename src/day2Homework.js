// ÖDEV 1. MADDE ASAL SAYILAR

function checkIfPrime(...numbers) {
let primeNumbers = [];
  numbers.forEach((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    primeNumbers.push(n);
  });
  return primeNumbers;
}

console.log("Kontrol edilecek sayılar : 2,3,5,7,11,13,17");

console.log(checkIfPrime(2,3,5,7,11,13,17,18,20)+' sayıları asal sayılardır.')

console.log("--------------------------------------------------");

// ÖDEV 2. MADDE ARKADAŞ SAYILAR

function findDivisors(number) {  // Sayının bölenlerini bulmak için
  let total = 0;

  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      total += i;
    }
  }
  return total;
  // console.log(total)  total değerini görmek için
}

function findAmicables(number1,number2) {
    if (findDivisors(number1)==number2 && findDivisors(number2)==number1) {

        console.log(number1+' ve '+number2+' arkadaş sayılardır.')
    }else{
        console.log(number1+' ve '+number2+' arkadaş sayılar değildir.')
    }
}

findAmicables(220,284)

console.log("--------------------------------------------------");

// ÖDEV 3. MADDE MÜKEMMEL SAYILAR
let perfectNumbers=[]
function getPerfectNumbers(limit) {  
for (let i = 1; i <=limit; i++) {
    if (i==findDivisors(i)) {
        perfectNumbers.push(i);
    }
}
return perfectNumbers;
}
console.log('1 ve 1000 arasındaki mükemmel sayılar : '+getPerfectNumbers(1000))
console.log("--------------------------------------------------");


// ÖDEV 4. MADDE ASAL SAYILAR (1-1000)

function checkPrimeNumbers(limit) {
    let primeNumbers=[]
    for (let a = 2; a < limit; a++) {
        for (let b = 2; b < a; b++) {
            if(a%b==0) break;
        }
        if (a==b) {
            primeNumbers.push(a);
        }
    }
    return primeNumbers;
}
console.log('1 ve 1000 arasındaki asal sayılar : '+checkPrimeNumbers(1000))






