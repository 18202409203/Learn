<template>
  <div v-if="!menu.hidden" class="c-menu-container">
    <!-- have children -->
    <el-submenu
      v-if="menu.children && menu.children.length >= 1"
      :index="menu.name"
      popper-append-to-body
    >
      <template slot="title">
        <c-icon-text
          :icon-text="menu.iconText"
          :text="menu.title"
          :icon="menu.icon"
        ></c-icon-text>
      </template>
      <c-menu
        v-for="child in menu.children"
        :key="child.name"
        :menu="child"
      ></c-menu>
    </el-submenu>
    <!-- no children -->
    <c-router-link v-else :to="menu.route">
      <el-menu-item :index="menu.name">
        <c-icon-text
          :icon-text="menu.iconText"
          :text="menu.title"
          :icon="menu.icon"
        ></c-icon-text>
      </el-menu-item>
    </c-router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { cIconText, cRouterLink } from "@/components";

@Component({
  name: "cMenu",
  components: { cIconText, cRouterLink }
})
export default class CMenu extends Vue {
  @Prop() menu!: object;
}
</script>

<style lang="scss" scoped>
@mixin menu-active {
  &.is-active {
    background: $base-header-background-active !important;

    & i {
      color: $base-header-text-color-active;
    }
  }
}

@mixin menu-hover {
  & i {
    color: $base-header-text-color;
  }
  &:hover {
    background: $base-header-background-hover !important;
  }
}

.c-menu-container {
  user-select: none;

  ::v-deep {
    .el-menu-item {
      @include menu-hover;
      @include menu-active;
    }

    .el-submenu {
      &__title {
        @include menu-hover;
      }

      @include menu-active;

      .el-menu-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* hack element-ui arrow */
      &__icon-arrow {
        right: 5px;
        margin-top: -5px;

        &.el-icon-arrow-right {
          right: 10px;
        }
      }
    }
  }
}
</style>
