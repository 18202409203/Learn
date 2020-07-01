<template>
  <el-image class="c-logo-image" :src="logo" fit="contain"></el-image>
</template>

<script lang="ts">
import logoJpg from "@/assets/logo-white.jpg";
import { Vue, Component } from "vue-property-decorator";
import cHeaderItem from "@/components/cHeaderItem.vue";

@Component({
  components: { cHeaderItem }
})
export default class CLogo extends Vue {
  logo = logoJpg;
}
</script>

<style lang="scss" scoped>
.c-logo-image {
  height: $base-header-height;
  padding: 0 $base-padding;
  max-width: 150px;
  display: block;
}
</style>
