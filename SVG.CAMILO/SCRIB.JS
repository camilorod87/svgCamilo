
 window.onload = function()
 {
 	//alert("Onload");
 	var color = "grenn";
 	var dibujar = SVG('divuja').size("100%", 500);
 	

     var letraC = [[0,0],[0,300],[260,300],[260,230],[100,200],[100,110],[250,80],[260,0],[0,0],[,]];// COORDENADAS PARA LA LETRA C
    
	
      var letraR = [[0,0], [260,0], [280,20],[300,50],[300,100],[260,150],[160,150],[300,300],[190,300], //COORDENADAS PARA LETRA R
      [60,150],[60,300],[0,300],[0,0],[60,40],[220,40],[250,60],[250,90],[235,110],[60,110],[60,40]];
 	var continua = dibujar.polyline(letraC).fill("none").stroke({width : 28,color:'#74DF00'}); //DIVIJAMOS LA LINEA CON EL ANCHO Y EL COLOR CAPTURADO EN EL INDEX

 	var animar = false;
 	nom_div("movLinea").addEventListener('click', function(event) //ACA NOS PERMITE CAMBIAR DE UNA LETRA A OTRA
 	{
 		if(!animar)
 		{
 			continua.animate(1000).plot(letraR);
 		}
 		else
 		{
 			continua.animate(2000).plot(letraC);
 		}
 		animar = !animar;
 	});
for(var i = 1; i <= 6; i++) //CICLO PARA CAPTURAR RECORRER EL EVENTO QUE NOS INDICA EN EL INDEX;
	{
		nom_div("opcion_" + i).addEventListener('click', function(event)
		{
			
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				
			}
		});
	}

	

 	function nom_div(div)
 	{
 		return document.getElementById(div);
 	}
 }