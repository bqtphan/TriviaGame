// $(document).ready(function () {

var correctCount = 0;
var wrongCount = 0;
$("#correctCount").text(correctCount);
$("#wrongCount").text(wrongCount);

var questionArray = ["The three kinds of balls used in Quidditch are Bludgers, Snitches, and...", "What does the spell Obliviate do?", "What does Ron see in the Mirror of Erised?", "Who is NOT a member of the Order of the Phoenix?", "What does O.W.L. stand for?", "Which is not a horcrux of Voldemort?", "Who is the author of A History of Magic?", "How many Weasley siblings are there?", "Who teaches flying lessons?", "Which ingredient is NOT found in the Polyjuice Potion?"];
var answerArray = [["Foozies", "Wiffles", "Sockeys", "Quaffles"], ["Destroys the target object", "Removes part of target's memory", "Makes targets levitate", "Sends target reeling backwards"], ["Himself as a Prefect", "Himself kissing Hermione", "Himself with bags of Galleons", "Himself holding the Quidditch cup"], ["Cornelius Fudge", "Severus Snape", "Mundungus Fletcher", "Kingsley Shacklebolt"], ["Ordinary Wizarding Level", "Official Wizarding Law", "Outstanding Wizarding License", "Ordinary Wizarding Learning"], ["Marvolo Gaunt's Ring", "Helga Hufflepuff's Cup", "Dumbledore's Elder Wand", "Rowena Ravenclaw's Diadem"], ["Wendelin the Weird", "Bathilda Bagshot", "Gellert Grindelwald", "Beedle the Bard"], ["5", "7", "9", "13"], ["Madam Hooch", "Professor Grubbly-Plank", "Sybill Trelawney", "Charity Burbage"], ["Lacewing flies", "Powdered Bicorn horn", "Crushed bezoar", "Shredded Boomslang skin"]];
var correctArray = ["Quaffles", "Removes part of target's memory", "Himself holding the Quidditch cup", "Cornelius Fudge", "Ordinary Wizarding Level", "Dumbledore's Elder Wand", "Bathilda Bagshot", "7", "Madam Hooch", "Crushed bezoar"];
var i = 0;

$("#start").on("click", function () {
	$("#start").hide();
	run();
});

$(".picture").on("click", function () {
	i++;
	$(".picture").hide();
	$(".btn").remove();
	run();
});

function run() {
	generateQuestion(i);
	console.log(i);
	for (var j = 0; j < 4; j++) {
		generateAnswers(i, j);
	}
	check(i);
}

function generateQuestion(i) {
	var currentQuestion = questionArray[i];
	$("#question").show();
	$("#question").text(currentQuestion);
	$(".btn").show();
}

function generateAnswers(i, j) {
	$("#answer").show();
	var makeAnswers = $("<button>");
	makeAnswers.addClass("btn btn-secondary btn-lg btn-block");
	makeAnswers.attr("answer", answerArray[i][j]);
	$(".btn").show();
	makeAnswers.html(answerArray[i][j]);
	$("#answer").append(makeAnswers);
}

function check(i) {
	$("#answer").on("click", ".btn", function () {
		var checkAnswer = $(this).attr("answer");
		$(".btn").hide();
		$("#answer").hide();
		$("#question").text("Click the below image to continue");
		console.log(checkAnswer);
		if (checkAnswer === correctArray[i]) {
			$("#winImage").show();
			correctCount++;
			$("#correctCount").text(correctCount);
		}
		else {
			$("#loseImage").show();
			wrongCount++;
			$("#wrongCount").text(wrongCount);
		}
	});
}