
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function decode(beeps,boops) {
    console.log(alpha[beeps + boops - 1]);
}

decode(2,6);
decode(0,5);
decode(9,3);
decode(4,8);
decode(10,5);
console.log(" ");
decode(11,12);
decode(10,5);
decode(1,17);
decode(5,7);
decode(4,0);
