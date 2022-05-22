<template>
  <div class="bg-white rounded-lg">
    <!-- header -->
    <div class="p-2 border-b box-between">
      <div class="text-sm pulse w-44" />

      <!-- option / more btn -->
      <div class="w-6 pulse" />
    </div>

    <!-- user info (desktop) -->
    <Desktop />

    <!-- user info (mobile) -->
    <Mobile />
  </div>
</template>

<script>
import Desktop from './user-skeleton/Desktop.vue'
import Mobile from './user-skeleton/Mobile.vue'

export default {
  components: {
    Desktop,
    Mobile,
  },
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

.img-84px {
  width: 84px;
  min-width: 84px;
  max-width: 84px;
  height: 84px;
  min-height: 84px;
  max-height: 84px;
}
</style>
