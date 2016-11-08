var arrayOfButtons = ["kirk", "spock", "sulu", "uhura", "scotty", "klingon", "vulcan", "picard", "riker", "enterprise"];
var apiKey = "dc6zaTOxFJmzC";


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


	$('#addPicture').on('click', function() {
		console.log($("input#picture-input").val());

		var inputPicture = $("input#picture-input").val().trim();
		arrayOfButtons.push(inputPicture);

		//if (arrayOfButtons.indexOf(inputPicture) !== -1) {
		//	arrayOfButtons.push(inputPicture);
		//}
		renderButtons();
		return false;
	});

	$('.clickable').on('click', function() {
		var query = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&r=pg&limit=5"   
  	query += "&q=" + $(this).text();
	  console.log(query);
	  $.ajax({
	  	url: query,
	  	method: 'GET', 
	  }).done(function(response) {
	  		console.log(response)
		}).fail(function(err) {
			throw err;
		});
		console.log("exit");
	});
})


