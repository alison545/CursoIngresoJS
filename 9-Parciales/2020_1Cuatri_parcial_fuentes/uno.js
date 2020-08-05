
function mostrar()
{
	
	var tipo;
	var unidades=0;
	var precio;
	var cantidadUnidades=0;
	var marca;
	var fabricante;
	var banderaAlcohol ="es el primer alcohol";
	var precioBaratoAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;

	precioBaratoAlcohol =0;

	while(unidades < 2)
	{
		//tomo datos y valido.
		tipo = prompt("Ingresar tipos de productos.");
		while (tipo != "Jabon" && tipo !="Barbijo" && tipo != "Alcohol")
		{
			tipo = prompt("Ingresar tipos de productos.");
		}

		precio= prompt("Ingresar precio entre 100 y 300 ");
		precio=parseInt(precio);
		while (precio <100 || precio >300 )
		{
			precio= prompt("Ingresar precio entre 100 y 300 ");
			precio=parseInt(precio);
		}
		
		cantidadUnidades = prompt("Ingresar la cantidad de Unidades");
		while (cantidadUnidades <1 || cantidadUnidades >1000)
		{
			cantidadUnidades = prompt("Ingresar la cantidad de Unidades");
		}

		marca=prompt("Ingresar la marca");
		while(!isNaN(marca))
		{
			marca=prompt("Ingresar la marca");
		}

		fabricante=prompt("Ingresar el fabricante");
		while(!isNaN(fabricante))
		{
			fabricante=prompt("Ingresar el fabricante");
		}

		unidades++;
		
		if(tipo == "Alcohol")
		{
			if(banderaAlcohol == "es el primer alcohol")
			{
				precioBaratoAlcohol=precio;
				cantidadAlcoholBarato = cantidadUnidades;
				fabricanteAlcoholBarato = fabricante;
				banderaAlcohol = "Ya no es el primero";
			}
			else
			{
				if(precio < precioBaratoAlcohol)
				{
					precioBaratoAlcohol = precio;
					cantidadAlcoholBarato =cantidadUnidades;
					fabricanteAlcoholBarato = fabricante;
				}
			}
		}	

	
		

	}//fin del while
		//procesos

		

	// mostrar
	document.write("Alcohol mas barato vale $" +precioBaratoAlcohol+ " la cantidad es " +cantidadAlcoholBarato+ " el fabricante " +fabricanteAlcoholBarato+ "<br>");
	document.write ("El tipo con mas unidades es ");

}
