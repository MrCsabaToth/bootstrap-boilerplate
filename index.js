(function (window) {
	$("#calc").click(function() {
		var val = $("#inputnumber").text();
		console.log("New val: " + val);
		// Here comes the interpolation
		$("#outputnumber").html(val * 5);
	});
} (window));
