// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#boton1").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.68/ferreteria/buscarTodos.php",
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuesta){
				
			var datosProducto = JSON.parse(respuesta);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosProducto.productos.length; x++)
			{
				$('#contenido').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/ferreteria/recursos/imagenes/fotos/'+datosProducto.productos[x].claveProducto+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosProducto.productos[x].nombreProducto +' </h1><h2> '+datosProducto.productos[x].marcaProducto+' </h2></div></div><div><h2>Precio Unitario: '+datosProducto.productos[x].precioUnitario+' </h2><h2>Precio Mayoreo: '+datosProducto.productos[x].precioMayoreo+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#PaginaMI',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn1
		
		
		$("#btn_pro").on("tap", function (){
		$.ajax({
			type:"POST",
			 
			url:"http://192.168.1.68/ferreteria/buscarProductos.php",
			data: "producto=" + $('#txtnombre').val(), 
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuestapro){
				
			var datosProductos = JSON.parse(respuestapro);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosProductos.productos.length; x++)
			{
				$('#contenidopro').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/ferreteria/recursos/imagenes/fotos/'+datosProductos.productos[x].claveProducto+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosProductos.productos[x].nombreProducto +' </h1><h2> '+datosProductos.productos[x].marcaProducto+' </h2></div></div><div><h2>Precio Unitario: '+datosProductos.productos[x].precioUnitario+' </h2><h2>Precio Mayoreo: '+datosProductos.productos[x].precioMayoreo+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#productos',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn_pro
		
		
		$("#btn_marca").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.68/ferreteria/buscarMarcas.php",
			data: "marca=" + $('#txtmarca').val(),
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success: function(respuestamarca){
				
			var datosMarca = JSON.parse(respuestamarca);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosMarca.marcas.length; x++)
			{
				$('#contenidomar').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/ferreteria/recursos/imagenes/fotos/'+datosMarca.marcas[x].claveProducto+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosMarca.marcas[x].nombreProducto +' </h1><h2> '+datosMarca.marcas[x].marcaProducto+' </h2></div></div><div><h2>Precio Unitario: '+datosMarca.marcas[x].precioUnitario+' </h2><h2>Precio Mayoreo: '+datosMarca.marcas[x].precioMayoreo+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#marcas',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn_marca
}); 
});

