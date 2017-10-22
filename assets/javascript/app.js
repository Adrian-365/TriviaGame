window.onload = function() {

$('#question').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/HBUb-8YieKA?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')

setTimeout(initialize, 1000*7);

	function initialize() {
	$('#timer').html('--')
	$('#question').html('--->Click Here, You Pansy!<---')
	$('#question').click(trivaGame.start);
	}
};

var trivaGame = {

	time:0,


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


}



