import { shallowMount } from "@vue/test-utils";
import TodoView from "@/views/TodoView.vue";

// vuex store
import vuex from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import state from "@/store/state";

describe("TodoView.vue", () => {
  let store: { [key: string]: any };
  let global;

  beforeEach(() => {
    // create a fresh store for each test
    store = new vuex.Store({
      actions,
      mutations,
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
      id: "3",
      description: "test",
      completed: false,
      statusTask: "read",
    };

    await store.dispatch("addTask", dataTest);

    expect(state.tasks).toEqual([dataTest]);
  });
});
