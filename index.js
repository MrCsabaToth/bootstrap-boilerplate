(function (window) {
	$("#calc").click(function(event ) {
		event.preventDefault();
		var val = $("#inputnumber").val();
		console.log("New val: " + val);
		// Here comes the interpolation
		$("#outputnumber").html(val * 5);
	});
} (window));
