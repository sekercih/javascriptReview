let firstname = "hokka";
const lastName = "meat";
const email = "hokkameat@gmail.com";

const info = `isim : ${firstname} soyisim : ${lastName}
 email adresi : ${email} olan kisinin ismini ${firstname} olarak değiştir`;

console.log(info);
console.log(email.length);
console.log(firstname.charAt(0));

firstname = firstname.toUpperCase();
console.log(firstname);
firstname = firstname.toLowerCase();
console.log(firstname);
let searchChar = "a";
let finders = firstname.search(searchChar);
console.log(finders);

let belirlialan = email.slice(10);
console.log(belirlialan);

let belirlialan1 = email.slice(0, 10);
console.log(belirlialan1);

let emailChange = email.replace("gmail.com", "yahoo.com");

console.log(emailChange);

console.log(emailChange.includes("yaho"))

let degis=email.charAt(0).toUpperCase();
console.log(degis)

let fullName=`${firstname[0].toUpperCase()}${firstname.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)} `

console.log(fullName)