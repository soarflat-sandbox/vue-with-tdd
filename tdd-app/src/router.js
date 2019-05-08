import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // HTML5 History モード（ページのリロード無しに URL 遷移を実現するモード）
  // https://router.vuejs.org/ja/guide/essentials/history-mode.html
  mode: "history",
  // アプリケーションのベースURL
  base: process.env.BASE_URL,
  // ルートオブジェクトプロパティを定義できる
  // https://router.vuejs.org/ja/api/#%E3%83%AB%E3%83%BC%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3
  routes: []
});
