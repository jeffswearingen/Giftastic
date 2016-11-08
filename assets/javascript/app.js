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
	$('.clickable').on('click', function() {
		var query = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&r=pg&limit=5"   
  	query += "&q=" + $(this).text();
	  console.log(query);
	  $.ajax({
	  	url: query,
	  	method: 'GET', 
	  }).done(function(response) {
	  		console.log(response);
	  		for (var i = 0; i < response.data.length; i++) {
	  			console.log(response.data[i]);
	  			var tempBlock = $("<div>");
	  			var tempImage = $("<img>");
	  			tempImage.attr('src', response.data[i].images.original_still.url);
//	  			tempBlock.attr("html", "<img src=" + response.data[i].images.original_still.url + ">");
					$(tempBlock).append(tempImage);
					var tempRating = $("<p>");
					tempRating.text("Rating: " + response.data[i].rating);
					$(tempBlock).append(tempRating);
	  			$(".pictures").append(tempBlock);
	  		}
		}).fail(function(err) {
			throw err;
		});
		console.log("exit");
	});
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

	
})


