/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	//tomo la edad  
	
	var estadocivilingresado;
	var edad;

	estadocivilingresado = estadoCivil.value;
	edad= parseInt(edad);
	edad = txtIdEdad.value;

if(estadocivilingresado != "Soltero" && edad <= 18)
{
	alert("Es muy pequeño para NO ser soltero");
}



}//FIN DE LA FUNCIÓN