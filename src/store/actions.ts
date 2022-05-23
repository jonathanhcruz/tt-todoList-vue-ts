import { Commit } from "vuex";
import { Task } from "../models/General";

// helpers
import {
  fetchNewTask,
  fetchUpdateTask,
  fetchDeleteTask,
} from "../helpers/fetchApi";

export default {
  addTask({ commit }: { commit: Commit }, task: Task): void {
    try {
      const res = fetchNewTask(task);
      commit("ADD_TASK", res);
      commit("UPDATE_EXISTING_CHANGES", true);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  updateTask({ commit }: { commit: Commit }, task: Task) {
    try {
      const res = fetchUpdateTask(task);
      commit("UPDATE_TASK", res);
      commit("UPDATE_EXISTING_CHANGES", true);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteTask({ commit }: { commit: Commit }, id: string) {
    try {
      const res = fetchDeleteTask(id);
      commit("DELETE_TASK", res);
      commit("UPDATE_EXISTING_CHANGES", true);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  getTaskById(
    { state }: { state: { tasks: Array<Task> } },
    id: string
  ): Task | unknown {
    return state.tasks.find((task) => task.id === id);
  },
};
