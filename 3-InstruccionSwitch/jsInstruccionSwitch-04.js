function mostrar()
{
/*
Morel Alison
	Enunciado:
	al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.*/
	var mes;
	mes=txtIdMes.value;
	
	switch(mes)
	{
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		default:
			alert("Este mes tiene 31 dias");
			break;
	}

}//FIN DE LA FUNCIÓN