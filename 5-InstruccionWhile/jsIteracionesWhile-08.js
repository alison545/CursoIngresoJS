/*
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
	respuesta=true;

	while(respuesta == true)
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
		else
		{
			sumaPositivos = sumaPositivos+ numeroIngresado;	
		}
		respuesta= confirm("desea ingresar mas?");
	}

	if(multiplicacionNegativos == 1)
	{
		multiplicacionNegativos = "No se ingresaro num negativos";
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN