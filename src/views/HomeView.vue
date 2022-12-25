<template>
  <div>
    HomeView
  </div>
</template>
<script setup>
import User from '@/api/user';
import {onMounted, reactive} from 'vue'
const userinfo = reactive({
  username: 'tiehan',
  password: '123'
})
const login = async () => {
  const res = await User.getUserInfo(userinfo);
  console.log(res);
}
onMounted(() => {
  login()
})
</script>

<style scoped>

</style>
