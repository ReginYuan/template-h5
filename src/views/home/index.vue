<script setup lang="ts">
// 获取组件的实例
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance() as any;
proxy.$showToast("122")
</script>

<template>
   <h1>我最谁</h1>
</template>

<style scoped>

</style>
