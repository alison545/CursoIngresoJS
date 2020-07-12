/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;
	dato = prompt("Nombre", "Ingresar su nombre");
	document.getElementById("txtIdNombre").value = dato; 
	
}

