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

    <!-- user info -->
    <div class="p-2">
      <!-- photo -->
      <div class="box-center mb-4">
        <img
          v-show="imgOn"
          :src="user.picture.large"
          :alt="user.name.first + ' ' + user.name.last"
          width="150px"
          class="rounded-full border"
          @load="imgOn = true"
        />

        <!-- loading placeholder -->
        <div
          v-if="!imgOn"
          class="img-skeleton bg-gray-300 rounded-full animate-pulse"
        />
      </div>

      <small class="font-bold">Name</small>
      <p class="mb-2 break-words">{{ user.name.first }} {{ user.name.last }}</p>

      <small class="font-bold">Telephone</small>
      <p class="mb-2 break-words">{{ user.phone }}</p>

      <small class="font-bold">Birthday</small>
      <p class="mb-2 break-words">
        {{ $dayjs(user.registered.date).format('DD-MM') }}
      </p>

      <small class="font-bold">Email</small>
      <p class="break-words">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexUser',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgOn: false,
    }
  },
}
</script>

<style scoped>
.img-skeleton {
  width: 150px;
  height: 150px;
}
</style>
