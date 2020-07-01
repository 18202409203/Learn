<template>
  <c-header-item>
    <template>
      <div @click="changeScreen" class="c-header-text">
        <c-icon-text
          :text="fullScreenText"
          icon="el-icon-full-screen"
        ></c-icon-text>
      </div>
    </template>
  </c-header-item>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { cHeaderItem, cIconText } from "@/components";
import { AppState, AppMutation } from "@/types";
import { namespace } from "vuex-class";

const appModule = namespace("app");
@Component({
  components: { cHeaderItem, cIconText }
})
export default class CFullScreen extends Vue {
  fullScreenText = "全屏";
  @appModule.State("isFullScreen") isFullScreen!: AppState["isFullScreen"];
  @appModule.Mutation("setFullScreen")
  setFullScreen!: AppMutation["setFullScreen"];

  changeScreen() {
    this.setFullScreen(!this.isFullScreen);
  }
}
</script>
