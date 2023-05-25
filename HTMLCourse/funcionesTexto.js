let regularExpreDigit = /^\d$/;
let regularExpreDot = /^[.]$/;


function matchPattern(rE, value){
    return rE.match(value);
}
function isDigit(value){
    return matchPattern(regularExpreDigit, value);
}
function isDot(value){
    return matchPattern(regularExpreDot, value);
}