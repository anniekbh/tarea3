window.addEventListener("load", function() {
	var boton = document.getElementById("resultado");
	boton.addEventListener("click", function() {
		var palabra = document.getElementById("palabra").value;
		var letra = document.getElementById("letra").value;
		var mostrar = document.getElementById("mostrar");
		mostrar.innerHTML = "<p>La letra "+ letra + " aparece " + resultado(palabra,letra) +" veces en " + palabra+ "</p>";
		});

	function resultado(palabra,letra) {
		var longitud = palabra.length;
		var contadorLetras=0;

		for(i=0; i<longitud;i++) {
			var cadaLetra =palabra.charAt(i);
			if(letra==cadaLetra){
			contadorLetras++;
			}

		}
	return contadorLetras;
	}
});