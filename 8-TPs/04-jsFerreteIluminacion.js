/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y 
si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 
10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    
    var lamparaPrecio;
    var precioConDescuento;
    var cantidadLamparas;
    var marca;
    var precio;
    var IIBB;

    cantidadLamparas= txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = Marca.value;
    lamparaPrecio= 35;
    lamparaPrecio = parseInt(lamparaPrecio);
     precio= parseInt(precio);
    precioConDescuento=parseInt(precioConDescuento);
    IIBB = parseInt(IIBB);

    if(cantidadLamparas > 5)
    {
        precio = lamparaPrecio * cantidadLamparas;
        precioConDescuento = precio - (precio*50/100);
    
    }
    else
    {
        if(cantidadLamparas == 5 )
        {
            if(marca == "ArgentinaLuz")
            {
            precio = lamparaPrecio * cantidadLamparas;
            precioConDescuento = precio - (precio*40/100);
            } 
            else
            {
            precio = lamparaPrecio * cantidadLamparas;
            precioConDescuento = precio - (precio*30/100);
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    precio = lamparaPrecio * cantidadLamparas;
                    precioConDescuento = precio - (precio*25/100);
                }
                else
                {
                    precio = lamparaPrecio * cantidadLamparas;
                    precioConDescuento = precio - (precio*20/100);
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(marca =="ArgentinaLuz")
                    {
                        precio = lamparaPrecio * cantidadLamparas;
                        precioConDescuento = precio - (precio*15/100);
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            precio = lamparaPrecio * cantidadLamparas;
                            precioConDescuento = precio - (precio*10/100);
                        }
                        else
                        {
                            precio = lamparaPrecio * cantidadLamparas;
                            precioConDescuento = precio - (precio*5/100);
                        }
                    }
                }
            }
        }
       

    }
    if(precioConDescuento > 119)
    {
        IIBB = (precioConDescuento *10 /100);
        alert("Usted pago " +precioConDescuento+ " de IIBB siendo " +IIBB+ " el impuesto que se pago.");
        precioConDescuento = precioConDescuento + IIBB;
    }

    txtIdprecioDescuento.value= precioConDescuento;
}
