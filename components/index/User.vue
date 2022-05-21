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
    <div
      class="p-4 md:p-2 flex items-center gap-8 md:gap-0 flex-row md:flex-col"
    >
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
          class="hidden md:block img-150px bg-gray-300 rounded-full animate-pulse"
        />

        <!-- loading placeholder (mobile) -->
        <div
          v-if="!imgOn"
          class="md:hidden img-84px bg-gray-300 rounded-full animate-pulse"
        />
      </div>

      <div>
        <small class="font-bold">Name</small>
        <p class="mb-2 break-words">
          {{ user.name.first }} {{ user.name.last }}
        </p>

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
