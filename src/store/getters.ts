import { Task } from "@/models/General";

export default {
  filterCompleted({ tasks }: { tasks: Array<Task> }): Array<Task> {
    return tasks.filter((task) => task.completed);
  },

  filterAll({ tasks }: { tasks: Array<Task> }): Array<Task> {
    return tasks;
  },

  filterActive({ tasks }: { tasks: Array<Task> }): Array<Task> {
    return tasks.filter((task) => !task.completed);
  },
};
