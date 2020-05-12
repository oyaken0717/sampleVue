(function() {
  'use strict';

  var likeComponent = Vue.extend({
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
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
//■ 'like-component'のボタンが押される > 「total」が++されるようにヒモ付けされる。
// > 'increment'が発火する = htmlで紐付けされている"incrementTotal"が動く
        this.$emit('increment');
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });

})();