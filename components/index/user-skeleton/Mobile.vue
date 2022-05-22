<template>
  <div class="p-4 flex md:hidden items-center gap-8 flex-row">
    <!-- photo -->
    <div class="box-center mb-4">
      <!-- mobile -->
      <div class="img-84px bg-gray-300 rounded-full animate-pulse" />
    </div>

    <div>
      <div class="w-10 pulse mb-2" />
      <div class="mb-2 break-words pulse w-28" />

      <div class="w-10 pulse mb-2" />
      <div class="mb-2 break-words pulse w-44" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSkeletonDesktop',
}
</script>

<style scoped>
.img-84px {
  width: 84px;
  min-width: 84px;
  max-width: 84px;
  height: 84px;
  min-height: 84px;
  max-height: 84px;
}
</style>
