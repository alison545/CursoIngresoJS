/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
/*{
	//tomo la edad  

	var edadIngresada;
	var estadoCivilingresado;

	edadIngresada =txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilingresado = estadoCivil.value;

	if(!(edadIngresada < 18) && (estadoCivilingresado != "Soltero"))
	{
		alert("Es soltero y no es menor");
	}*/

	function mostrar()
{
	//tomo la edad  

	var edadIngresada;
	var estadoCivilingresado;

	edadIngresada =txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilingresado = estadoCivil.value;

	if(edadIngresada >= 18 && estadoCivilingresado == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	
	//<= >= es mas costoso usar estos, le pedimos al microprocesador que trabaje 2 veces.
	
}//FIN DE LA FUNCIÓN