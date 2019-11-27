var images = [ 
		"images/1.jpg", 
		"images/2.jpg",
		"images/3.jpg",
		"images/4.jpg",
		"images/5.jpg",
		"images/6.jpg", 
		"images/7.jpg",
		"images/8.jpg",
		"images/9.jpg",
	]; 

	$(images).each(function(){ 
	$('<img/>')[0].src = this;  
	}); 

	var index = 0; 
	
	$.backstretch(images[index], {speed: 800}); 
	
	setInterval(function() { 
	index = (index >= images.length - 1) ? 0 : index + 1; 
	$.backstretch(images[index]); 
	}, 10000); 