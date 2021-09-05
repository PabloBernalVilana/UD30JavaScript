'use strict';
let valores = [true, 5, false, "hola", "adiós", 2];

if (valores[3].length > valores[4].length) {
    console.log("1. (" + valores[3] + " tiene mas carácteres que " + valores[4] + ")");

} else {
    console.log("1. (" + valores[4] + " tiene mas carácteres que " + valores[3] + ")");
    
}

if (valores[1] > valores[5]) {
    console.log("2. (" + valores[1] + " > " + valores[5] + " = " + valores[0] + ")");
} else {
    console.log("2. (" + valores[1] + " > " + valores[5] + " = " + valores[3] + ")");
}
if (valores[1] == valores[5]) {
    console.log("2. (" + valores[1] + " = " + valores[5] + " : " + valores[0] + ")");
} else {
    console.log("2. (" + valores[1] + " = " + valores[5] + " : " + valores[2] + ")");
}

console.log(" 3. (" + valores[1] + " + " +  valores[5] + " = " + (valores[1] + valores[5] + ")\n"),
            "3. (" + valores[1] + " - " +  valores[5] + " = " + (valores[1] - valores[5] + ")\n"),
            "3. (" + valores[1] + " * " +  valores[5] + " = " + (valores[1] * valores[5] + ")\n"),
            "3. (" + valores[1] + " / " +  valores[5] + " = " + (valores[1] / valores[5] + ")\n"),
            "3. (" + valores[1] + " ^ " +  valores[5] + " = " + (valores[1] ** valores[5] + ")"));







