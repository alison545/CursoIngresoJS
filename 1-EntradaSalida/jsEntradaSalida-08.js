/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numdividendo;
	var numdivisor;
	var resto;

	numdividendo = document.getElementById("txtIdNumeroDividendo").value;
	numdivisor = document.getElementById("txtIdNumeroDivisor").value; 
	
	numdividendo = parseInt(numdividendo);
	numdivisor = parseInt(numdivisor);

	resto = numdividendo % numdivisor;

	alert("El resto es " +resto);
}
