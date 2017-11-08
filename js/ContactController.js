function ContactController($interval){
	console.log("Estoy en contact");
        this.map = {
                    center: {
                              latitude: 56.162939,
                              longitude: 10.203921  
                        	},
                     zoom: 8    
                };        
}

angular
	.module('app' ,['uiGmapgoogle-maps'])
	.controller('ContactController', ContactController)
	