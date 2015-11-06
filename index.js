(function (window) {
	$("#inputnumber").changed(function(val) {
		console.log("New val: " + val);
		// Here comes the interpolation
		$("#outputnumber").html(val * 5);
	});
} (window));
