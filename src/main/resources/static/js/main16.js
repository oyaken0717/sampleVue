(function() {
  'use strict';

  var likeComponent = Vue.extend({
//■① propatiesの略 html側の「message」をキャッチ
	// props: ['message'],
//■①のデフォルト値と型をあらかじめ設定する書き方 
	  props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
//■② propsを展開する。※前回までは「Like」を直書きだった。
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
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