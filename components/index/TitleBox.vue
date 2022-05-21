<template>
  <section
    class="bg-white p-2 md:p-6 flex md:items-center md:justify-between flex-col md:flex-row"
  >
    <div class="mb-4 md:mb-0">
      <h1 class="text-2xl font-bold text-brand">PERSONEEL LIST</h1>
      <h2>List of all personeels</h2>
    </div>

    <div class="flex gap-4 flex-col md:flex-row">
      <div class="relative">
        <div class="absolute inset-y-0 box-equal pl-3">
          <!-- icon -->
          <client-only>
            <unicon name="search" fill="#33bdbf" />
          </client-only>
        </div>

        <input
          type="text"
          placeholder="Find a personeel"
          class="border border-gray-200 p-3 w-full md:w-auto"
          :style="{ paddingLeft: '50px' }"
        />
      </div>

      <NuxtLink to="/add" class="bg-brand p-3 text-white box-between gap-x-3">
        ADD PERSONEEL

        <client-only>
          <unicon name="plus" fill="white" />
        </client-only>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {}
</script>
