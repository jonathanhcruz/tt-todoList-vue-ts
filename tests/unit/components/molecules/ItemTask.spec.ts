import { shallowMount } from "@vue/test-utils";
import ItemTask from "@/components/molecules/ItemTask.vue";

// vuex store
import vuex from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import state from "@/store/state";

// import models
import { Task } from "@/models/General";

describe("FooterList.vue", () => {
  let store: { [key: string]: any };

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

    // mount the component
    shallowMount(ItemTask, { store });
  });

  it("should have the element based on the id passed to it", async () => {
    const taskById = await store.dispatch("getTaskById", "3");

    expect(store.state.tasks[2]).toEqual(taskById);
  });

  it("you must have edited the item according to the task id", async () => {
    const newDataTask = {
      id: "2",
      description: "text edited",
      completed: false,
      statusTask: "read",
    };

    expect(store.state.tasks[1]).not.toEqual(newDataTask);
    await store.dispatch("updateTask", newDataTask);

    expect(store.state.tasks[1]).toEqual(newDataTask);
  });

  it("should delete task based on id", async () => {
    expect(store.state.tasks.some((task: Task) => task.id === "1")).toBe(true);
    await store.dispatch("deleteTask", "1");

    expect(store.state.tasks.some((task: Task) => task.id === "1")).toBe(false);
  });
});
