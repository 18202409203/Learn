<template>
  <!-- only icon -->
  <span v-if="iconTextSync === 'icon'" class="c-text-icon">
    <i v-if="icon" :class="icon"></i>
  </span>
  <!-- only text -->
  <span v-else-if="iconTextSync === 'text'" class="c-text-icon">
    <span v-if="text">{{ text }}</span>
  </span>
  <!-- icon + text -->
  <span v-else class="c-text-icon">
    <span v-if="textFirst && text">{{ text }}</span>
    <i v-if="icon" :class="icon"></i>
    <span v-if="!textFirst && text">{{ text }}</span>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { AppState } from "@/types";

const appModule = namespace("app");

@Component
export default class CIconText extends Vue {
  @appModule.State("iconText") defaultIconText!: AppState["iconText"];

  @Prop() text!: string | undefined;
  @Prop() icon!: string | undefined;
  @Prop() iconText!: string | undefined;
  // 文字在前
  @Prop({ default: false }) textFirst!: boolean;

  get iconTextSync() {
    return this.iconText || this.defaultIconText;
  }
}
</script>
