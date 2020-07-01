<template>
  <el-form ref="form" :model="formModel" label-width="auto">
    <el-form-item
      v-for="formItem in formItems"
      :key="formItem.model"
      :label="formItem.label"
    >
      <!-- select -->
      <el-select
        v-if="formItem.type === 'select'"
        v-model="formModel[formItem.model]"
      >
        <el-option
          v-for="option in formItem.options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
        ></el-option>
      </el-select>
      <!-- input -->
      <el-input v-else v-model="formModel[formItem.model]"></el-input>
    </el-form-item>
    <!-- el-form-item -->
    <slot />
  </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CFormItem } from "@/types";
@Component
export default class CForm extends Vue {
  @Prop() formItems!: Array<CFormItem>;
  @Prop() formModel!: object;
}
</script>

<style></style>
