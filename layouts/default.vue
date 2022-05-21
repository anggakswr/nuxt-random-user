<template>
  <div class="min-h-screen bg-gray-100">
    <!-- mobile popups -->
    <!-- <SortFilterPopup />
    <MapViewPopup /> -->

    <Header />

    <div class="flex gap-x-4">
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
