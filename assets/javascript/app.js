var arrayOfButtons = ["kirk", "spock", "sulu", "uhura", "scotty", "klingon", "vulcan", "picard", "riker", "enterprise"];

function renderButtons() {
	$(".clickable").remove();
	for (var i = 0; i < arrayOfButtons.length; i++) {
		var buttonNew = $("<button>");
		buttonNew.attr("class", "clickable");
		buttonNew.text(arrayOfButtons[i]);
		$(".selectorButtons").append(buttonNew);
	}
//	return false;
}

$(document).ready(function() {
	renderButtons();
});

$('#addPicture').on('click', function() {
	console.log($("input#picture-input").val());

	var inputPicture = $("input#picture-input").val();
		arrayOfButtons.push(inputPicture);

		//if (arrayOfButtons.indexOf(inputPicture) !== -1) {
		//	arrayOfButtons.push(inputPicture);
		//}
	renderButtons();
	return false;
});
