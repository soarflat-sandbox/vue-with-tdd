import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VUserSearchForm from "@/components/VUserSearchForm";
import VUserProfile from "@/components/VUserProfile";

describe("UserView", () => {
  const build = () => {
    const wrapper = shallowMount(UserView, {
      data: () => ({
        user: {}
      })
    });

    return {
      wrapper,
      // VUserSearchFormにマッチする`Wrapper`を返す
      // `wrapper.find`が即時で実行されるのを防ぐため、セレクタを取得する関数にする
      userSearchForm: () => wrapper.find(VUserSearchForm),
      // VUserProfileにマッチする`Wrapper`を返す
      // `wrapper.find`が即時で実行されるのを防ぐため、セレクタを取得する関数にする
      userProfile: () => wrapper.find(VUserProfile)
    };
  };

  it("コンポーネントがレンダリングされる", () => {
    const { wrapper } = build();

    // __snapshots__にhtmlのスナップショットが出力される
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("子コンポーネントがレンダリングされる", () => {
    const { userSearchForm, userProfile } = build();

    // `Wrapper`（今回の場合、VUserSearchFormとVUserProfile）が存在すれば`true`を返す
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });

  // UserView.vueがVUserProfile.vueに目的のプロパティを渡していることを保証するためのテスト
  it("user Props が VUserProfile コンポーネントに渡される", () => {
    const { wrapper, userProfile } = build();
    wrapper.setData({
      user: {
        name: "Daniel"
      }
    });

    // `.vm`のVueInstanceにアクセスできる
    expect(userProfile().vm.user).toBe(wrapper.vm.user);
  });
});
