/* Morel Alison - ejercicio 08 while.

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		/*if (numeroIngresado >0 ) //varia el proceso, en este ejercicio al hacerlo asi, else evalua todo lo q no toma el if.
		{
			sumaPositivos = sumaPositivos+ numeroIngresado;	
		}
		else
		{
			if(numero<0)
			{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
			}
		}*/

		if (numeroIngresado <0 )
		{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		}
		
		if (numeroIngresado >0)
		{
			sumaPositivos = sumaPositivos+ numeroIngresado;	
		}
		respuesta= prompt("desea ingresar mas?");
	}

	if(multiplicacionNegativos == 1)
	{
		multiplicacionNegativos = "No se ingresaron negativos";
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
//MODIFICAR, EL 0 NO ES POSITIVOOO