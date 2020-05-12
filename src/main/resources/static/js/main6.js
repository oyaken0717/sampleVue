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
    methods: {
      addItem: function() {
        this.todos.push(this.newItem);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          //■ スプライス(index番号の1個目)          
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();