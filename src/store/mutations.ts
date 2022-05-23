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

  UPDATE_EXISTING_CHANGES(
    state: { changesExist: boolean },
    payload: boolean
  ): void {
    state.changesExist = payload;
  },

  CLEAR_TASKS(state: { tasks: Array<Task> }): void {
    const filterTasksCompleted = state.tasks.filter(
      (item) => item.completed === false
    );
    state.tasks = [...filterTasksCompleted];
  },

  SET_NUMBES_OF_TASKS(state: { numberOfTasks: number }, payload: number): void {
    state.numberOfTasks = payload;
  },
};
