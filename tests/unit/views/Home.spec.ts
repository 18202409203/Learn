import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("layout/components/Home.vue", () => {
  it("contains 'home'.", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(".home").exists()).toBe(true);
  });
});
