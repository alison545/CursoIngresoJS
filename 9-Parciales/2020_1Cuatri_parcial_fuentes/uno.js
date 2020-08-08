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
	var unidades;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var banderaAlcohol ="es el primer alcohol";
	var precioBaratoAlcohol;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
//alcohol
	var acumuladorAlcohol;
	var contadorAlcohol;
//barbijo
	var acumuladorBarbijo;
	var contadorBarbijo;
//jabon
	var acumuladorJabon;
	var contadorJabon;
//promedio
	var tipoMasUnidades;
	var promedio;
//inicializar variables:
	unidades=0;
	cantidadUnidades=0;
	fabricanteAlcoholBarato=0;
	cantidadAlcoholBarato=0;
	acumuladorAlcohol=0;
	precioBaratoAlcohol =0;
	contadorAlcohol=0;
	acumuladorBarbijo=0;
	contadorBarbijo=0;
	acumuladorJabon=0;
	contadorJabon=0;

	while(unidades < 3)//cambiar es 5
	{
		//tomo datos y valido.
		tipo = prompt("Ingresar tipos de productos.");
		while (tipo != "Jabon" && tipo !="Barbijo" && tipo != "Alcohol")
		{
			tipo = prompt("Reingresar tipos de productos.");
		}

		precio= prompt("Ingresar precio entre 100 y 300 ");
		precio=parseInt(precio);
		while (isNaN(precio) || precio <100 || precio >300 )
		{
			precio= prompt("Reingresar precio entre 100 y 300 ");
			precio=parseInt(precio);
		}
		
		cantidadUnidades = prompt("Ingresar la cantidad de Unidades, entre 1 y 1000");
		cantidadUnidades=parseInt(cantidadUnidades);//me habia olvida de parsear la cantidad unidades NO OLVIDAR PARSEAR.
		while (isNaN(cantidadUnidades) || cantidadUnidades <1 || cantidadUnidades >1000)
		{
			cantidadUnidades = prompt("Reingresar la cantidad de Unidades");
		}

		marca =prompt("Ingresar la marca");
		fabricante =prompt("Ingresar el fabricante");
		unidades++;
		
		//proceso-------------------------------------------------------------------------------------------------------------------
		switch(tipo)
		{
			case "Alcohol":
				if(banderaAlcohol == "es el primer alcohol")//cambiar banderas por 1 y 0.
				{
					precioBaratoAlcohol=precio;
					cantidadAlcoholBarato = cantidadUnidades;
					fabricanteAlcoholBarato = fabricante;
					acumuladorAlcohol= acumuladorAlcohol + cantidadUnidades;
					banderaAlcohol = "Ya no es el primero";
				}
				else
				{
					if(precio < precioBaratoAlcohol)
					{
						precioBaratoAlcohol = precio;
						cantidadAlcoholBarato =cantidadUnidades;
						fabricanteAlcoholBarato = fabricante;
						acumuladorAlcohol += cantidadUnidades ;
					}
				}
				contadorAlcohol++;
					break;
			case "Barbijo":
					acumuladorBarbijo += cantidadUnidades;
					contadorBarbijo++;
					break;
			case "Jabon":
					acumuladorJabon += cantidadUnidades;
					contadorJabon++;
					break;
		}

		}//fin del while

		if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
		{
			tipoMasUnidades = "Alcohol";
			promedio = (acumuladorAlcohol/contadorAlcohol);
		}
		else
		{
			if(acumuladorBarbijo>acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon) 
			{
				tipoMasUnidades = "Barbijo";
				promedio= (acumuladorBarbijo/contadorBarbijo);
			}
			else
			{
				if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo)
				{
					tipoMasUnidades = "Jabon";
					promedio = (acumuladorJabon/contadorJabon);
				}
			}
		}
	// mostrar
	document.write("Alcohol mas barato vale $" +precioBaratoAlcohol+ " la cantidad es " +cantidadAlcoholBarato+ " el fabricante " +fabricanteAlcoholBarato+ "<br>");
	document.write ("El tipo con mas unidades es " +tipoMasUnidades+ " y el promedio " +promedio+ "<br>");
	document.write("La cantidad de unidades de jabon es " +acumuladorJabon);
	
}
