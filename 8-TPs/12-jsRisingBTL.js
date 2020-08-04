/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos 
validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 

12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;//edad
 	var sexoIngresado;//sexo
	var estadoCivilIngresado;//estado civil
	var sueldoBrutoIngresado; // sueldo bruto 
	var numeroLegajo; // numero de legajo
	var nacionalidadIngresada;// nacionalidad 
	var respuesta;


	respuesta="si";

	while(respuesta == "si")
	{
			edadIngresada = prompt("Ingresar edad");
			edadIngresada=parseInt(edadIngresada);
			while(edadIngresada <18 || edadIngresada >90 || isNaN(edadIngresada))//la condicion dice que si el dato que ingrese No es UN NUMERO pida el dato de nuevo.
		{
				edadIngresada = prompt("Ingresar edad");
				edadIngresada=parseInt(edadIngresada);
		}

			sexoIngresado = prompt("Ingresar sexo, 'M' para masculino y 'F' para femenino");
			while(sexoIngresado !="M" && sexoIngresado != "F" || (!isNaN(sexoIngresado))) 
		/*aca si lo que ingrese no es un numero pida de nuevo pero al agregarle ! estoy negando que cumpla esa condicion 
		diciendo bueno no, hacer lo contrario, en este caso si es un numero no aceptar ese numero, solo letras.*/
		{
				sexoIngresado=prompt("Ingresar sexo, 'M' para masculino y 'F' para femenino");
		}

			estadoCivilIngresado = prompt("Ingresar estado civil,1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
			estadoCivilIngresado=parseInt(estadoCivilIngresado);
			while(estadoCivilIngresado <1 || estadoCivilIngresado > 4 || isNaN(estadoCivilIngresado))
		{
				estadoCivilIngresado = prompt("Ingresar estado civil,1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
				estadoCivilIngresado=parseInt(estadoCivilIngresado);
		}

			sueldoBrutoIngresado = prompt("Ingresar el sueldo, no menos de 8000");
			sueldoBrutoIngresado= parseInt(sueldoBrutoIngresado);
			while(sueldoBrutoIngresado <8000)
			{
				sueldoBrutoIngresado = prompt("Ingresar el sueldo, no menos de 8000");
				sueldoBrutoIngresado= parseInt(sueldoBrutoIngresado);
			}

			numeroLegajo = prompt ("Ingresar numero de legajo,numero de 4 cifras.");
			numeroLegajo = parseInt(numeroLegajo);
			while(numeroLegajo<1000 || numeroLegajo>9999 || isNaN(numeroLegajo))
			{
				numeroLegajo = prompt ("Ingresar numero de legajo, numero de 4 cifras.");
				numeroLegajo = parseInt(numeroLegajo);
			}

			nacionalidadIngresada=prompt("Ingresar nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
			while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
			{
				nacionalidadIngresada = prompt("Ingresar nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
			}

		respuesta = prompt("Ingresar mas datos? si/no");
		while(respuesta != "si" && respuesta !="no")
		{
			respuesta = prompt("Ingresar mas datos? si/no");
		}
	}//fin ciclo while.

	//procesos
	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado ="Soltero";//preguntar si esta bien.
			break;
		case 2:
			estadoCivilIngresado="Casado";
			break;
		case 3:
			estadoCivilIngresado="Divorciado";
			break;
		case 4:
			estadoCivilIngresado="Viudo";
			break;
	}
	
	/*switch(nacionalidadIngresada) no se si se puede, sera que no lo toma porque esas letras no estan en el html validadas.
	{
		case "A":
			txtIdNacionalidad.value="Argentino";
			break;
		case "B":
			txtIdNacionalidad.value="Extranjero";
			break;
		case "N":
			txtIdNacionalidad.value="Nacionalizados";
			break;
	}*/

	//mostrar
	txtIdEdad.value=edadIngresada;
	txtIdSexo.value=sexoIngresado;
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdSueldo.value=sueldoBrutoIngresado;
	txtIdLegajo.value=numeroLegajo;
	txtIdNacionalidad.value=nacionalidadIngresada;

}
