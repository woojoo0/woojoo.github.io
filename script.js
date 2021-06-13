$(document).ready(function(){
	
	$(".symbol.about").click(function(){
		$(".modal, #modal").show();
	});

	$("#modal.modal").click(function(){
		$(".modal").fadeOut(300);
	});

});
