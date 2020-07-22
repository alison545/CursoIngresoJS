/* Morel Alison.
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen 
y mostrar: "EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	//var mensaje;
	numeroAleatorio = Math.floor(Math.random() * 10) + 1;

	if(numeroAleatorio > 8 )
	{
      mensaje="EXCELENTE ";
	}
	else
	{
		if(numeroAleatorio >= 4)
		{
			mensaje ="APROBO ";
		}
		else
		{
			mensaje="Vamos, la proxima se puede ";
		}
	}
alert(mensaje);
	
}//FIN DE LA FUNCIÓN