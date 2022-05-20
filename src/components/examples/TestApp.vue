<template>
  <div>
    <label
      >Update inputData
      <input v-model.trim="inputData" />
    </label>
    <div>{{ computedMsg }}</div>
    <div>APPID: {{ idApp }}</div>
    <button @click="changeState()">vamos a ver</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { State, Action } from "vuex-class";

export default class TestApp extends Vue {
  inputData = "";

  @Prop({ required: true, type: String }) readonly msg!: string;

  @State("idApp") idApp!: number;
  @Action("updateIdApp") updateIdApp!: (id: number) => void;

  get computedMsg() {
    return this.msg + " " + this.inputData;
  }

  changeState() {
    console.log("vamos a ver");
  }
}
</script>
