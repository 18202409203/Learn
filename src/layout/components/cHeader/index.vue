<template>
  <el-row class="c-header-container">
    <!-- logo -->
    <el-col :span="4">
      <c-logo></c-logo>
    </el-col>
    <!-- menu -->
    <el-col :span="10">
      <el-menu
        :mode="menuMode"
        :menu-trigger="menuTrigger"
        :default-active="activeMenu"
        :text-color="styleVariables['header-text-color']"
        :active-text-color="styleVariables['header-text-color-active']"
        :background-color="styleVariables['header-background']"
      >
        <c-menu v-for="menu in menus" :key="menu.menuId" :menu="menu"></c-menu>
      </el-menu>
    </el-col>
    <!-- item -->
    <el-col :span="10">
      <!-- user -->
      <c-avatar></c-avatar>
      <!-- tool -->
      <template v-if="!isSmallScreen">
        <c-full-screen></c-full-screen>
        <c-notice></c-notice>
      </template>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { namespace } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import { cLogo, cMenu, cAvatar, cNotice, cFullScreen } from "./components";
import variables from "@/styles/variables.scss";
import { CMenuItem } from "@/types";
import { mouseTrigger } from "@/config";

const appModule = namespace("app");
@Component({
  components: { cMenu, cLogo, cAvatar, cNotice, cFullScreen }
})
export default class CHeader extends Vue {
  menuMode = "horizontal";
  menuTrigger = mouseTrigger;

  @appModule.Getter("menuList") menus!: Array<CMenuItem>;
  @appModule.Getter("isSmallScreen") isSmallScreen!: boolean;

  get activeMenu() {
    return this.$route.name;
  }
  get styleVariables() {
    return variables;
  }
}
</script>

<style lang="scss" scoped>
.c-header-container {
  background: $base-header-background;
  padding: 0 5vw;

  .el-menu.el-menu--horizontal {
    border-bottom: solid 0px transparent;
  }

  ::v-deep {
    .el-menu-item.is-active {
      background: $base-header-background-active !important;
    }

    .el-menu {
      &--horizontal {
        border-bottom: solid 0 transparent !important;
      }

      > .c-menu-container {
        display: inline-block;
      }
    }
  }
}
</style>
