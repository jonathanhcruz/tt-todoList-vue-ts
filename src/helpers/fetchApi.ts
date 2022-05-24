import { Task } from "@/models/General";

export const fetchNewTask = (newTask: Task): Promise<Task[]> | Error | Task => {
  /**
   * TODO: implement Fetch API to add new task
   */
  return newTask;
};

export const fetchUpdateTask = (task: Task): Promise<Task[]> | Error | Task => {
  /**
   * TODO: implement Fetch API to update task
   */
  return task;
};

export const fetchDeleteTask = (
  idTask: string
): Promise<Task[]> | Error | string => {
  /**
   * TODO: implement Fetch API to delete task
   */
  return idTask;
};
