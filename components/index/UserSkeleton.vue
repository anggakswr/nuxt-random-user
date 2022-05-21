<template>
  <div class="bg-white rounded-lg">
    <!-- header -->
    <div class="p-2 border-b box-between">
      <div class="text-sm bg-gray-300 animate-pulse h-4 w-44" />

      <!-- option / more btn -->
      <div class="h-4 w-6 bg-gray-300 animate-pulse" />
    </div>

    <!-- user info -->
    <div class="p-2">
      <!-- photo -->
      <div class="box-center mb-4">
        <div class="img-skeleton bg-gray-300 rounded-full animate-pulse" />
      </div>

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
export default {}
</script>

<style scoped>
.img-skeleton {
  width: 150px;
  height: 150px;
}
</style>
