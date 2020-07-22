function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad = txtIdEdad.value;
	edad=parseInt(edad);
	//testear 5 veces y funciona. 

	if(!(edad<18 && edad>12))
	{
       alert("no es adolescente");
	}

	if(edad>17 || edad<13)
	{
		alert("no es adolescente");
	}

	/*
	//error forzado
	if(edad<18 || edad>12) // incluye a todos los numeros, esta mal 
	{
		alert("adle");
	}*/

	/*if(edad>17 && edad<13) //ninguno, no entra nunca
	{
		alert("no es adolescente");
	}

	Cuando la instruccion es mas compleja, hay que saber de donde venimos 
	para saber a donde vamos*/

	/*el 5
function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<18 && edad>12)
	{
		
	}else
	{
		alert("no es adolescente");
	}

	if(!(edad<18 && edad>12))
	{
		alert("no es adolescente");
	}

	if(edad>17 || edad<13))
	{
		alert("no es adolescente");
	}

	if(edad>17) 
	{
		alert("no es adolescente");
	}
	if(edad<13) 
	{
		alert("no es adolescente");
	}

	//error forzado
	if(edad>17  && edad<13))// ninguno , no entra nunca
	{
		alert("no es adolescente");
	}

}//FIN DE LA FUNCIÓN */

}//FIN DE LA FUNCIÓN