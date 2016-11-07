var arrayOfButtons = ["kirk", "spock", "sulu", "uhura", "scotty", "klingon", "vulcan", "picard", "riker", "enterprise"];

function renderButtons() {
	$(".clickable").empty();
	for (var i = 0; i < arrayOfButtons.length; i++) {
		var buttonNew = $("<button>");
		buttonNew.attr("class", "clickable");
		buttonNew.text(arrayOfButtons[i]);
		$(".selectorButtons").append(buttonNew);
	}
	return false;
}

$(document).ready(function() {
	renderButtons();

	$('#addPicture').on('submit', function() {
		val inputPicture = $("input#picture-input").val();
		if (arrayOfButtons.indexOf(inputPicture) !== -1) {
			arrayOfButtons.push(inputPicture);
		}
		renderButtons();
	});
});