let myStyle=`
color: black;
background:#00CF7;
padding: 8px;
font-size: 15px;
border-radius: 10px;`;

let resultados = 5*((4/4)*(9-7)*2)+6;

// 5*((1)*(2)*2)+6;
// 5*(1*2*2)+6;
// 5*(4)+6;
// 20+6;
// 26;

let resultado = 5+1*8+(9*(5+8)/2);

// 5+1*8+(9*(13)/2);
// 5+1*8+(9*13/2);
// 5+1*8+(58.5);
// 5+8+58.5;
// 71.5

let x = 5*(2*2)-(6/2);
// 5*(4)-(3);
// 5*4-3
// 20-3
// 17

let y = (5/5*(3+9)-(5%3)*2);
// (5/5*(12)-(2)*2);
// (5/5*12-2*2);
// (1*12-4);
// (12-4);
// 8
let respuesta3 = x==y;
// x == y;
// 17=| 8
// false 


let z = 5*2;
// 10;

let w = (5/5-(3+9) -(5%3)*2);
// (5/5*(12)-(2)*2);
// (5/5-12-2*2);
// (1-12-4);
// (-11-4);
// -15

let respuesta4 = z=!w;


console.log(`%crespuesta 1= ${resultados}
respuesta 2= ${resultado}
x= ${x}
y= ${y}
respuesta x==y ${respuesta3}
z= ${z}
w= ${w}
respuesta z=!w ${respuesta4}`, myStyle);
console.groupEnd();