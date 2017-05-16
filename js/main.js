"use strict";
$(function() {
	$(".city_name").on('click',function(){
		 $('.wrapper').removeClass('blur');
		$( "#myselect" ).val();
		 $('.select_loc').hide();
		var a= $(this).text();
		console.log('You Selected:'+a);
		if(a == 'BANGLORE'){
			var availableTags = [
				 "Whitefield","Indiranagar","Jayanagar","Marathahalli","MG Road","Koramangala","Electronics City","JP Nagar","Malleswaram","Rajajinagar","HSR Layout","Vijayanagar","Bannerghatta Road","Majestic","RT Nagar","HAL","Hebbal","KR Puram","Yelahanka","Banashankari","Adugodi","Agara","Anekal","Arakere","Ashoknagar","Attibele","Austin Town","Avalahalli","BTM Layout","BTM Layout 1st Stage","BTM Layout 2nd Stage","Banashankari"
				];
		}
		else{
			var availableTags = [
				  "Hyderabad",
				  "Chandnagar",
				  "AshokNagar",
				  "Nizampet",
				  "KPHB",
				  "Yeragadda",
				  "Secundrabad"
				];  
		}
	  
    $( "#tags" ).autocomplete({
      source: availableTags
    });
		
		
	
	});
});