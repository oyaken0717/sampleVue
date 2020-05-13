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
    //■① データの変更の監視 ※todosの配列に変更があれば動く。
    watch: {
      todos: {
        handler: function() {
          //■ localStorage：クライアント側にデータを保存する方法
          //■ JSON.stringify：JSON形式にして保存する。
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        //■ handleとdeepはセット        
        deep: true
      }
    },
    //■② ページが載る(マウント)される時に保存した情報を読み込む。
    mounted: function() {
      //■ parse:プログラムで使えるようにする。> うまくいかない場合(||) > からの配列([])を返す。
      //■ localStorage.getItem:キー(スプシ第13回参照)を取得する。setItemも然り。※たまたま「Item」がかぶっただけ。 Item=keyを指している。
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
      }
  });
})();