import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VUserSearchForm from "@/components/VUserSearchForm";
import VUserProfile from "@/components/VUserProfile";

describe("UserView", () => {
  it("コンポーネントがレンダリングされる", () => {
    const wrapper = shallowMount(UserView);

    // __snapshots__にhtmlのスナップショットが出力される
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("子コンポーネントがレンダリングされる", () => {
    const wrapper = shallowMount(UserView);
    // VUserSearchFormにマッチする`Wrapper`を返す
    const userSearchForm = wrapper.find(VUserSearchForm);
    // VUserProfileにマッチする`Wrapper`を返す
    const userProfile = wrapper.find(VUserProfile);

    // `Wrapper`（今回の場合、VUserSearchFormとVUserProfile）が存在すれば`true`を返す
    expect(userSearchForm.exists()).toBe(true);
    expect(userProfile.exists()).toBe(true);
  });
});
