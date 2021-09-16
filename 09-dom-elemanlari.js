let h2 = document.getElementById("title");

console.log((h2.innerHTML = "Deneme"));

let link = document.querySelector("ul");

console.log(link);

const dil = null;

const sayi1 = 1;
const sayi2 = "1";
console.log(sayi1 + sayi2);

const ad = "Mehmet";
const yas = 25;
console.log(`Benim adim: ${ad} yaşım ${yas}`);

const dogum = 1991;
const yil = 2021;
const yas1 = yil - dogum;
console.log(yas1);

console.log(`Yaş ${yil - dogum}`);

const number = 123;

const birler = number % 10;
console.log(`birler basamağı ${birler}`);
const onlar = Math.floor((number / 10) % 10);
console.log(`Onlar basamağı ${onlar}`);
const yuzler = Math.floor(number / 100);
console.log(`Yuzler basamağı ${yuzler}`);

const t1 = 10;
const t2 = "10";
console.log(t1 == 10);
console.log(t1 == "10");
console.log(t1 === 10);
console.log(t1 === "10");

// console.log(typeof t1, typeof t2);
// console.log(t1 == t2);
// console.log(t1 === t2);
// console.log(t1 !== t2);

// console.log(t1>"8");

console.log(true && null);
console.log(true || null);

console.log(undefined && null && false);

// **

//const para =+ prompt("Lutfen Miktarı giriniz");
// const para =Number(prompt("Lutfen Miktarı giriniz"));
// ali

// const name1 = prompt("Lütfen isim giriniz");
// const age = prompt("Lütfen yaşı giriniz");

// const adult =
//   age > 18 ? `${name1} Ehliyet alabilir` : `${name1} Ehliyet alamaz`;
// alert(adult);

// console.log(adult);

const yaz = "Javascript";
console.log(Number(yaz));

const deneme = 21;

console.log(typeof String(deneme), typeof deneme);

console.log(Boolean(yaz));

// const num1 = +prompt("Birinci sayi");
// const islem = prompt("islem giriniz");
// const num2 = +prompt("ikinci sayi");
// let sonuc = 0;

// if (islem === "+") {
//   alert((sonuc = num1 + num2));
// } else if (islem === "-") {
//   alert((sonuc = num1 - num2));
// } else if (islem === "*") {
//   alert((sonuc = num1 * num2));
// } else if (islem === "/") {
//   alert((sonuc = num1 / num2));
// } else {
//   alert("Yanlış işlem yaptınız");
// }

// console.log(`${num1}  ${islem} ${num2} = ${sonuc}`);

// const yasin = prompt("lütfen yaşinizi girin");
// const saglik = prompt("sağlıklımısınız E/H");

// let durum = yasin > 18 && saglik == "E" ? "askere gider" : "askere gidemez";

// alert(durum);

// const gun = prompt("Günlerden birini sayisini giriniz");
// let gunAdi;

// switch (gun) {
//   case "1":
//     gunAdi = "Pazartesi";
//     break;
//   case "2":
//     gunAdi = "sali";
//     break;
//   case "3":
//     gunAdi = "çarşamba";
//     break;
//   case "4":
//     gunAdi = "perşembe";
//     break;

//   case "5":
//     gunAdi = "cuma";
//     break;

//   case "6":
//     gunAdi = "cumartesi";
//     break;

//   case "7":
//     gunAdi = "Pazar";
//     break;

//   default:
//     alert("1-7 arasında değer giriniz");
//     break;
// }

// alert(gunAdi);

// const maas = prompt("Maaşınızı giriniz");
// const csure = prompt("Çalışma sürenizi girini");
// const zamli = csure > 10 ? maas * 1.5 :( csure > 5 ? maas * 1.2 : maas * 1.1);
// alert(zamli)

const maas=5000;
const borc=0;

const kredi=!borc?"kredi alabilir 😍":"kredi alamaz😒"

alert(kredi)
