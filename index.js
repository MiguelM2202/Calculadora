const medida = "cm"
//cuadrado
function cuadradoPerimetro(a) {
    return a * 4;
}
function calcularPerimetro() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultado = cuadradoPerimetro(value)+medida;
    const etiquetaP = document.getElementById("resultado");
    etiquetaP.innerText = `Su resultado es: ${resultado}`;
    if (!value) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    }
}
function cuadradoArea(a) {
    return a ** 2
}
function calcularArea() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultado = cuadradoArea(value)+medida;
    const etiquetaP = document.getElementById("resultado");
    etiquetaP.innerText = `Su resultado es ${resultado}`;
    if (!value) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    }
}
//circulo
function diametro(a) {
    return a*2;
}
function Circunferencia(a) {
    const pi = Math.PI;
    const perimetro = 2*pi*a;
    return perimetro;
}
function circuloArea(a) {
    const pi = Math.PI;
    return pi*(a**2)
}
function calcularDiametro() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultado = diametro(value)+medida;
    const etiquetaP = document.getElementById("resultado1");
    etiquetaP.innerText = `Su resultado es ${resultado}`;
    if (!value) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    }
}
function calcularCircunferencia() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultado = Circunferencia(value)+medida;
    const etiquetaP = document.getElementById("resultado1");
    etiquetaP.innerText = `Su resultado es ${resultado}`;
    if (!value) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    }
}
function calcularCirculoArea() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultado = circuloArea(value)+medida;
    const etiquetaP = document.getElementById("resultado1");
    etiquetaP.innerText = `Su resultado es ${resultado}`;
    if (!value) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    } 
}
//triangulo
function trianguloPerimetro(a, b, c) {
    const resultado = a + b + c;
    return resultado;
}
function trianguloArea(a, b) {
    return a * b / 2;
}
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const resultado = trianguloPerimetro(value1, value2, value3)+medida;
    const sumaDeLados = (value1 + value2 + value3) / 3;
    const etiquetaP = document.getElementById("resultado2");
    if (!value1 || !value2 || !value3) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        if (sumaDeLados == value1) {
            const etiquetaP = document.getElementById("resultado2");
            etiquetaP.innerText = `Su resultado es ${resultado} y es un triangulo equilatero`;
        }else if (value1 == value2){
            const etiquetaP = document.getElementById("resultado2");
            etiquetaP.innerText = `Su resultado es ${resultado} y es un triangulo isosceles`;
        }else{
            const etiquetaP = document.getElementById("resultado2");
            etiquetaP.innerText = `Su resultado es ${resultado} y es un triangulo escaleno`;
        }
    }

}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("base2");
    const input2 = document.getElementById("altura");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const resultado = trianguloArea(value1, value2)+medida;
    const etiquetaP = document.getElementById("resultado3");
    etiquetaP.innerText = `Su resultado es ${resultado}`;
    if (!value1 || !value2) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    }
}
function precioTotal(a , b) {
    const descuento = 100 - b
    const resultado = (a * descuento) / 100
    return resultado
}
function calcularPrecio() {
    const input1 = document.getElementById("precio");
    const input2 = document.getElementById("descuento");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const resultado = precioTotal(value1, value2);
    const etiquetaP = document.getElementById("resultado4")
    if (!value1 || !value2) {
        etiquetaP.innerText = `Por favor ingrese los valores`;
    }else{
        etiquetaP.innerText = `su precio aplicando el ${value2}% es ${resultado}$`;
    }
}
function bs(a, b) {
    return a / b
}
function calculePrecio() {
    const input1 = document.getElementById("bs");
    const input2 = document.getElementById("tazaDeCambio");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const resultado = bs(value1, value2);
    const etiquetaP = document.getElementById("resultado5");
    etiquetaP.innerText = `tiene ${resultado}$`;
}
function dolares(a , b) {
    return a * b
}
function calculePrecioA() {
    const input1 = document.getElementById("dolares");
    const input2 = document.getElementById("tazaDeCambio");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const resultado = dolares(value1, value2);
    const etiquetaP = document.getElementById("resultado6")
    etiquetaP.innerText = `tiene ${resultado}bs`;
}