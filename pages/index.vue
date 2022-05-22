<template>
  <main class="min-h-screen p-4 md:p-8 w-full">
    <!-- search form, add personeel -->
    <IndexTitleBox />

    <!-- loading placeholder -->
    <section v-if="loading" class="grid md:grid-cols-4 mt-8 gap-4">
      <IndexUserSkeleton />
      <IndexUserSkeleton />
      <IndexUserSkeleton />
      <IndexUserSkeleton />
    </section>

    <!-- data -->
    <section v-else class="grid md:grid-cols-4 mt-8 gap-4">
      <IndexUser
        v-for="(user, index) in usersShown"
        :key="'user-' + user.email + index"
        :user="user"
      />
    </section>

    <!-- if there's no data -->
    <p
      v-if="!loading && !users.length && !error"
      class="mt-8"
      data-testid="nodata-desc"
    >
      No data
    </p>

    <!-- if there's an error -->
    <p v-if="error" class="mt-8 text-red-500" data-testid="err-desc">
      {{ error }}
    </p>

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
  head() {
    return {
      title: 'Personeel List | Gadjian',
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    prevPage() {
      if (this.cut > 0) {
        const cut = this.cut - 4
        const until = this.until - 4

        this.usersShown = this.users.slice(cut, until)
        this.cut = cut
        this.until = until
      }
    },
    nextPage() {
      if (this.cut < 24) {
        const cut = this.cut + 4
        const until = this.until + 4

        this.usersShown = this.users.slice(cut, until)
        this.cut = cut
        this.until = until
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
