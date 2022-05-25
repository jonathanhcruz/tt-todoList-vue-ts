<template>
  <li class="todo-list__item" :class="stausTaskClass">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        @change="isCompleted"
        :checked="task.completed"
      />
      <label class="description" @dblclick="openEditTask">
        {{ task.description }}
      </label>
    </div>

    <input
      class="edit"
      @keyup.escape="closeEditTask"
      @keyup.enter="editedTask"
      v-model.trim="inputValue"
    />
    <div class="destroy" @click="destroyedTask"></div>
  </li>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Action, State } from "vuex-class";

// Models
import { Task } from "@/models/General";

const statusTaskClass: { [key: string]: string } = {
  complete: "completed",
  edit: "editing",
  read: "",
};

export default class ItemTask extends Vue {
  task = {
    id: "",
    description: "",
    completed: false,
    statusTask: "",
  };

  inputValue = "";

  @Prop({ type: String }) taskId!: string;
  @State("tasks") tasks!: Array<Task>;
  @Action("getTaskById") getTaskById!: (id: string) => Task;
  @Action("updateTask") updateTask!: (task: Task) => void;
  @Action("deleteTask") deleteTask!: (id: string) => void;

  beforeMount() {
    this.setTaskInComponent();
  }

  get stausTaskClass(): string {
    return statusTaskClass?.[this.task.statusTask] ?? "";
  }

  async setTaskInComponent(): Promise<void> {
    this.task = await this.getTaskById(this.taskId);
  }

  /**
   * Delete task
   */
  destroyedTask(): void {
    this.deleteTask(this.taskId);
  }

  /**
   * status Task is completed
   */
  isCompleted(event: Event): void {
    const inputCheckbox: any = event.target;
    const task: Task = {
      ...this.task,
      completed: inputCheckbox.checked,
      statusTask: inputCheckbox.checked ? "complete" : "read",
    };

    this.updateTask(task);
    this.setTaskInComponent();
  }

  /**
   * cancel task editing
   */
  closeEditTask(): void {
    const task: Task = {
      ...this.task,
      statusTask: "read",
    };
    this.inputValue = "";

    this.updateTask(task);
    this.setTaskInComponent();
    return;
  }

  /**
   * open assignment edit
   */
  openEditTask(): void {
    if (this.task.completed) {
      return;
    }
    this.inputValue = this.task.description;
    const task: Task = {
      ...this.task,
      statusTask: "edit",
    };
    this.updateTask(task);
    this.setTaskInComponent();
  }

  /**
   * save edited assignment
   */
  editedTask(): void {
    const task: Task = {
      ...this.task,
      statusTask: "read",
    };

    task.description = this.inputValue;

    this.updateTask(task);
    this.setTaskInComponent();
  }
}
</script>
