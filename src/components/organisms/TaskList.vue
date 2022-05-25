<template>
  <div class="todo-list">
    <ul>
      <ItemTask
        v-for="item in tasksListComponent"
        :key="`task-${item.id}`"
        :taskId="item.id"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { Action, Getter, State, Mutation } from "vuex-class";

// Import componentes
import ItemTask from "@/components/molecules/ItemTask.vue";

// Models
import { Task } from "@/models/General";

@Options({
  components: {
    ItemTask,
  },
})
export default class TaskList extends Vue {
  tasksListComponent: Task[] = [];

  @Prop({ required: true, type: String }) readonly filter!: string;
  @State("changesExist") changesExist!: Array<Task>;
  @Getter("filterAll") filterAll!: Array<Task>;
  @Getter("filterActive") filterActive!: Array<Task>;
  @Getter("filterCompleted") filterCompleted!: Array<Task>;
  @Mutation("UPDATE_EXISTING_CHANGES") updateExistingChanges!: (
    changes: boolean
  ) => void;
  @Mutation("SET_NUMBES_OF_TASKS") setNumberOfTasks!: (
    numberOfTasks: number
  ) => void;

  beforeMount(): void {
    this.getTasks();
  }

  @Watch("filter") onFilterChange() {
    this.getTasks();
  }

  @Watch("changesExist") onTaskChange() {
    this.getTasks();
  }

  async getTasks() {
    const fill: string = this.filter;

    const mapFilter = {
      all: this.filterAll,
      active: this.filterActive,
      completed: this.filterCompleted,
    };

    this.tasksListComponent = mapFilter[fill as keyof typeof mapFilter];

    const numberOfTasks = this.tasksListComponent.length;
    this.setNumberOfTasks(numberOfTasks);
    this.updateExistingChanges(false);
  }
}
</script>
