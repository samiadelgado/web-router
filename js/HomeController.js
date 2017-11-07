function HomeController(){
	console.log("Estoy en la home");
	
	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});
}
angular
	.module('app')
	.controller('HomeController', HomeController)