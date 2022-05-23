<template>
  <div class="todoapp">
    <h1 class="todoapp__title">Todos</h1>
    <input
      type="text"
      placeholder="what chores do you have to do?"
      class="todoapp__new-todo"
      v-model.trim="newTaskDescription"
      @keyup.enter="setNewTask"
    />

    <div class="main">
      <div class="toggle-all"></div>
      <label for=""></label>

      <TaskList :filter="$route.params.filter ?? 'all'" />

      <FooterList />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action } from "vuex-class";
import { uuid } from "vue-uuid";

import { Task } from "@/models/General";

// Import componentes
import FooterList from "@/components/organisms/FooterList.vue";
import TaskList from "@/components/organisms/TaskList.vue";

@Options({
  components: {
    FooterList,
    TaskList,
  },
})
export default class ToDoView extends Vue {
  newTaskDescription = "";

  @Action("addTask") addTask!: (task: Task) => void;

  setNewTask(): void {
    if (
      this.newTaskDescription.trim() === "" ||
      this.newTaskDescription.length < 4
    ) {
      /**
       * TODO: Show error message
       */
      return;
    }

    this.addTask({
      id: `${uuid.v4()}`,
      description: this.newTaskDescription,
      completed: false,
      statusTask: "read",
    });
    this.newTaskDescription = "";
    return;
  }
}
</script>
