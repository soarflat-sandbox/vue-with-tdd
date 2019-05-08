import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";

describe("UserView", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(UserView);

    // __snapshots__にhtmlのスナップショットが出力される
    expect(wrapper.html()).toMatchSnapshot();
  });
});
