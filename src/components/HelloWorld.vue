<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'
defineProps({
  msg: String
})
const router = useRouter()
const toav = () => {
  router.push('/about')
}
// onMounted(() => {
//   message.info('This is a normal message');
// })
const count = ref(0)
const value = ref('')
const automessage = () =>{
  message.info('This is a normal message');
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p>
    <a-button type="primary" @click="automessage">弹窗</a-button>
  </p>
  <p>
    <a-button type="primary" @click="toav">路由跳转</a-button>
  </p>
  <p>
    <a-input v-model:value="value" placeholder="Basic usage" />
  </p>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
/* 深度选择器 */
:deep(selector) {
  /* ... */
}

/* 插槽选择器 */
:slotted(selector) {
  /* ... */
}

/* 全局选择器 */
:global(selector) {
  /* ... */
}
</style>
