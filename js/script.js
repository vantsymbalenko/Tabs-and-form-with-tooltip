$(function() {
	var $div = $(".content div");
	var $li = $(".tabs li");
	$div.hide();
	function start() {
		$li.eq(0).addClass('active');
		$div.eq(0).show();
	}
	start();
	$li.on("click", function() {
			$li.removeClass('active');
			$(this).addClass('active');
			$div.hide();
			$div.eq($(this).index()).show();
		});
});