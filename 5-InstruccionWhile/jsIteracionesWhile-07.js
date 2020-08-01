/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	contador=0;// contar para saber por cuanto divir y contar las iteracciones.
	acumulador=0;
	respuesta=true; //inicializamos para que la primera condicion donde respuesta == true se cumpla y se ejecute el while.
	// para preguntar si se quiere ingresar mas numeros, la inicailizamos con si.

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador++;

		respuesta= confirm("¿Dese ingresar otro numero?");

	}

	promedio = acumulador / contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN