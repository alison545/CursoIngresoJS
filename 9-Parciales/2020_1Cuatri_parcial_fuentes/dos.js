/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro. */
function mostrar()
{
    
    var tipo;
    var cantidadBolsas;
    var precioPorBolsa;
    var descuento;
    var importeConDescuento;
    var acumuladorArena=0;
    var acumuladorCal=0;//NUNCA OLVIDAR INICIALIZAR LAS VARIABLES.
    var acumuladorCemento=0;
    var tipoConMascantidadDeBolsas;
    var precioArena=0;
    var precioCal=0;
    var precioCemento=0;
    var tipoMasCaro;//hay que usar bandera.
    var respuesta;

    var importeTotalAPagar=0;

    respuesta="Si";

    while(respuesta =="Si")
    {
        //tomo datos y valido
        tipo=prompt("Ingresar productos, arena, cal o cemento");
        while(tipo != "arena" && tipo != "cal" && tipo!="cemento")
        {
            tipo = prompt("Reingresar productos validos");
        }

        cantidadBolsas=prompt("Ingresar cantidad de bolsas a comprar");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas) || cantidadBolsas<1)
        {
            cantidadBolsas=prompt("Reingresar cantidad de bolsas a comprar");
            cantidadBolsas=parseInt(cantidadBolsas);
        }

        precioPorBolsa=prompt("Ingresar el precio");
        precioPorBolsa=parseInt(precioPorBolsa);
        while(isNaN(precioPorBolsa) || precioPorBolsa <1)
        {
            precioPorBolsa=prompt("Ingresar el precio");
            precioPorBolsa=parseInt(precioPorBolsa);
        }

        //agregar comentario.
        if(cantidadBolsas > 10)
        {
            descuento = (precioPorBolsa*15/100);
            importeConDescuento = precioPorBolsa - descuento; 
        }
        else{
                if(cantidadBolsas > 30)
                {
                    descuento = (precioPorBolsa*25/100);//NO HACER ESOOO, SOLO PONER EL DESCUENTO  Y ABAJO HACER LA CUENTA.
                    importeConDescuento = precioPorBolsa - descuento;
                }
            }        

            importeTotalAPagar = importeTotalAPagar+precioPorBolsa;
            
        switch(tipo)
            {
                case "arena":
                    acumuladorArena += cantidadBolsas;
                    precioArena += precioPorBolsa;
                    break;
                case "cal":
                    acumuladorCal += cantidadBolsas;
                    precioCal += precioPorBolsa;
                    break;
                case "cemento":
                    acumuladorCemento += cantidadBolsas;
                    precioCemento += precioPorBolsa;
                    break;
            }
        respuesta= prompt("Desea ingresar mas productos wacho Si/No");
    }//fin del while

    
    

    if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
    {
        tipoConMascantidadDeBolsas = "arena";
    }
    else
    {
        if(acumuladorCal>acumuladorArena && acumuladorCal>acumuladorCemento)
        {
            tipoConMascantidadDeBolsas = "cal";
        }
        else
        {
            if(acumuladorCemento>acumuladorArena && acumuladorCemento>acumuladorCal)
            {
                tipoConMascantidadDeBolsas ="cemento";
            }
        }
    }
//aca va bandera.NO HAY QUE ACUMULARLO,solo el precio mas caro
    if(precioArena>precioCal && precioArena>precioCemento)
    {
        tipoMasCaro = "arena";
    }
    else
    {
        if(precioCal>precioArena && precioCal > precioCemento)
        {
            tipoMasCaro = "cal";
        }
        else
        {
            if(precioCemento>precioArena && precioCemento>precioCal)
            {
                tipoMasCaro = "cemento";
            }
        }
    }

    document.write("El importe total bruto, sin descuento es: "+importeTotalAPagar+ "<br>");
    document.write("Importe total con descuento: " +importeConDescuento+ "<br>");
    document.write("El tipo con mas cantidad de bolsas" +tipoConMascantidadDeBolsas+ "<br>");
    document.write("El tipo mas caro es: " +tipoMasCaro);
    //importe total es la suma de los precios de la cantidad de prodcutos que ingrese.
    //importe total  con descuento que seria la suma de los precios .
}
