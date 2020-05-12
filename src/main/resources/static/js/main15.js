(function() {
  'use strict';

  var likeComponent = Vue.extend({
	//■ componentsのdataはfunction > returnで返さないといけない
    data: function() {
      return {
        count: 0
      }
    },
    //■ 画面(template)に<button>を登場させる。
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
      'like-component': likeComponent
    }
  });
})();