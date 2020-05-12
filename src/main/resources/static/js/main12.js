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
//■① データの変更の監視 ※todosの配列に変更があれば動く。= todosの中の要素(title,toDelete)の変更までは記録しない。
    watch: {
      //■ todosに変更があれば以下をする。
      // todos: function() {
      //■ localStorage：クライアント側にデータを保存する方法
      //■ JSON.stringify：JSON形式にして保存する。
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   alert('Data saved!');
      // }
//■② データの変更の監視 ※todosの配列に変更があれば動く。= todosの中の要素(title,toDelete)の変更も記録する。※watchの中に書く。
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          // alert('Data saved!');
        },
        //■ handleとdeepはセット        
        deep: true
      }
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
      },
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();