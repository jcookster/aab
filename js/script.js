/* Author: 

*/
$(document).ready(function(){
  
		var existingClasses;
		
		$("div#navHome").mouseover(function(){
			existingClasses = $(this).attr("class");
			$("div#navHome").removeClass().addClass("selectedNavigationItem navigationBlock");
		}).mouseout(function(){
			$("div#navHome").removeClass().addClass(existingClasses);		
		});
		

		$("div#navInventory").mouseover(function(){
			existingClasses = $(this).attr("class");
			$("div#navInventory").removeClass().addClass("selectedNavigationItem navigationBlock");
			
		}).mouseout(function(){
			$("div#navInventory").removeClass().addClass(existingClasses);		
		});

		$("div#navAbout").mouseover(function(){
			existingClasses = $(this).attr("class");
			$("div#navAbout").removeClass().addClass("selectedNavigationItem navigationBlock");
		}).mouseout(function(){
			$("div#navAbout").removeClass().addClass(existingClasses);		
		});
		
		$("div#navDirections").mouseover(function(){
			existingClasses = $(this).attr("class");  
			$("div#navDirections").removeClass().addClass("navigationBlock selectedNavigationItem ");
		}).mouseout(function(){
			$("div#navDirections").removeClass().addClass(existingClasses);		
		});
		
		
  });