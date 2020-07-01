import { shallowMount } from "@vue/test-utils";
import { cMenu } from "@/layout/components/cHeader/components";
import { CMenuItem } from "@/types";

describe("layout/components/cMenu.vue", () => {
  const menu: CMenuItem = {
    hidden: false,
    name: "Test",
    title: "Test"
  };
  it("contains 'c-menu-container'.", () => {
    const wrapper = shallowMount(cMenu, {
      propsData: {
        menu: menu
      }
    });
    expect(wrapper.find(".c-menu-container").exists()).toBe(true);
  });
});
