(function() {
  'use strict';

  // Components

//■③   
  var likeComponent = Vue.extend({
    template: '<button>Like</button>'
    // template: '<button>Like</button><button>Like</button>'
    // template: '<div><button>Like</button><button>Like</button></div>'
  });

  var app = new Vue({
    el: '#app',
    //■ component：「部分」>タグ
    //■ components:メソッドのように独自のタグを作る方法
    components: {
      //■② component：「部分」
      'like-component': likeComponent
    }
  });

})();