<template>
  <div class="min-h-screen bg-gray-100">
    <Header />

    <div class="flex" :style="{ paddingTop: '84px' }">
      <Sidebar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
