function mostrar()
{
/*Enunciado:
	al presionar el botón pedir un número.
	 Informar si el numero es PRIMO o no.*/

	var numero;
	var i;
	var contador;

	numero=prompt("Ingresar numero");
	numero=parseInt(numero);

	/*for(i=1; i<numero; i++)
	{
		if((numero/i)== numero || ((numero/i)== 1)
		{
			document.write("")
		}
	}*/
	
	for(i=1; i<numero; i++)
	{
		if((numero%i)==0)
		{
			contador++;
		}
	}

	if(contador==2)
	{
		document.write("Es primo <br>");
	}
	else
	{
		document.write("No es primo");
	}

}//FIN DE LA FUNCIÓN