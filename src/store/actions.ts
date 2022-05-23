import { Commit } from "vuex";
import { Task } from "../models/General";

// helpers
import {
  fetchNewTask,
  fetchUpdateTask,
  fetchDeleteTask,
} from "../helpers/fetchApi";

const filters: { [key: string]: (tasks: Array<Task>) => Array<Task> } = {
  all: (tasks: any): Array<Task> => tasks,
  completed: (tasks: any): Array<Task> =>
    tasks.filter((task: Task) => task.completed),
  active: (tasks: any): Array<Task> =>
    tasks.filter((task: Task) => !task.completed),
};

export default {
  addTask({ commit }: { commit: Commit }, task: Task): void {
    try {
      const res = fetchNewTask(task);
      commit("ADD_TASK", res);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  updateTask({ commit }: { commit: Commit }, task: Task) {
    try {
      const res = fetchUpdateTask(task);
      commit("UPDATE_TASK", res);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  deleteTask({ commit }: { commit: Commit }, id: string) {
    try {
      const res = fetchDeleteTask(id);
      commit("DELETE_TASK", res);
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

  getTaskByFilter(
    { state }: { state: { tasks: Array<Task> } },
    filter: string
  ): Array<Task> {
    const res = filters?.[filter](state.tasks);
    return res;
  },
};
