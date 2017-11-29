$(document).ready(function() { /* code here */ 
//Opening video clip:
$('#question').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/HBUb-8YieKA?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
//Timer to initialize the game after the video is done:
setTimeout(initialize, 1000*7);

	function initialize() {
	$('#timer').html('--')
	$('#question').html('--->Click Here, You Pansy!<---')
	$('#question').click(trivaGame.start);
	}
});

//An object to hold the game:
var trivaGame = {
	//var time establishing it as a numeical value
	time:0,

	//function to start the game
	start: function() {
		var started = $(this).attr('data-started');
        console.log(started);

		if (started === 'false') {
			$(this).attr('data-started', 'true');
			trivaGame.nextQ();
		} else { 
			alert('click elsewhere')
		}
	},

	nextQ: function() {

		trivaGame.time = 10;
		counter = setInterval(trivaGame.count, 1000);
		
		$('#timer').html('Time Remaining:  '+trivaGame.time);
		$('#question').html('question will go here')
		$('#answers').html('answers will go here')
	},

	check: function() {},

	reset: function() {},

	count: function() {
		trivaGame.time--;
		$('#timer').html('Time Remaining:  '+trivaGame.time);
		

	},
//an array of questions
	questions: [],

	answers: [],


}



//Trivia facts:
// The foul-mouthed band playing at the wedding is a real rock band called The Dan Band. 
// Frank's nickname is Frank the Tank
// Who played Barry the Oral Sex Instructor:  Andy Dick
//Dean Prichard's nickname:  Cheese
//What was the name of Beanie's chain of stores?:  Speaker City
// Where was Frank going streaking?  Through the quad to the gymnasium
// What was Mitch's Fraternity Nickname?  The Godfather
// What song did Frank sing at Blue's funeral:  Dust in the Wind