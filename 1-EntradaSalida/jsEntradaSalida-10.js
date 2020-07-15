/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var importe;
	var resultado;
	
	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	importe = sueldo * 1.25;
	
	/*importe = sueldo *25/100;
	resultado = sueldo - importe;*/
	document.getElementById("txtIdResultado").value = resultado;
	
	

	
}
