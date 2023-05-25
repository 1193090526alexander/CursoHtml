const idTdPantalla =  "tdPantalla"

function  controlarEvento(element){
    let text = getText(element);
    if(isDigit(text)){
        setNumber(text)
    }else if(isDot){
        setDot();
    }
}
function setNumber(digit){
setText(idTdPantalla, getTextId(idTdPantalla) + text);
}
function setDot (){
    setText(idTdPantalla, getTextId(idTdPantalla) + ".");
}