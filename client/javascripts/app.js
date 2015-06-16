var main = function () {
	'user strict'

	$("#filter").click(function() {
		if($("#filtertext").val() === "Type here" || $("#filtertext").val() === ""){
			alert("Enter a valid input");
			$("#filtertext").val('');
		}
	});

}
$(document).ready(main);