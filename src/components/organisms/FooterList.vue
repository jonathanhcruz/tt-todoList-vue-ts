<template>
  <footer class="footer">
    <div class="todo-count">
      <strong>{{ numberOfTasks }}</strong> item left
    </div>

    <NavFooter />

    <div class="clear-completed" @click="clearTaskComplete">
      Clear completed
    </div>

    <InfoFooter />
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Action, State } from "vuex-class";

// Import componentes
import NavFooter from "@/components/molecules/NavFooter.vue";
import InfoFooter from "@/components/molecules/InfoFooter.vue";

@Options({
  components: {
    NavFooter,
    InfoFooter,
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
