/*Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos*/

function mostrar()//PRIMERO PENSAR DESPUES CODEAR.
{
	var nombre;
	var edad;
	var altura;//validaR
	var sexo;
	var dinero;
	var cantidadDeHijos;

	var acumuladorEdadVieja;
	var nombreEdadVieja;

	var acumuladorAlturaMujer;
	var contadorMujeres;
	var promedioAlturaMujeres;

	var i;

	var acumuladorEdadMujerJoven;
	var nombreEdadMujerJoven;
	
	acumuladorEdadVieja=0;
	acumuladorAlturaMujer=0;
	contadorMujeres=0;
	acumuladorEdadMujerJoven=0;

	for(i=0; i<2; i++)
	{
		//tomo y valido
		nombre= prompt("Ingresar nombre");
		while(!isNaN(nombre)) 
		/* es lo contrario a pedir que ponga numeros, ingreso 1 y como ! niega la condicion, entonces dice que si
		lo que ingreso es numero me pida que vuelva a ingresar.*/
		{
			nombre= prompt("Por favor, reingrese nombre");
		}

		edad=prompt("Ingresar edad, de 0 a 115");
		edad=parseInt(edad);
		while(edad<0 || edad >115)
		{
			edad=prompt("Reingresar edad, de 0 a 115");
			edad=parseInt(edad);
		}

		altura=prompt("Ingresar altura, de 30 a 230");
		altura=parseInt(altura);
		while(altura<30 || altura>230 || isNaN(altura))
		{
			altura=prompt("Ingresar altura, de 30 a 230");
			altura=parseInt(altura);
		}

		sexo=prompt("Ingresar 'f' para femenino y 'm' para masculino");
		while(sexo != "f" && sexo != "m")//claro aca si yo pongo sexo != "f" || sexo != "m" me dice si alguien pone f o m entra a pedir el sexo igual.
		{
			sexo=prompt("Reingresar 'f' para femenino y 'm' para masculino");
		}

		dinero=prompt("Ingresar dinero, tiene que ser numero");
		dinero= parseInt(dinero);
		while(isNaN(dinero))
		{
			dinero=prompt("Reingresar dinero, tiene que ser numero");
			dinero= parseInt(dinero);
		}

		cantidadDeHijos=prompt("Ingresa la cantidad de hijos, de 0 a 10");
		cantidadDeHijos=parseInt(cantidadDeHijos);
		while(cantidadDeHijos<0 || cantidadDeHijos >10 || isNaN(cantidadDeHijos))
		{
			cantidadDeHijos=prompt("Reingresa la cantidad de hijos, de 0 a 10");
			cantidadDeHijos=parseInt(cantidadDeHijos);
		}

		if(edad>acumuladorEdadVieja)//es acumuladoredad
		{
			acumuladorEdadVieja=edad;
			nombreEdadVieja=nombre;
		}
		/*else
		{
			if(sexo == "f" && edad<acumuladorEdadVieja)
			{
				acumuladorEdadMujerJoven=edad;
				nombreEdadMujerJoven=nombre;
			}
		}*/

		if(sexo== "f")
		{
			//acumuladorAlturaMujer=altura;//NO
			acumuladorAlturaMujer += altura;
			contadorMujeres++;
			if(acumuladorEdadMujerJoven<edad)//por ahi va un switch.
			{	acumuladorEdadMujerJoven=edad;//SON 10 CASOS, ALGO TIENE QUE VER.POR AHI VA CONTADOR.
				nombreEdadMujerJoven=nombre;
			}
		}
		
		if(sexo == "f" )
		{
			acumuladorEdadMujerJoven=edad;
			nombreEdadMujerJoven=nombre;
		}
		else
		{
			if(sexo=="f" && acumuladorEdadMujerJoven>edad){}
		}

	}// fin for.

	promedioAlturaMujeres= acumuladorAlturaMujer/contadorMujeres;

	console.log("El nombre de persona mas vieja: "+nombreEdadVieja);
	console.log("El promedio de la altura de las mujeres es: " +promedioAlturaMujeres);
	console.log("El nombre de la mujer mas joven: " +nombreEdadMujerJoven);

}
