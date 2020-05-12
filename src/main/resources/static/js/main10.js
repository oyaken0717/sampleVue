(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      }, {
        title: 'task 2',
        isDone: false
      }, {
        title: 'task 3',
        isDone: true
      }]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      }
    },
//■ computed:キー
    computed: {
      //■ remaining 名前
      remaining: function() {
    	//■① filter(function(todo) > returnで条件に一致した要素だけを抽出する。
    	//  https://www.sejuku.net/blog/21887
        var items = this.todos.filter(function(todo) {
          //■② 今回の場合:isDoneがtrueでないものを抽出する。
          return !todo.isDone;
        });
        return items.length;
      }
    }
  });
})();