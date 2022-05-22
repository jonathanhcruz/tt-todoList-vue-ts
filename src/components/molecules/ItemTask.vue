<template>
  <li class="todo-list__item" :class="PrintStatusTask">
    <div class="view">
      <input class="toggle" type="checkbox" @change="isCompleted" />
      <label class="description" @dblclick="changeStatusTask">Buy milk</label>
    </div>

    <input class="edit" value="Buy milk" />
    <div class="destroy" @click="destroyedTask"></div>
  </li>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
// import { Getter } from "vuex-class";

// Models
import { Task } from "@/models/General";

const statusTaskClass: { [key: string]: string } = {
  complete: "completed",
  edit: "editing",
  read: "",
};

export default class ItemTask extends Vue {
  @Prop({ type: String, default: "read" }) readonly stausTask!: string;
  @Prop({ type: Object }) task!: Array<Task>;

  get PrintStatusTask(): string {
    return statusTaskClass?.[this.stausTask] ?? "";
  }

  destroyedTask(): void {
    console.log("destroyed");
  }

  isCompleted(evet: Event): void {
    console.log(evet);
  }

  changeStatusTask(evet: MouseEvent): void {
    if (this.stausTask !== "read") {
      return;
    }
    console.log(evet);
  }
}
</script>
