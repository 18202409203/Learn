<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { namespace } from "vuex-class";
import { Vue, Component } from "vue-property-decorator";
import { AppMutation } from "@/types";

const appModule = namespace("app");

@Component
export default class App extends Vue {
  @appModule.Getter("isSmallScreen") isSmallScreen!: boolean;
  @appModule.Mutation("setSmallScreen")
  setSmallScreen!: AppMutation["setSmallScreen"];

  created() {
    this.setSmallScreen();
    /* 响应屏幕大小 */
    window.addEventListener("resize", () => {
      this.setSmallScreen();
    });
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: $base-background;
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* override user agent stylesheet */
    :focus {
      outline: none;
    }
  }
}
</style>
