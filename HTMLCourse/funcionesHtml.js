function getElementById(id){
    return document.getElementById(id);
}

function getText(element){
    return element.innnerText ;
}
function getTextId(id){
    return getElementById(id).innerText ;
}

function  showText(id){
    var element = getElementById(id);
    var text = getText(element);
    alert(text);
}
function setText(id, text){
    let element = getElementById(id);
    element,innnerText = text;
}
function  showValue(element){
    var text = getText(element);
    alert("si"+text);
}

function mostrarResultado(resultado){
    console.log("ENTRÉ");
    alert(resultado)
}
function hacermagia(a,b){
    let resultado = sumar(a, b);
    mostrarResultado("Entré a magia"+resultado);
}