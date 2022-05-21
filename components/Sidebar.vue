<template>
  <nav class="bg-white px-4 pb-4 pt-8 w-64">
    <!-- links -->
    <NuxtLink
      v-for="link in links"
      :key="'sidebar-link-' + link.to"
      :to="link.to"
      class="block py-2 box-equal gap-x-4"
    >
      <!-- icon -->
      <client-only>
        <unicon
          :name="link.icon"
          :fill="$route.path === link.to ? '#33bdbf' : 'black'"
        />
      </client-only>

      <span>{{ link.text }}</span>
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'DefaultSidebar',
  computed: {
    links() {
      return [
        {
          to: '/beranda',
          icon: 'estate',
          text: 'Beranda',
        },
        {
          to: '/',
          icon: 'users-alt',
          text: 'Personnel List',
        },
        {
          to: '/schedule',
          icon: 'schedule',
          text: 'Daily Attendance',
        },
      ]
    },
  },
}
</script>

<style scoped>
.unicon svg {
  fill: #33bdbf;
}

a.nuxt-link-exact-active {
  color: #33bdbf;
  font-weight: bold;
}
</style>
