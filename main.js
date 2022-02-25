let myStyle=`
color: black;
background:#00CF7;
padding: 10px;
font-size: 20px;
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

console.log(`%crespuesta 1= ${resultados}
respuesta 2= ${resultado}`, myStyle);
console.groupEnd();