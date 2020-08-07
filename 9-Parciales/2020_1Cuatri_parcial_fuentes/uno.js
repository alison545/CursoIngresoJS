/*Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
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
	var cantidadAlcoholBarato=0;
	var fabricanteAlcoholBarato=0;

	var contadorAlcohol=0;
	var contadorBarbijo=0;
	var contadorJabon=0;
	var tipoMasUnidades;

	var acumuladorBarbijo=0;
	var acumuladorJabon=0;
	var acumuladorAlcohol=0;
	var promedio;

	precioBaratoAlcohol =0;

	while(unidades < 3)
	{
		//tomo datos y valido.
		tipo = prompt("Ingresar tipos de productos.");
		while (tipo != "Jabon" && tipo !="Barbijo" && tipo != "Alcohol")
		{
			tipo = prompt("Reingresar tipos de productos.");
		}

		precio= prompt("Ingresar precio entre 100 y 300 ");
		precio=parseInt(precio);
		while (precio <100 || precio >300 )
		{
			precio= prompt("Reingresar precio entre 100 y 300 ");
			precio=parseInt(precio);
		}
		
		cantidadUnidades = prompt("Ingresar la cantidad de Unidades, entre 1 y 1000");
		while (cantidadUnidades <1 || cantidadUnidades >1000)
		{
			cantidadUnidades = prompt("Reingresar la cantidad de Unidades");
		}

		marca=prompt("Ingresar la marca");
		/*while(!isNaN(marca))
		{
			marca=prompt("Ingresar la marca");
		}*/

		fabricante=prompt("Ingresar el fabricante");
		/*
		while(!isNaN(fabricante))
		{
			fabricante=prompt("Ingresar el fabricante");
		}*/

		unidades++;
		
		if(tipo == "Alcohol")
		{
			if(banderaAlcohol == "es el primer alcohol")//cambiar banderas por 1 y 0.
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

		switch(tipo)
		{
			case "Alcohol":
				acumuladorAlcohol= cantidadUnidades + acumuladorAlcohol;
				contadorAlcohol++;
				break;
			case "Barbijo":
				acumuladorBarbijo= cantidadUnidades + acumuladorBarbijo;
				contadorBarbijo++;	
				break;
			case "Jabon":
				acumuladorJabon =cantidadUnidades+acumuladorJabon;
				contadorJabon++;
				break;
		}

		if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
		{
			tipoMasUnidades ="Alcohol";
			promedio = acumuladorAlcohol%contadorAlcohol;
		}
		else{
				if(acumuladorBarbijo>acumuladorAlcohol && acumuladorBarbijo>acumuladorJabon)
				{
					tipoMasUnidades="Barbijo";
					promedio=acumuladorBarbijo%contadorBarbijo;
				}
				else
				{
					if(acumuladorJabon>acumuladorAlcohol&& acumuladorJabon>acumuladorBarbijo)
					{
					tipoMasUnidades="Jabon";
					promedio=acumuladorJabon%contadorJabon;
					}
				}
			}



	}//fin del while

	// mostrar
	document.write("Alcohol mas barato vale $" +precioBaratoAlcohol+ " la cantidad es " +cantidadAlcoholBarato+ " el fabricante " +fabricanteAlcoholBarato+ "<br>");
	document.write ("El tipo con mas unidades es " +tipoMasUnidades+ " y el promedio " +promedio+ "<br>");
	document.write("La cantida de unidades de jabon es " +acumuladorJabon);

/*jabon 100, $ 120
Barbijo 200 $200
barbijo 32 $123
*/
}
