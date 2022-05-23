import { Task } from "../models/General";

export default {
  ADD_TASK({ tasks }: { tasks: Array<Task> }, payload: Task): void {
    tasks.unshift(payload);
  },

  UPDATE_TASK({ tasks }: { tasks: Array<Task> }, payload: Task): void {
    const taskPosition: number = tasks.findIndex(
      (task) => task.id === payload.id
    );

    if (taskPosition < 0) {
      return;
    }

    tasks[taskPosition] = payload;
  },

  DELETE_TASK({ tasks }: { tasks: Array<Task> }, id: string): void {
    const taskPosition: number = tasks.findIndex((task) => task.id === id);

    if (taskPosition >= 0) {
      tasks.splice(taskPosition, 1);
    }
  },
};
