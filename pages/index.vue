<template>
  <main class="min-h-screen p-8 w-full">
    <p v-if="error" class="text-red-500">
      {{ error }}
    </p>

    <!-- search form, add personeel -->
    <IndexTitleBox />

    <!-- loading placeholder -->
    <section v-if="loading" class="grid grid-cols-4 mt-8 gap-4">
      <IndexUserSkeleton />
      <IndexUserSkeleton />
      <IndexUserSkeleton />
      <IndexUserSkeleton />
    </section>

    <section v-else class="grid grid-cols-4 mt-8 gap-4">
      <IndexUser
        v-for="(user, index) in users"
        :key="'user-' + user.email + index"
        :user="user"
      />
    </section>

    <p v-if="!loading && !users.length" class="mt-8">No data</p>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      loading: false,
      error: '',
      users: [],
    }
  },
  fetch() {
    this.getUsers()
  },
  head() {
    return {
      title: 'Personeel List | Gadjian',
    }
  },
  methods: {
    async getUsers() {
      this.error = ''
      this.loading = true

      try {
        const res = await this.$axios.get('/api/', {
          params: {
            results: 28,
          },
        })

        this.users = res.data.results
      } catch {
        this.error = 'Sorry, an error occurred while displaying data'
      }

      this.loading = false
    },
  },
}
</script>
