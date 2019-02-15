'use strict';
	
function toggleSidebar() {
	$('.toggle-button').on('click', (e) => {
		e.stopPropagation;
		$('.sidebar').toggleClass('sidebar-hidden');
	})
};

$(toggleSidebar);