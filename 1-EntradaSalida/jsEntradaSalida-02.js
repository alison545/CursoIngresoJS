/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre; //se define la variable una unica vez. 
	nombre = prompt ("NOMBRE", "Ingresar nombre");
	alert(nombre);

	//test
	nombre ="maria";
	alert(nombre); //nuestra asignacion es destructiva.

	/*errores
	nombre =maria; //"maria" se la toma como variable sin definir, ya que nunca defini la variable "maria".
	alert(maria);// variable sin definir.
	alert(Nombre); //nunca se definio la variable "nombre" con N mayuscula.
	Si ahorramos letra a la hora de definir variables no ahorramos nota*/

    //NO AHORRARSE LETRAS NI ERRORES. 

}

