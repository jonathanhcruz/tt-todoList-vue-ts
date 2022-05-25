import { shallowMount } from "@vue/test-utils";
import FooterList from "@/components/organisms/FooterList.vue";

// vuex store
import vuex from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import state from "@/store/state";

describe("FooterList.vue", () => {
  let store: { [key: string]: any };
  let global;
  let wrapper: any;

  beforeEach(() => {
    // create a fresh store for each test
    store = new vuex.Store({
      actions,
      mutations,
      state: {
        ...state,
        numberOfTasks: 5,
        tasks: [
          {
            id: "1",
            description: "test",
            completed: false,
            statusTask: "read",
          },
          {
            id: "2",
            description: "test",
            completed: true,
            statusTask: "read",
          },
          {
            id: "3",
            description: "test",
            completed: true,
            statusTask: "read",
          },
        ],
      },
    });

    global = {
      mocks: {
        $store: {
          state: {
            numberOfTasks: 5,
          },
          actions: {
            clearTasks: jest.fn(),
          },
        },
      },
    };

    // mount the component
    wrapper = shallowMount(FooterList, {
      store,
      global,
    });
  });

  it("the number of numberOfTasks should be printed in the task counter.", async () => {
    const todoCount = wrapper.find(".todo-count");

    expect(todoCount.html()).toContain(
      `<strong>${store.state.numberOfTasks}</strong>`
    );
  });

  it("clearTasks function should remove completed tasks", async () => {
    const dataTasks = [...store.state.tasks];

    expect(dataTasks).toEqual(store.state.tasks);
    await store.dispatch("clearTasks");

    expect(dataTasks).not.toEqual(store.state.tasks);
    expect([dataTasks[0]]).toEqual(store.state.tasks);
  });
});
