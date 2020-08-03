/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;//seria el acumulador
	var sumaPositivos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresar numeros");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos= sumaNegativos + numeroIngresado;
		}
		else
		{
			sumaPositivos= sumaPositivos + numeroIngresado;
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos+ "<br>");
	document.write("la suma de positivos da :" +sumaPositivos);
}//FIN DE LA FUNCIÓN