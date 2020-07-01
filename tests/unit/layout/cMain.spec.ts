import { shallowMount } from "@vue/test-utils";
import { cMain } from "@/layout/components";

describe("layout/components/cMain.vue", () => {
  it("contains 'c-main-container'.", () => {
    const wrapper = shallowMount(cMain);
    expect(wrapper.find(".c-main-container").exists()).toBe(true);
  });
});
