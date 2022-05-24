import { shallowMount } from "@vue/test-utils";
import TodoView from "@/views/TodoView.vue";

describe("TodoView.vue", () => {
  it("test 1", () => {
    const wrapper = shallowMount(TodoView, {
      global: {
        mocks: {
          $route: {
            params: {},
          },
        },
      },
    });
    console.log(wrapper.html());

    expect(true).toBe(true);
  });
});
