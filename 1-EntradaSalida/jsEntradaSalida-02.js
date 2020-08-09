/*
Enunciado:
a)”bandera a full”
de una cantidad de espectadores indeterminada debemos tomar lo siguiente 
datos:
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()*/
function mostrar()
{
	//esta mal usar banderas cuando no lo necesitas.

	var sexo;
	var altura;
	var edad;
//maximos y min NUNCA se inicializan. 
	var banderaAlturaMasAlta="primera altura";
	var alturaMasAlta;
	var nombreAlturaMasAlta;
	var respuesta;

	var banderaMasViejo="primera edad";
	var edadMasVieja;
	var nombreEdadVieja;

	var banderaAdolescente="Primer ingreso de adolescente";
	var edadAdolescente;
	var nombreAdolescente;

	respuesta="si";

	while(respuesta=="si")
	{
		nombre=prompt("Ingresar nombre.");

		sexo= prompt("Ingresar el sexo, 'f' para femenino y 'm' para masculino");
		while(sexo!='f' && sexo != 'm')
		{
			sexo= prompt("Reingresar el sexo, 'f' para femenino y 'm' para masculino");
		}

		altura=prompt("Ingresar altura");
		altura=parseFloat(altura);
		while(isNaN(altura) || altura<1)
		{
			altura=prompt("Reingresar altura");
			altura=parseInt(altura);
		}

		edad=prompt("Ingresar edad");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<1)
		{
			edad=prompt("Reingresar edad");
			edad=parseInt(edad);
		}
		
		if(banderaAlturaMasAlta == "primera altura" && sexo =="f")
		{
			alturaMasAlta = altura;
			nombreAlturaMasAlta=nombre;
			banderaAlturaMasAlta = "Ya no es la primera altura";
		}
		else
		{
			if(altura>alturaMasAlta && sexo=="f")
			{
				alturaMasAlta=altura;
				nombreAlturaMasAlta=nombre;
			}
			
		}

		if(banderaMasViejo =="primera edad" && sexo=="m")
		{
			edadMasVieja=edad;
			nombreEdadVieja=nombre;
			banderaMasViejo="Ya no es primera edad";
		}
		else
		{
			if(edadMasVieja<edad)
			{
				edadMasVieja=edad;
				nombreEdadVieja=nombre;
			}
			else
			{
				if(sexo != "m")
				{
					nombreEdadVieja ="No se ingresaron hombres";
				}
			}
		}

		if(banderaAdolescente =="Primer ingreso de adolescente" && edad>12 && edad<18)
		{
			edadAdolescente=edad;
			nombreAdolescente=nombre;
			banderaAdolescente ="Ya no es el primer ingreso.";
		}
		
		respuesta = prompt("Ingresar mas datos? si/no");
	}// fin while
	
	console.log("El nombre de la mujer mas alta es: " +nombreAlturaMasAlta);
	console.log("El nombre mas viejo de los hombres: " +nombreEdadVieja);
	console.log("El nombre del primer adolescente ingresado: " +nombreAdolescente);


}//FIN DE LA FUNCIÓN

