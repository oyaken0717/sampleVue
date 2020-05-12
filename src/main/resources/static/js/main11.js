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
      },
      purge: function() {
    	//■① メッセージをまず出す。
        if (!confirm('チェックしたアイテムを削除しますか？')) {
          //■ 削除しない > 何もしない。
          return;
        }
        //■②「remaining」の所の箇所を持ってくる。> isDoneがtrueでないアイテムのみを返す(残す)
        // this.todos = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        //■③ ②は元々remainingなので、remainingをもってくる。
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        // var items = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        // return items.length;
    	
    	//■ 終わったtodoの数 > 終わったtodoの配列を返す。に変更
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();