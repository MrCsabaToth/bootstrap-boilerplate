(function (window) {
	$("#calc").click(function(event ) {
		event.preventDefault();
		var val = $("#inputnumber").val();
		// Here comes the interpolation
		$("#outputnumber").html(" 5 * " + val + " = " + val * 5);
	});
} (window));
