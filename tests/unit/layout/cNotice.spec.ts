import { shallowMount } from "@vue/test-utils";
import { cNotice } from "@/layout/components/cHeader/components";

describe("layout/components/cNotice.vue", () => {
  it("contains 'c-header-text'.", () => {
    const wrapper = shallowMount(cNotice);
    expect(wrapper.find(".c-header-text").exists()).toBe(true);
  });
});
