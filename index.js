(function (window) {
	$("#calc").click(function(event ) {
		event.preventDefault();
		var val = $("#inputnumber").text();
		console.log("New val: " + val);
		// Here comes the interpolation
		$("#outputnumber").html(val * 5);
	});
} (window));
