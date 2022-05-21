<template>
  <div class="bg-white rounded-lg">
    <!-- header -->
    <div class="p-2 border-b box-between">
      <div class="text-sm bg-gray-300 animate-pulse h-4 w-44" />

      <!-- option / more btn -->
      <div class="h-4 w-6 bg-gray-300 animate-pulse" />
    </div>

    <!-- user info -->
    <div
      class="p-4 md:p-2 flex items-center gap-8 md:gap-0 flex-row md:flex-col"
    >
      <!-- photo -->
      <div class="box-center mb-4">
        <!-- desktop -->
        <div
          class="hidden md:block img-150px bg-gray-300 rounded-full animate-pulse"
        />

        <!-- mobile -->
        <div
          class="md:hidden img-84px bg-gray-300 rounded-full animate-pulse"
        />
      </div>

      <div>
        <div class="h-4 w-10 bg-gray-300 animate-pulse mb-2" />
        <div class="mb-2 break-words bg-gray-300 animate-pulse h-4 w-28" />

        <div class="h-4 w-10 bg-gray-300 animate-pulse mb-2" />
        <div class="mb-2 break-words bg-gray-300 animate-pulse h-4 w-44" />

        <div class="hidden md:block">
          <div class="h-4 w-20 bg-gray-300 animate-pulse mb-2" />
          <div class="mb-2 break-words bg-gray-300 animate-pulse h-4 w-10" />

          <div class="h-4 w-12 bg-gray-300 animate-pulse mb-2" />
          <div class="break-words bg-gray-300 animate-pulse h-4 w-44" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

.img-84px {
  width: 84px;
  min-width: 84px;
  max-width: 84px;
  height: 84px;
  min-height: 84px;
  max-height: 84px;
}
</style>
