<template>
  <div class="hidden md:block p-2">
    <!-- photo -->
    <div class="box-center mb-4">
      <img
        v-show="imgOn"
        :src="user.picture.large"
        :alt="user.name.first + ' ' + user.name.last"
        class="rounded-full border w-84px md:w-150px"
        @load="imgOn = true"
      />

      <!-- loading placeholder (desktop) -->
      <div
        v-if="!imgOn"
        class="img-150px bg-gray-300 rounded-full animate-pulse"
      />
    </div>

    <div>
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
  name: 'UserDesktop',
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
.img-150px {
  width: 150px;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  min-height: 150px;
  max-height: 150px;
}
</style>
