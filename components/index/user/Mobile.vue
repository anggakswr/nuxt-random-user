<template>
  <div class="p-4 flex md:hidden items-center gap-8 flex-row">
    <!-- photo -->
    <div class="box-center mb-4">
      <img
        v-show="imgOn"
        :src="user.picture.large"
        :alt="user.name.first + ' ' + user.name.last"
        class="rounded-full border w-84px md:w-150px"
        @load="imgOn = true"
      />

      <!-- loading placeholder (mobile) -->
      <div
        v-if="!imgOn"
        class="img-84px bg-gray-300 rounded-full animate-pulse"
      />
    </div>

    <div>
      <small class="font-bold">Name</small>
      <p class="mb-2 break-words">{{ user.name.first }} {{ user.name.last }}</p>

      <small class="font-bold">Telephone</small>
      <p class="mb-2 break-words">{{ user.phone }}</p>

      <div class="hidden md:inline-block">
        <small class="font-bold">Birthday</small>
        <p class="mb-2 break-words">
          {{ $dayjs(user.registered.date).format('DD-MM') }}
        </p>

        <small class="font-bold">Email</small>
        <p class="break-words">{{ user.email }}</p>
      </div>
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
.img-84px {
  width: 84px;
  min-width: 84px;
  max-width: 84px;
  height: 84px;
  min-height: 84px;
  max-height: 84px;
}
</style>
