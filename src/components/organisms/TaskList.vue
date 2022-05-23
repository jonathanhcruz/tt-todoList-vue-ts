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
import { State } from "vuex-class";

// Import componentes
import ItemTask from "@/components/molecules/ItemTask.vue";

@Options({
  components: {
    ItemTask,
  },
})
export default class TaskList extends Vue {
  @State("tasks") tasks!: any;
}
</script>
