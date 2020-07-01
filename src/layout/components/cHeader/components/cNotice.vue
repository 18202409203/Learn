<template>
  <c-header-item>
    <el-dropdown :trigger="dropdownTrigger">
      <div class="c-header-text">
        <c-icon-text :text="noticeText" icon="el-icon-bell"></c-icon-text>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>消息一</el-dropdown-item>
        <el-dropdown-item>消息二</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </c-header-item>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { cHeaderItem, cIconText } from "@/components";
import { mouseTrigger } from "@/config";

@Component({
  components: { cHeaderItem, cIconText }
})
export default class CNotice extends Vue {
  noticeText = "消息";
  dropdownTrigger = mouseTrigger;
}
</script>
