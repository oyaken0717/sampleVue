(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: []
    },
    watch: {
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
//■ ページが載る(マウント)される時に保存した情報を読み込む。
    mounted: function() {
      //■ parse:プログラムで使えるようにする。> うまくいかない場合(||) > からの配列([])を返す。
      //■ localStorage.getItem:キー(スプシ参照)を取得する。setItemも然り。※たまたま「Item」がかぶっただけ。 Item=keyを指している。
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
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