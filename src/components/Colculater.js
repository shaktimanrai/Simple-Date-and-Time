

function Add(a,b) {
  
  let Sum=a+b;
  return Sum; 
  
}

function Sub(a,b){

    let Sub= a - b;
    return Sub;

}

function Mult(a,b){

    let Mult=a*b;
    // Mult = Mult.toFixed(2);
    // Mult= Mult.toPrecision(3);
    return Mult;

}

function Div(a,b){

    let Div =a / b;
    // Div = Div.toFixed(2);
    // Div= Div.toPrecision(3);
    return Div;

}

export {Add, Sub, Mult, Div};