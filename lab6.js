function multiplicar(){
    let num1= document.getElementById('pal1').value;
    let num2=document.getElementById('pal2').value;
    let resultado1 = Number(num1)*Number(num2)
    document.getElementById('resultado1').textContent = 'El resultado es: ' + resultado1;
}

function dividir(){
    let num1= document.getElementById('pal1').value;
    let num2=document.getElementById('pal2').value;
    let resultado1 = Number(num1)/Number(num2)
    document.getElementById('resultado1').textContent = 'El resultado es: ' + resultado1;
}

function suma(){
    let num1= document.getElementById('pal1').value;
    let num2=document.getElementById('pal2').value;
    let resultado1 = Number(num1)+Number(num2)
    document.getElementById('resultado1').textContent = 'El resultado es: ' + resultado1;
}
function resta(){
    let num1= document.getElementById('pal1').value;
    let num2=document.getElementById('pal2').value;
    let resultado1 = Number(num1)-Number(num2)
    document.getElementById('resultado1').textContent = 'El resultado es: ' + resultado1;
}

function sumar(){
    let num1= document.getElementById('campo1').value;
    let num2=document.getElementById('campo2').value;
    let resultado = Number(num1)+Number(num2)
    document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
}
