<template>
  <el-card class="c-box-card">
    <!-- header -->
    <div v-if="header" slot="header" class="c-card-header clearfix">
      <span>{{ header }}</span>
      <el-button
        v-for="button in buttons"
        :key="button.name"
        @click="button.handler"
        style="float: right; padding: 3px 0"
        type="text"
        >{{ button.text }}</el-button
      >
    </div>
    <!-- body -->
    <slot></slot>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CCard extends Vue {
  @Prop() header!: string | undefined;
  /**
   * @namespace buttons
   * @property name - 按钮唯一标识
   * @property text - 按钮文字
   * @property handler - 句柄函数
   */
  @Prop({ default: () => [] }) buttons!: Array<object> | undefined;
}
</script>

<style lang="scss" scoped>
.c-box-card {
  margin: $base-margin;

  .c-card-header {
    font-weight: bolder;
    background: $base-color-default;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
}
</style>
