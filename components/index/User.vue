<template>
  <div class="bg-white rounded-lg">
    <!-- header -->
    <div class="p-2 border-b box-between">
      <p class="text-sm">
        Personeel ID:
        <span class="text-brand">{{ user.login.salt }}</span>
      </p>

      <!-- option / more btn -->
      <button class="box-center">
        <!-- icon -->
        <client-only>
          <unicon name="ellipsis-h" />
        </client-only>
      </button>
    </div>

    <!-- user info (desktop) -->
    <Desktop :user="user" />

    <!-- user info (mobile) -->
    <Mobile :user="user" />
  </div>
</template>

<script>
import Desktop from './user/Desktop.vue'
import Mobile from './user/Mobile.vue'

export default {
  name: 'IndexUser',
  components: {
    Desktop,
    Mobile,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
