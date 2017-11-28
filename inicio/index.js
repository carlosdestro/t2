$(function() {

	marca = function(campo)
	{
		campo.focus();
					
		campo.css("background-color", "rgba(255,0,0,.9)");

		campo.css("color", "white");

		setTimeout(function()
		{
			campo.css("background-color", "white");

			campo.css("color", "black");
		}, 1000);


		return false;
	}

	valida = function(campo)
	{
		if(campo.attr("id") == "id")
			return true;

		if(campo.val() == "")
			return marca(campo);

		var tipo = campo.attr("tipo");

		if(tipo == "x")
		{
			return true;
		}

		if(tipo == "i")
		{
			var i = parseInt(campo.val())

			if(isNaN(i) || i < -1 || i > 10000)
				return marca(campo);
		}
		else if(tipo == "d")
		{
			var d1 = Date.parse("01/01/1900");

			var d2 = Date.now();

			var t = campo.val();

			var s = t.split('/');

			if(s.length < 3)
				return marca(campo);

			var d = Date.parse(s[1] + '/' + s[0] + '/' + s[2]);

			if(d < d1 || d > d2)
				return marca(campo);
		}

		return true;

	}

	formate=function(date)
	{
	   	if (typeof date == "string")
	    date = new Date(date);
	    var day = (date.getDate() <= 9 ? "0" + date.getDate() : date.getDate());
	    var month = (date.getMonth() + 1 <= 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
	    var dateString = day + "/" + month + "/" + date.getFullYear();

    	return dateString;
	}

});