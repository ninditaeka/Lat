var myName = "Nindita Eka Setyahandani";
console.log(myName);
var age = 18;
console.log(myName, age);
var hobbies = ["GTA V", "CS 1.6", "genshin impact"];
console.log(hobbies);
var person = {
    name: "Nindita",
    title: "Programmer",
    age: 17
};
console.log(person);
console.log(myName.split("")); //pisah per abjad
console.log(myName.split(' ')); //pisah spasi
console.log(myName.split("a")); //pisah dan dihilamgkan berdasarkan huruf i
console.log("Nindita\nEka\nSetyahandani \n".concat(myName, "  \n"));
console.log(typeof age);
console.log(typeof age.toString());
var myNumber = -12.34;
console.log(myNumber.toFixed());
console.log(parseFloat("123"));
console.log(Number.MAX_VALUE); //number adalah class yang punya properties
console.log(Number.MIN_VALUE); //kelas di javascript disebut function
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY < -56464645747456464);
console.log(person.name);
console.log(Number); // Number adalah kelas dan function
//kelas di javascrip yaitu string, number dll
console.log(String(34.5));
console.log(typeof String(true));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("abc"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// truthy falsy 
console.log(myNumber + 90);
console.log(90 + "ab");
console.log("ab" + 90);
var myDate = new Date();
console.log(new Date()); // date adalah kelas, new adalah object 
console.log(new Date(365 * 24 * 60 * 60 * 1000));
console.log(new Date("2024/10/28"));
console.log(new Date("2024/10/28 16:05:00"));
console.log(new Date("2024-10-28"));
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myNumber * 12);
console.log(Math.pow(myNumber, 6));
var num = -12;
var res = num;
res += 10;
res += 5;
console.log(res);
myNumber = 100;
myNumber += 50; // myNumber  = myNumber +50
myNumber += 60;
myNumber *= 2; //myNumber = myNumber * 2
myNumber *= 3;
console.log(myNumber);
console.log(myNumber++); // 1260/1261
console.log(myNumber);
console.log(++myNumber);
//x=5 unary
//y-x= mereka adalah binary karena sblm = ada 2 variabel
//comparison operator hasilnya selalu boolean
var num2 = 45;
var num3 = 78;
var num4 = "78";
console.log("------------------------");
console.log(num2 == num3); //false
console.log(num2 <= num3);
console.log(num3 < num2);
console.log(num3 > num2);
console.log(num3 >= num2);
console.log(num3 == num4);
console.log(num3 === num4);
//== ngecek sampai type data
