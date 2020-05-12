(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
//■② オブジェクトのコンストラクタみたいな感じ
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
//■① オブジェクト化
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
    }
  });
})();
