//*
// const sayi=prompt("sayi giriniz")
// for (let i = 1; i < sayi; i++) {
//   console.log(`Kemal: ${i}`);
// }

// const num=+prompt("sayiyi giriniz")

// let asal=false;
// for(let i=2 ;i<num;i++){
//  if(num%i==0){
// asal=false;
// break;
//  }
//  asal=true;

// }
// const result=asal?"Asaldır":"Asal Değildir"
// // console.log(`${num} ${asal}`);

// alert(result);
// console.log(result);

// const not = +prompt("Notu giriniz");
// let notHarf ;
// if (not <= 25) {
//   notHarf = "FF";
// } else if (not > 25 && not < 46) {
//   notHarf = "DD";
// } else if (not >= 46 && not <= 65) {
//   notHarf = "CC";
// } else if (not >= 66 && not <= 75) {
//   notHarf = "BB";
// } else if (not >= 76 && not <= 90) {
//   notHarf = "BA";
// } else if (not >= 91 && not <= 100) {
//   notHarf = "AA";
// } else {
//   alert("Tanımsız ,0 ile 100 arası sayı giriniz");
// }

// alert(notHarf);

// const ay = prompt("lütfen ay ismini giriniz küçük harfle");
// let hangiay;

// switch (ay) {
//   case "ocak":
//     hangiay = 1;
//     break;
//   case "şubat":
//     hangiay = 2;
//     break;
//   case "mart":
//     hangiay = 3;
//     break;
//   case "nisan":
//     hangiay = 4;
//     break;
//   case "mayis":
//     hangiay = 5;
//     break;
//   case "haziran":
//     hangiay = 6;
//     break;
//   default:
//    // alert("Ay ismini düzgün yazdığınızdan emin olun")
//     break;
// }
// hangiay
//   ? alert(`${ay} ${hangiay} . aydır`)
//   : alert("Ay ismini düzgün yazdığınızdan emin olun");

// const say1 = +prompt("1. sayiyi giriniz");
// const say2 = +prompt("2. sayiyi giriniz");
// const say3 = +prompt("3. sayiyi giriniz");
// let carpma;
// let toplama;
// if (say1 == say2 || say2 == say3 || say1 == say3) {
//   alert("Sayilari farkli giriniz");
// } else {
//   carpma = say1 * say2 * say3;
//   toplama = say1 + say2 + say3;
//   if (say1 > say2 && say1 > say3) {
//     console.log(`Sayi ${say1} büyüktür`);
//   } else if (say2 > say3 && say2 > say1) {
//     console.log(`Sayi ${say2} büyüktür`);
//   } else {
//     console.log(`Sayi ${say3} büyüktür`);
//   }
//   if (say1 < say2 && say1 < say3) {
//     console.log(`Sayi ${say1} küçüktür`);
//   } else if (say2 < say3 && say2 < say1) {
//     console.log(`Sayi ${say2} küçüktür`);
//   } else {
//     console.log(`Sayi ${say3} küçüktür`);
//   }
// }
// console.log(carpma, toplama);


// const sayi=+prompt("Lutfen sayi giriniz")

// const sayiDurum =
//   sayi % 2 == 0
//     ? `Girilen ${sayi} sayisi Çifttir`
//     : `Girilen ${sayi} sayisi Tektir`;
// alert(sayiDurum)
const sicaklik=+prompt("Sıcaklık birim miktarını giriniz")
const scinsi=prompt("Sıcaklık birimini giriniz F/C")
let olcu;

if (scinsi=="F") {
 olcu=sicaklik/2.64
} else if (scinsi=="C") {
 olcu=sicaklik*2.12
} else {
 alert("sicaklik birimini seciniz")
} alert(olcu)