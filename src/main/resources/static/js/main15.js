(function() {
  'use strict';
  var likeComponent = Vue.extend({
	//■ componentsのdataはfunction > returnで返さないといけない
    data: function() {
      return {
        count: 0
      }
    },
    //■③ 画面(template)に<button>を登場させる。スプシ第15回
    template: '<button @click="countUp">Like {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      //■② component：「部分」> メソッドのように独自のタグを作る方法 スプシ第15回
      'like-component': likeComponent
    }
  });
})();