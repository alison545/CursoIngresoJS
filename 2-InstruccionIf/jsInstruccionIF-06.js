function mostrar()
{
	//tomo la edad 
	var edad;
	edad= txtIdEdad.value;
	edad=parseInt(edad);

	/* lo hice yo 
	if(edad >18 )
	{
		alert("Mayor");
	}
	else
	{
		if(edad > 13 && edad<17)
		{
		alert("Adolescente");
		}
		else{
			alert("Es un niño")
		}
	}*/

	/*if(edad >17 )
	{
		alert("Mayor");
	}
	else
	{
		if(edad > 12)
		{
		alert("Adolescente");
		}
		else{
			alert("Es un niño")
		}
	}*/
 
	
	if(edad <12 )
	{
		alert("niño");
	} else
	{
		if (edad <18)
		{
			alert("adolescente");
		}
		else{

			alert("mayor");
		}
	}

}//FIN DE LA FUNCIÓN