import { shallowMount } from "@vue/test-utils";
import TaskList from "@/components/organisms/TaskList.vue";

// vuex store
import vuex from "vuex";
import getters from "@/store/getters";
import state from "@/store/state";

describe("filters TaskList.vue", () => {
  let store: { [key: string]: any };
  let computed;
  let mocks: { [key: string]: any };

  beforeEach(() => {
    // create a fresh store for each test
    store = new vuex.Store({
      state: {
        ...state,
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
            completed: false,
            statusTask: "read",
          },
        ],
      },
      getters,
    });

    computed = {};

    mocks = {
      tasksListComponent: [],
    };

    // mount the component
    shallowMount(TaskList, {
      store,
      computed,
      mocks,
      props: { filter: "all" },
    });
  });

  it("receiving all tasks", async () => {
    const getAllTasks = await store.getters.filterAll;
    const stateAllTasks = store.state.tasks;

    expect(getAllTasks).toEqual(stateAllTasks);
  });

  it("receiving completed tasks", async () => {
    const getAllTasks = await store.getters.filterCompleted;
    const stateAllTasks = [
      {
        id: "2",
        description: "test",
        completed: true,
        statusTask: "read",
      },
    ];

    expect(getAllTasks).toEqual(stateAllTasks);
  });

  it("receiving uncompleted tasks", async () => {
    const getAllTasks = await store.getters.filterActive;
    const stateAllTasks = [
      {
        id: "1",
        description: "test",
        completed: false,
        statusTask: "read",
      },
      {
        id: "3",
        description: "test",
        completed: false,
        statusTask: "read",
      },
    ];

    expect(getAllTasks).toEqual(stateAllTasks);
  });
});
