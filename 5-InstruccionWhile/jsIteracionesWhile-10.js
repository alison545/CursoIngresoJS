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
9-Diferencia entre positivos y negativos, (positvos-negativos). 
Morel Alison*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;//seria el acumulador
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadNumerosPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferenciaPositivosNegativos;

	diferenciaPositivosNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresar numeros");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==0)
		{
			cantidadCeros++;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos= sumaNegativos + numeroIngresado;
				cantidadNegativos = cantidadNegativos+1; //cantidadNegativos++
			}
			else
			{
				sumaPositivos= sumaPositivos + numeroIngresado;
				cantidadPositivos = cantidadPositivos+1; //cantidadPositivos++
			}
		}
		respuesta=prompt("desea continuar?");
	}//fin del while

	if((numeroIngresado%2)==0)
	{
		cantidadNumerosPares++;
	}

	promedioPositivos = sumaPositivos/cantidadPositivos;
	promedioNegativos = sumaNegativos/cantidadNegativos;
	diferenciaPositivosNegativos = sumaPositivos - (sumaNegativos);

	document.write("la suma de negativos es :"+sumaNegativos+ "<br>");
	document.write("la suma de positivos da :" +sumaPositivos+ "<br>");
	document.write("la cantidad de numero positivos es: " +cantidadPositivos+ "<br>");
	document.write("la cantidad de numero negativos es: " +cantidadNegativos+ "<br>");
	document.write("la cantidad de ceros es :" +cantidadCeros+ "<br>");
	document.write("el promedio de positivos es :" +promedioPositivos+ "<br>");
	document.write("el promedio de negativos es :" +promedioNegativos+ "<br>");
	document.write("La diferencia entre positivos y negativos es :" +diferenciaPositivosNegativos);

}//FIN DE LA FUNCIÓN