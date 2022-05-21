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

    <!-- data -->
    <section v-else class="grid grid-cols-4 mt-8 gap-4">
      <IndexUser
        v-for="(user, index) in usersShown"
        :key="'user-' + user.email + index"
        :user="user"
      />
    </section>

    <!-- if there's no data -->
    <p v-if="!loading && !users.length" class="mt-8">No data</p>

    <!-- pagination -->
    <div class="box-center mt-8 gap-x-4">
      <button :disabled="cut < 1" @click="prevPage">
        <span>&larr;</span>
        <span>Previous Page</span>
      </button>

      <button :disabled="cut > 23" @click="nextPage">
        <span>Next Page</span>
        <span>&rarr;</span>
      </button>
    </div>
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
      usersShown: [],
      // pagination
      cut: 0,
      until: 4,
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
    prevPage() {
      if (this.cut > 0) {
        this.usersShown = this.users.slice(this.cut - 4, this.until - 4)
        this.cut = this.cut - 4
        this.until = this.until - 4
      }
    },
    nextPage() {
      if (this.cut < 24) {
        this.usersShown = this.users.slice(this.cut + 4, this.until + 4)
        this.cut = this.cut + 4
        this.until = this.until + 4
      }
    },
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
        this.usersShown = res.data.results.slice(this.cut, this.until)
      } catch {
        this.error = 'Sorry, an error occurred while displaying data'
      }

      this.loading = false
    },
  },
}
</script>

<style scoped>
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
