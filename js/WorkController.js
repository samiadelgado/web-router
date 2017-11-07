function WorkController(){
	console.log("Estoy en work");
	$("#portfolio-contant-active").mixItUp();
	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});
}
angular
	.module('app')
	.controller('WorkController', WorkController)