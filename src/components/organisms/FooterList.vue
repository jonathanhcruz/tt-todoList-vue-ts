<template>
  <footer class="footer">
    <div class="todo-count">
      <strong>{{ numberOfTasks }}</strong> item left
    </div>

    <NavFooter />

    <div class="clear-completed" @click="clearTaskComplete">
      Clear completed
    </div>

    <div class="info">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
        <a> Lorem Ipsum </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Action, State } from "vuex-class";

// Import componentes
import NavFooter from "@/components/molecules/NavFooter.vue";

@Options({
  components: {
    NavFooter,
  },
})
export default class FooterList extends Vue {
  @State("numberOfTasks") numberOfTasks!: number;
  @Action("clearTasks") clearTasks!: () => void;

  clearTaskComplete() {
    this.clearTasks();
  }
}
</script>
