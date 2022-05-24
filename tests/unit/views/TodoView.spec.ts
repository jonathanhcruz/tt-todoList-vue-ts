import { shallowMount } from "@vue/test-utils";
import TodoView from "@/views/TodoView.vue";

// vuex store
import vuex from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import state from "@/store/state";

describe("TodoView.vue", () => {
  let store: { [key: string]: any };
  let global;

  beforeEach(() => {
    // create a fresh store for each test
    store = new vuex.Store({
      actions,
      mutations,
      getters,
      state,
    });

    global = {
      mocks: {
        $route: {
          params: {},
        },
      },
    };

    // mount the component
    shallowMount(TodoView, { store, global });
  });

  it("Create new task todoView.vue", async () => {
    const dataTest = {
      id: "1",
      title: "test",
      description: "test",
      status: "test",
    };

    await store.dispatch("addTask", dataTest);

    expect(true).toBe(true);
    expect(state.tasks).toEqual([dataTest]);
  });
});
