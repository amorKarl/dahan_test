
// function ajaxs (argument) {
// 	// body...
// 	$.ajax({
// 		url: 'http://dahan-api.heiyou.net/index.php/home/index/search',
// 		type: 'POST',
// 		data: {
// 			"search": ""
// 		},
// 		success:function  (argument) {
// 			// body...
// 			console.dir(argument);
// 		}
// 	});
// }

// function ajaxs (argument) {
// 	// body...
// 	$.ajax({
// 		url: 'http://dahan-api.heiyou.net/index.php/home/index/index',
// 		type: 'POST',
// 		success:function  (argument) {
// 			// body...
// 			console.dir(argument);
// 		}
// 	});
// }

function ajaxs (argument) {
	// body...
	$.ajax({
		url: 'http://dahan-api.heiyou.net/index.php/home/index/hot_search',
		type: 'POST',
		success:function  (argument) {
			// body...
			console.dir(argument);
		}
	});
}



















































ajaxs();