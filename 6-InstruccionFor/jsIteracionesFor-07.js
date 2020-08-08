function mostrar()
{

	var numero;
	var i;
	//var numerodivisor;
	var contadorNumerosDivisores;

	contadorNumerosDivisores=0;
	numero= prompt("Ingresar numero");
	numero=parseInt(numero);
	
	
	for(i=1; i<numero; i++)
	{
		if((numero%i)==0)
		{
			contadorNumerosDivisores++;
			document.write("Es divisible por " +i+ "<br>");
		}
	}

	document.write("Y la cantidad de numeros divisores son " +contadorNumerosDivisores);

}//FIN DE LA FUNCIÓN