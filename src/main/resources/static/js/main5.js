(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
    	  'task 1',
    	  'task 2',
    	  'task 3'
    	  ]
    },
//■ formの値をメソッドで解決する。
    methods: {
    	// addItem: function(e) {
    		//■ submit > 遷移を「させない」
    	//   e.preventDefault();
    	//   this.todos.push(this.newItem);
    	// }
//■ 
    	addItem: function() {
    		this.todos.push(this.newItem);
    		this.newItem = '';
    	}
    }
  });
})();
