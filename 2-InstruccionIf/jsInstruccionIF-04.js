/* Morel Alison 

Al ingresar una edad debemos informar si la persona es 
adolescente, edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	//tomo la edad  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 18)
	{
	  if(edad>12)
	  {
        alert("Adolescente");
	  }
	}


	/*el 4
function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	//test 15 , 12 , 18 ,2, 33
	if(edad<18)
	{
		if(edad>12)
		{
			alert("adolescente");
		}
	}

	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}

	// error forzado
	if(edad<18 || edad>12)// todos entra siempre
	{
		alert("adolescente");
	}
	
}//FIN DE LA FUNCIÓN*/

	
}//FIN DE LA FUNCIÓN