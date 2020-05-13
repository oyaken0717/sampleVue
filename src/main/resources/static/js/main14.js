(function() {
  'use strict';
// Components
//■③   
  var likeComponent = Vue.extend({
    template: '<button>Like</button>'
  });

  var app = new Vue({
    el: '#app',
    //■ component：「部分」> メソッドのように独自のタグを作る方法
    components: {
      //■②
      'like-component': likeComponent
    }
  });

})();