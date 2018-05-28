// $(document).ready(function () {

var correctAnswers = 0;
var incorrectAnswers = 0;
var questionArray = ["The three kinds of balls used in Quidditch are Bludgers, Snitches, and...", "What does the spell Obliviate do?", "What does Ron see in the Mirror of Erised?", "Who is NOT a member of the Order of the Phoenix?", "What does O.W.L. stand for?", "Which is not a horcrux of Voldemort?", "Who is the author of A History of Magic?", "How many Weasley siblings are there?", "Who teaches flying lessons?", "Which ingredient is NOT found in the Polyjuice Potion?"];
var answerArray = [["Foozies", "Wiffles", "Sockeys", "Quaffles"], ["Destroys the target object", "Removes part of target's memory", "Makes targets levitate", "Sends target reeling backwards"], ["Himself as a Prefect", "Himself kissing Hermione", "Himself with bags of Galleons", "Himself holding the Quidditch cup"], ["Cornelius Fudge", "Severus Snape", "Mundungus Fletcher", "Kingsley Shacklebolt"], ["Ordinary Wizarding Level", "Official Wizarding Law", "Outstanding Wizarding License", "Ordinary Wizarding Learning"], ["Dumbledore's Elder Wand", "Marvolo Gaunt's Ring", "Helga Hufflepuff's Cup", "Rowena Ravenclaw's Diadem"], ["Wendelin the Weird", "Bathilda Bagshot", "Gellert Grindelwald", "Beedle the Bard"], ["5", "7", "9", "13"], ["Madam Hooch", "Professor Grubbly-Plank", "Sybill Trelawney", "Charity Burbage"], ["Lacewing flies", "Powdered Bicorn horn", "Crushed bezoar", "Shredded Boomslang skin"]];

$("#start").on("click", function () {
	$("#start").hide();
	// for (i = 0; i < questionArray.length; i++) {
		var currentQuestion = questionArray[0];
		$("#question").show();
		$("#question").text(currentQuestion);

		$(".btn").show();
	for (var j = 0; j < 4; j++) {
		// var currentAnswers = answerArray[j][j];
		var makeAnswers = $("<button>");
		makeAnswers.addClass("btn btn-primary btn-lg btn-block");
		makeAnswers.attr("answer", answerArray[0][j]);
		$(".btn").show();
		makeAnswers.html(answerArray[0][j]);
		$("#answer").append(makeAnswers);
	}
		// var currentAnswers = answerArray[i];
		// $("#question").html(currentQuestion);

	// }
});


// }