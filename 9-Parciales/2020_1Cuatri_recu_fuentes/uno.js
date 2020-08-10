/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
//SI LOS CHABONES TE PIDEN MAX O MIN ES BANDERA.
function mostrar()
{
	var tipo;
	var unidades;//contador
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;

	var banderajabonCaro;
	var fabricanteJabonCaro;
	var acumuladorCantidadJabon;
	var precioJabonCaro;
	var contadorCantidadJabon;

	var acumuladorCantidadBarbijo;
	var contadorCantidadBarbijo;

	var acumuladorCantidadAlcohol;
	var contadorCantidadAlcohol;

	var tipoConMasUnidades;
	var promedio;

	banderajabonCaro="Es el primer Jabon";
	acumuladorCantidadJabon=0;
	acumuladorCantidadBarbijo=0;
	acumuladorCantidadAlcohol=0;
	contadorCantidadAlcohol=0;
	contadorCantidadBarbijo=0;
	contadorCantidadJabon=0;

	unidades=0;

	while(unidades<5)
	{
		tipo = prompt("Ingresar tipos de productos, 'Barbijo' , 'Jabón' o 'Alcohol' ");
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
		
		marca=prompt("Ingresar la marca");
		fabricante=prompt("Ingresar el fabricante");

		unidades++;

		switch(tipo)
		{
			case"Jabon":
				if(banderajabonCaro ="Es el primer Jabon")
				{
					precioJabonCaro=precio;
					acumuladorCantidadJabon += cantidadUnidades; 
					fabricanteJabonCaro=fabricante;
					banderajabonCaro="Ya no es el primer Jabon";
				}
				else
				{
					if(precio>precioJabonCaro)
					{
						precioJabonCaro=precio;
						acumuladorCantidadJabonCaro += cantidadUnidades;
						fabricanteJabonCaro=fabricante;
					}
				}
				contadorCantidadJabon++;
			break;
			case "Barbijo":
				acumuladorCantidadBarbijo += cantidadUnidades;
				contadorCantidadBarbijo++;
				break;
			case "Alcohol":
				acumuladorCantidadAlcohol += cantidadUnidades;
				contadorCantidadAlcohol++;
				break;
		}

		
	}//fin while.

		if(acumuladorCantidadAlcohol>acumuladorCantidadBarbijo && acumuladorCantidadAlcohol>acumuladorCantidadJabon)
			{
				tipoConMasUnidades="Alcohol";
				promedio=acumuladorCantidadAlcohol/contadorCantidadAlcohol;
			}
			else
			{
				if(acumuladorCantidadBarbijo>acumuladorCantidadAlcohol && acumuladorCantidadBarbijo>acumuladorCantidadJabon)
				{
					tipoConMasUnidades="Barbijo";
					promedio=acumuladorCantidadBarbijo/contadorCantidadBarbijo;
				}
				else
					{
						if(acumuladorCantidadJabon>acumuladorCantidadAlcohol && acumuladorCantidadJabon>acumuladorCantidadBarbijo)
						{
							tipoConMasUnidades="Jabon";
							promedio=acumuladorCantidadJabon/contadorCantidadJabon;
						}
					}
				}

	document.write("Del más caro de los jabones, la cantidad de unidades es "+acumuladorCantidadJabon+ " y el fabricante es: " +fabricanteJabonCaro+ "<br>");
	document.write("Del tipo de producto con más unidades en total de la compra: " +tipoConMasUnidades+ " el promedio por compra " +promedio+ "<br>");
	document.write("Las unidades de Barbijos que se compraron en total " +acumuladorCantidadBarbijo);
}
