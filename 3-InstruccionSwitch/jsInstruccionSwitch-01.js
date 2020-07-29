function mostrar()
{
/* Morel Alison
 Enunciado: 
 al seleccionar un mes informar.
 si es Enero: "que comiences bien el año!!!."
 si es Marzo: "a clases!!!."
 si es Julio: "se vienen las vacaciones!!!."
 si es Diciembre: "Felices fiesta!!!."*/
	var mes;
	mes = txtIdMes.value;
	//console.log es para que lo veamos nosotros y no el ususrio, no resuelve ejercicio.
	switch(mes)
	{
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("a clases!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break;
	}

}//FIN DE LA FUNCIÓN