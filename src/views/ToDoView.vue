<template>
  <div class="todoapp">
    <h1 class="todoapp__title">Todos</h1>
    <input
      type="text"
      placeholder="what chores do you have to do?"
      class="todoapp__new-todo"
      @keyup.enter="printEvent"
    />

    <div class="main">
      <div class="toggle-all"></div>
      <label for=""></label>
      <TaskList />

      <FooterList />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

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
  printEvent(event: KeyboardEvent) {
    console.log(event);
  }
}
</script>
