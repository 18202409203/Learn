<template>
  <div class="home">
    <c-card>
      <h1>{{ msg }}</h1>
      <el-button @click="query">查询</el-button>
    </c-card>
  </div>
</template>

<script lang="ts">
import { cCard } from "@/components";
import { getExampleList } from "@/api/axios/example";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: { cCard }
})
export default class Home extends Vue {
  msg = "Welcome";

  async query() {
    const responseData = await getExampleList();
    console.log(responseData);
  }
}
</script>
