function mostrar()
{
	/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.*/
//Morel Alison.
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		default:
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN