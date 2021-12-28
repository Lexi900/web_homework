$(function () {
	var winh = $(window).height();
	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();
		$(".slideanimate").each(function () {
			if (scrolled > $(this).data("pos")) {
				$(this).addClass(
					"animate__animated slide animate__" + $(this).data("direction")
				);
			}
			if (scrolled == 0) {
				$(this).removeClass(
					"animate__animated slide animate__" + $(this).data("direction")
				);
			}
		});
	});
});