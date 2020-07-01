<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CRouterLink extends Vue {
  @Prop() to!: string;
}
</script>

<style lang="scss" scoped>
a,
a:hover,
a:active,
a:visited,
a:link,
a:focus,
.router-link-active {
  text-decoration: none;
  color: inherit;
}
</style>
