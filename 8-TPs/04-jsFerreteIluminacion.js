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
    var precio;
    var cantidadLamparas;
    var marca;
    var precioDescuento;
    var importeFinal;
    var impuesto;

    precio = 35;
    precio = parseInt(precio);

    precioDescuento= parseInt(precioDescuento);

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = Marca.value;

    if(cantidadLamparas > 5)
    {
        precioDescuento = precio *50/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
    }
    //b
    if(cantidadLamparas == 5 && marca == "ArgentinaLuz")
    {
        precioDescuento = precio *40/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
    }
    else
    {
        precioDescuento = precio *30/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
    }
    
    //c
    if(marca == "ArgentinaLuz" || marca =="FelipeLamparas")
    {
        precioDescuento = precio *25/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
    }
    else
    {
        precioDescuento = precio *20/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
    }
    
   //e
   if(cantidadLamparas == 3 && marca=="ArgentinaLuz" )
   {
        precioDescuento = precio *15/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
   }
   else
   {
     if(marca == "FelipeLamparas")
     {
        precioDescuento = precio *10/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
     }
     else
     {
        precioDescuento = precio *5/100;
        importeFinal = (precio * cantidadLamparas) - precioDescuento ;
     }
   }
   txtIdprecioDescuento.value = importeFinal;

   if(importeFinal > 120 )
   {
        impuesto = importeFinal *10/100;
        impuesto = importeFinal + importeFinal;
        alert("Usted pago " +impuesto+ " de IIBB.");
   }
   
   

}
