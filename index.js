'use strict';
	
function toggleSidebar() {
	$('.toggle-button').on('click', (e) => {
		e.stopPropagation;
		$('.sidebar').toggleClass('sidebar-hidden');
		if($('.sidebar').hasClass('sidebar-hidden')) {
			$('.toggle-button').text('>');
		}
		else {
			$('.toggle-button').text('<');
		}
	})
};

$(toggleSidebar);