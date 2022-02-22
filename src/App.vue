<template>
  <div>
    <p-tabs v-model="active" :tabs="tabs" @change="change" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private active = ''

  private tabs = [
    { code: '', label: '全部', total: '20' },
    { code: '1', label: '未开始', total: '6' },
    { code: '2', label: '进行中', total: '4' },
    { code: '3', label: '已结束', total: '0' },
    { code: '4', label: '已取消', total: '10' },
  ]

  private change(val: string) {
    console.log(val)
  }
}
</script>

<style lang="scss" scope>
</style>
