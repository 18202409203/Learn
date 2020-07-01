import { shallowMount } from "@vue/test-utils";
import { cLogo } from "@/layout/components/cHeader/components";

describe("layout/components/cLogo.vue", () => {
  it("contains 'c-logo-image'.", () => {
    const wrapper = shallowMount(cLogo);
    expect(wrapper.find(".c-logo-image").exists()).toBe(true);
  });
});
