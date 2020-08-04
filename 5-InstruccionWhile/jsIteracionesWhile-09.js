/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado. Morel Alison*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresar numeros");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero =="es el primero")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero ="Ya no es el primero";
		}
		else /*la condicion de bandera tiene que estar sujeto a un if porque la primera entrada no tengo que evaluar si el numero 
		anterior es mayor o menor al numero max o min porque es la primera entrada. A la segunda si.*/
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}


	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}//FIN DE LA FUNCIÓN