<template>
  <main>
    <div>emp</div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      loading: false,
    }
  },
  fetch() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      this.loading = true

      try {
        const res = await this.$axios.get('/', {
          params: {
            results: 28,
          },
        })

        console.log('get users', res.data)
      } catch {
        //
      }

      this.loading = false
    },
  },
}
</script>
