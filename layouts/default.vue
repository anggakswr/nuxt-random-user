<template>
  <div class="min-h-screen bg-gray-100">
    <Header />

    <div class="flex md:pl-250px pt-58px md:pt-84px">
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
