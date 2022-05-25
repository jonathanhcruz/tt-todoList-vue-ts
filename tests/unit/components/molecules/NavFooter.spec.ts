import { shallowMount } from "@vue/test-utils";
import NavFooter from "@/components/molecules/NavFooter.vue";

describe("NavFooter.vue", () => {
  let wrapper: any;
  let global;

  beforeEach(() => {
    global = {
      mocks: {
        $route: {
          params: {
            filter: "active",
          },
        },
      },
    };

    wrapper = shallowMount(NavFooter, { global });
  });
  it("test 1", () => {
    const linkSelected = wrapper.findAll(".filters__item")[1].html();

    expect(linkSelected).toContain('class="selected"');
  });
});
