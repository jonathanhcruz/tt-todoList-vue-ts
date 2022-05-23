<template>
  <div class="todo-list">
    <ul>
      <ItemTask
        v-for="item in tasks"
        :key="`task-${item.id}`"
        :taskId="item.id"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";
import { Task } from "@/models/General";

// Import componentes
import ItemTask from "@/components/molecules/ItemTask.vue";

@Options({
  components: {
    ItemTask,
  },
})
export default class TaskList extends Vue {
  tasks: Task[] = [];

  @Action("getTaskByFilter") getTaskByFilter!: (filter: string) => Array<Task>;
  @Prop({ required: true, type: String }) readonly filter!: string | undefined;

  mounted() {
    this.getTasks();
  }

  @Watch("filter") onFilterChange() {
    this.getTasks();
  }

  async getTasks() {
    const res = await this.getTaskByFilter((this.filter as string) ?? "all");
    this.tasks = res;
  }
}
</script>
