let username = "hokka";

let adress = "google.com";

let bilgi = username + "@" + adress;

console.log(bilgi);

let info = `Merhaba ${username}  URL adresi ${adress} 
olan site emrinde
 mail adresinin uzunluğu : ${bilgi.length}
 site ücretiniz ${500} TL
 ${new Date().getUTCDate} tarihine kar ödeyiniz`;

console.log(info);
