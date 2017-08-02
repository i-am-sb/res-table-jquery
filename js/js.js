function responsiveTable (table){

	$( table + ' tr:gt(0)' ).each(function(){
		$('.vertical-table').append('<div class="product-item clearfix">')
		$(this).find('td').each(function(){
			
			$('.vertical-table').append('<div class="header">'+$('th').eq($(this).index()).text()+'</div>');
			$('.vertical-table').append('<div class="data">'+$(this).html()+'</div>');
			
		});
		$('.vertical-table').append('</div>');
	});
}

balanceSize();
		
$(window).resize(function(){	

	if ($(window).width() < 768 ){		// to work when shown the small table 	
	
		balanceSize();                  // balance the size on resize 
	}
	
})
	 
// balance size will make all headers height equal data height !!! Just to fill the BG color ><

function balanceSize(){
	
	var i = 0 ;		
	
	$('.header').each(function(){

		$(this).height($('.data').eq(i).height());
		i++;
	});
	
}

*/