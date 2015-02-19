$(function() {

	// for location indicator
	var x = [];
	x[0] = 0;
	x[1] = $(".second").offset().top;
	x[2] = $(".third").offset().top;
	x[3] = $(".fourth").offset().top;

	function changeCanvas() {
		$('.canvas').fadeTo(300, 0.3, function() {
		    $(this).css('background-image', 'url(../img/' + canvas + '.jpg)');
		}).fadeTo(200, 1);
	}

	// carousel canvas image
	var canvas = 0;
	$(".ctrl-left").click(function(){
		if(canvas > 0) {
			canvas--;
			changeCanvas();
		}
	});

	$(".ctrl-right").click(function() {
		if(canvas < 3) {
			canvas++;
			changeCanvas();
		}
	});




	$(window).scroll(function() {
		var h = $(window).scrollTop();

		$("#menu li").removeClass("active");

		if(!h) {
			$("h1").stop();
			$("h1").animate({fontSize: "3.1rem"}, 250);

			$("#menu li:nth-child(1)").addClass("active");
			
		} else {
			$("h1").stop();
			$("h1").animate({fontSize: "2.2rem"}, 250);

			if(h > x[0] && h < x[1]) {
				$("#menu li:nth-child(1)").addClass("active");
			} else if (h >= x[1] && h < x[2]) {
				$("#menu li:nth-child(2)").addClass("active");


			} else if (h + $(window).height() >= $(document).height() -100) {
				$("#menu li:nth-child(4)").addClass("active");
			} else {
				$("#menu li:nth-child(3)").addClass("active");
			}
		}
	});

	$(".goto").click(function(e) {
		e.preventDefault();

		$('html, body').animate({
        	scrollTop: x[this.dataset.target]}, 500);
	});


	$("#btn").click(function(e) {
		e.preventDefault();

		$(".overlay").css("display", "block");

		var left = 300;
		var top = $(window).scrollTop() + 175;


		$(".modal").css({"display" : "block",
						"top" : top, 
						"left" : left});
	});


	$(".overlay").click(function() {
		$(".overlay").css("display", "none");
		$(".modal").css("display", "none");
	})
	$(".btn-close").click(function() {
		$(".overlay").css("display", "none");
		$(".modal").css("display", "none");
	});
});