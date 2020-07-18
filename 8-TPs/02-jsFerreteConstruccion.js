/*2.	Para el departamento de Construcción:

A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho; 
    var area;
    var alambre; //parsefoat convierte una cadena a un numero con coma 

    largo = parseFloat(largo);
    ancho = parseFloat(ancho); 

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value; 

    area = largo * ancho;
    alambre = area * 3;

    alert("La cantidad de alambre a usar es de " +alambre);

}
function Circulo () 
{

    var numero;
    var radio;
    var pi;
    var resultado;

    numero = txtIdRadio.value;
    numero= parseFloat(numero);
    pi = Math.PI;

    radio = 2 * pi * numero;

    resultado = radio * 3;
    alert("Alambre necesario " +resultado);
	
}
function Materiales () 
{
	
}