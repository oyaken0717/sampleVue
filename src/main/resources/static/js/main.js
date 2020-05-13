(function() {
	'use strict'
	//■ vm:vue model	
	var vm = new Vue({
		//■ el:elements		
		el: '#app',
		data:{
			//■ リストの使い方
			todos:[
				'task1',
				'task2',
				'task3'
			]
		}
	});
})();