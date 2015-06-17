var main = function () {
	'user strict'
	var $result;

	$("#filter").click(function() {
		if($("#filtertext").val() === ""){
			alert("Enter a valid input");
			$("#filtertext").val('');
		}
		else{
			userText($("#filtertext").val())
		}

	});

	function userText(textoutput){
		$("main .result").empty();
		$result = $("<p>").text("Your input: " + textoutput);
		$("main .result").append($result);
	}
}
$(document).ready(main);