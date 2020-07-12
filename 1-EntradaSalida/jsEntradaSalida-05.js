/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var name = document.getElementById("txtIdNombre").value;
	var edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " +name+ " Y su edad es " +edad);
}

