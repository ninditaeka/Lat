var a = "a";
a = a + "b";
console.log(a);
a += "c";
a += "d";
a += "ef";
a += "gh";
console.log(a);
console.log(a[3]);
var input = 3;
var result = "";
for (var i = 1; i <= input; i++) {
    result += "*";
    console.log(result);
}
console.log("------------------");
for (var j = 1; j <= input; j++) {
    result = "*";
    console.log(result);
}
console.log("------------------");
//buat piramida
//     * 0
//    **
//   ***
//  ****
// *****
// let spasi = (" ")
// for(let k=5; k<=input; k--){
//     for(let l=5; l<=input; k++;){
//         spasi= spasi + ("")
//     }
// console.log(input)
// }
console.log(a);
console.log(a.length);
var res3 = "";
for (var i = 0; i < a.length; i++) {
    console.log(a[i]); //a[2])
    //res3 +=a[i]
}
