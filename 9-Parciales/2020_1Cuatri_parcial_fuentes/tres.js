/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", 
"casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var banderaTemperatura = 1;
	var personaMasTemperatura;
	var nombreMasTemperatura;
	var respuesta="si";
	var contadorViudosMayores=0;
	var contadorSolteros=0;
	var contadorViudos=0;

	/*Traten de probar armarse una lista con los testeo posible que
	 pasa si no ingresan nada si ingresan varios o solo 1 y si funciona con todos.... Xelente*/

	while(respuesta =="si")
	{
		nombre=prompt("Ingresar nombre");
		
		edad= prompt("Ingresar edad");
		edad=parseInt(edad);
		while(edad < 1 || isNaN(edad))
		{
			edad= prompt("Reingresar edad");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingresar sexo, 'f' o 'm' ");
		while(sexo != "f" && sexo !="m")
		{
			sexo=prompt("Reingresar sexo, 'f' o 'm' ");
		}

		estadoCivil=prompt("Ingresar estado civil, 'soltero', 'casado' o 'viudo'.");
		while(estadoCivil !="soltero" && estadoCivil !="casado" && estadoCivil !="viudo")
		{
			estadoCivil=prompt("Ingresar estado civil, 'soltero', 'casado' o 'viudo'.");
		}

		temperatura = prompt("Ingresar temperatura corporal");
		temperatura=parseInt(temperatura);
		while(temperatura<0 || isNaN(temperatura))
		{
			temperatura = prompt("Ingresar temperatura corporal");
			temperatura=parseInt(temperatura);
		}

		if(banderaTemperatura == 1)
		{
			personaMasTemperatura = temperatura;
			nombreMasTemperatura =nombre;
			banderaTemperatura = 0;
		}
		else 
		{
			if(personaMasTemperatura < temperatura)
			{
				personaMasTemperatura = temperatura;
				nombreMasTemperatura=nombre;
			}
		}

		/*b) Cuantos mayores de edad estan viudos.
		c) La cantidad de hombres que hay solteros o viudos.*/
		//no hay switch porque en casado no me pide nada y no se bien si siempre hay que poner default si o si o puede ir sin el.
		if( edad>17 && estadoCivil == "viudo")
		{
			contadorViudosMayores++;
		}

		if(sexo == "m" && estadoCivil=="viudo")
		{
			contadorViudos++;
		}
			else
			{
				if(sexo == "m" && estadoCivil=="soltero")
				{
					contadorSolteros++;//me falto agregarle el +1;
				}
			}

		/*switch(estadoCivil)
		{
			case "soltero":
				contadorSolteros++;
				break;
			case "viudo":
				if(edad > 60)
				{
					contadorViudosMayores++;
				}
				contadorViudos++;
				break;
			default:
				alert("Es casado");
				break;
		}*/




		respuesta=prompt("Ingresar mas datos, si/no");
	}//fin while

	

	document.write("El nombre de la persona con mas temperatura es: " +nombreMasTemperatura+ "<br>");
	document.write("Los mayores de edad que estan viudos son: " +contadorViudosMayores+ "<br>");
	document.write("La cantidad de hombres solteros " +contadorSolteros+ " y la cantidad de hombres viudos " +contadorViudos+ "<br>");


}
