/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var importe;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo= parseInt(sueldo);
	importe = sueldo *10/100;
	
	resultado = sueldo + importe;
	document.getElementById("txtIdResultado").value = resultado;

	//1.1 saco el porcentaje y, a su vez, lo sumo al sueldo.
}
