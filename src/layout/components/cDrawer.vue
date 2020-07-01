<template>
  <el-drawer
    :title="drawerTitle"
    :visible.sync="isShowDrawer"
    :size="drawerSize"
    class="c-drawer-container"
  >
    <div class="c-form-container">
      <c-form :form-items="formItems" :form-model="settings">
        <el-form-item>
          <el-button type="primary" @click="saveSettings">保存</el-button>
          <el-button @click="closeDrawer">取消</el-button>
        </el-form-item>
      </c-form>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { AppState, AppMutation, CFormItem } from "@/types";
import { cForm } from "@/components";

const appModule = namespace("app");
@Component({ components: { cForm } })
export default class CDrawer extends Vue {
  @appModule.State("iconText")
  iconText!: AppState["iconText"];
  @appModule.State("isLeftDrawer")
  isLeftDrawer!: AppState["isLeftDrawer"];
  @appModule.Mutation("setLeftDrawer")
  setLeftDrawer!: AppMutation["setLeftDrawer"];
  @appModule.Mutation("setIconText")
  setIconText!: AppMutation["setIconText"];
  @appModule.Getter("isSmallScreen") isSmallScreen!: boolean;

  drawerTitle = "设置";
  settings = {
    iconText: this.$store.state.app.iconText
  };
  formItems: Array<CFormItem> = [
    {
      model: "iconText",
      label: "图标文字",
      type: "select",
      options: [
        {
          value: "iconText",
          label: "图标+文字"
        },
        {
          value: "icon",
          label: "仅图标"
        },
        {
          value: "text",
          label: "仅文字"
        }
      ]
    }
  ];

  get isShowDrawer() {
    return this.isLeftDrawer;
  }
  set isShowDrawer(value) {
    this.setLeftDrawer(value);
  }
  get drawerSize() {
    return this.isSmallScreen ? "80%" : "30%";
  }
  closeDrawer() {
    this.setLeftDrawer(false);
  }
  saveSettings() {
    this.setIconText(this.settings.iconText);
    this.closeDrawer();
  }
}
</script>

<style lang="scss" scoped>
.c-drawer-container {
  .c-form-container {
    padding: $base-padding;
  }
}
</style>
