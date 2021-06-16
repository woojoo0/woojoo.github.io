$(document).ready(function(){
	
	$(".symbol.about").click(function(){
		$(".modal, #modal").show();
	});

	$("#modal.modal").click(function(){
		$(".modal").fadeOut(300);
	});

});

$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
	$('#img').width("100%");
});
