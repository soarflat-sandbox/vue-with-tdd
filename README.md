# vue-with-tdd

- [Working an application in Vue.js with TDD — An extensive guide for people who have time — part 1](https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b)
- [Working an application in Vue.js with TDD — An extensive guide for people who have time — part 2](https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-2-12ec77b15d96)
- Working an application in Vue.js with TDD — An extensive guide for people who have time — part 3
- Working an application in Vue.js with TDD — An extensive guide for people who have time — part 4
- Working an application in Vue.js with TDD — An extensive guide for people who have time — part 5

## コンポーネントのテスト項目

- コンポーネントが正しくレンダリングされているか
- Propsが正しく渡されているか
- 特定のイベントがトリガーした際に、コンポーネントは正常に動作しているか

## スナップショット

`UserView.vue`が以下の状態で

```js
<script>
export default {
  name: 'UserView'
}
</script>

<template>
  <div>
    Hello World
  </div>
</template>
```

以下のようなテストを実行すると

```js
import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";

describe("UserView", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(UserView);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
```

テストコードが格納されているルートディレクトリに`__snapshots__`ディレクトリが追加され、そこに以下のようなhtmlのスナップショットが出力される。

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`UserView renders the component 1`] = `
<div>
  UserView
</div>
`;
```

スナップショットがある状態で`UserView.vue`が以下のように変更するとテストは失敗する。

```js
<script>
export default {
  name: 'UserView'
}
</script>

<template>
  <div>
    UserView
  </div>
</template>
```

htmlの更新が意図した更新であれば、スナップショットを更新する必要がある。

`jest -u`のようにオプションをつけるか、`watch`モードを実行中であれば`u`を押せばスナップショットを更新できる。