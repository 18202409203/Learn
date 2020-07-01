<template>
  <c-header-item>
    <el-dropdown :trigger="dropdownTrigger">
      <div class="c-header-text">
        <c-icon-text :text="userName" icon="el-icon-user-solid"></c-icon-text>
      </div>
      <el-dropdown-menu slot="dropdown">
        <div @click="openDrawer">
          <el-dropdown-item>设置</el-dropdown-item>
        </div>
        <c-router-link to="/login">
          <el-dropdown-item>
            退出登录
          </el-dropdown-item>
        </c-router-link>
      </el-dropdown-menu>
    </el-dropdown>
  </c-header-item>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { AppMutation } from "@/types";
import { cHeaderItem, cIconText, cRouterLink } from "@/components";
import { mouseTrigger } from "@/config";

const appModule = namespace("app");
@Component({
  components: { cHeaderItem, cIconText, cRouterLink }
})
export default class CAvatar extends Vue {
  @appModule.Mutation("setLeftDrawer")
  setLeftDrawer!: AppMutation["setLeftDrawer"];

  userName = "admin";
  dropdownTrigger = mouseTrigger;

  openDrawer() {
    this.setLeftDrawer(true);
  }
}
</script>
