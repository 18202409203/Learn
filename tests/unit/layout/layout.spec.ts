import { shallowMount } from "@vue/test-utils";
import layout from "@/layout/index.vue";

describe("layout/index.vue", () => {
  it("contains 'c-layout-container'.", () => {
    const wrapper = shallowMount(layout);
    expect(wrapper.find(".c-layout-container").exists()).toBe(true);
  });
});
