<template>
  <div class="p-2 hidden md:block">
    <!-- photo -->
    <div class="box-center mb-4">
      <!-- desktop -->
      <div class="img-150px bg-gray-300 rounded-full animate-pulse" />
    </div>

    <div>
      <div class="h-4 w-10 bg-gray-300 animate-pulse mb-2" />
      <div class="mb-2 break-words bg-gray-300 animate-pulse h-4 w-28" />

      <div class="h-4 w-10 bg-gray-300 animate-pulse mb-2" />
      <div class="mb-2 break-words bg-gray-300 animate-pulse h-4 w-44" />

      <div class="h-4 w-20 bg-gray-300 animate-pulse mb-2" />
      <div class="mb-2 break-words bg-gray-300 animate-pulse h-4 w-10" />

      <div class="h-4 w-12 bg-gray-300 animate-pulse mb-2" />
      <div class="break-words bg-gray-300 animate-pulse h-4 w-44" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSkeletonDesktop',
}
</script>

<style scoped>
.img-150px {
  width: 150px;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  min-height: 150px;
  max-height: 150px;
}
</style>
