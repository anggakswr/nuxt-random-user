<template>
  <main class="min-h-screen p-8 w-full">
    <p v-if="error" class="text-red-500">
      {{ error }}
    </p>

    <!-- search form, add personeel -->
    <IndexTitleBox />

    <!-- <div v-for="(user, index) in users" :key="'user-' + user.email + index">
      emp
    </div> -->
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
      title: 'Personnel List | Gadjian',
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
