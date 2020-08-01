function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0; // lo mismo el contador.
	acumulador=0; // si no lo inicializo esta undefined, asi empieza a acumular de 0.
	
	while(contador <5)
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);// recuerden programar cosas chiquitas y probarlas, para asegurarme si el programa funciona en partes.
		
		acumulador = acumulador + numeroIngresado;

		contador = contador +1; // contador++.
		//si meto el promedio, en cada iteraccion se va a calcular el promedio pero no me pide eso.
	}
	
	promedio = acumulador / contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN
//el contador tiene un incremento fijo, cuanta lo que yo le pongo. 
//el acumulador tiene un incremento variable, depende del usuario.
// hay que inicalizar el acumulador porque puede que tenga memoria basura.