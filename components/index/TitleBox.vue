<template>
  <section class="bg-white p-6 box-between">
    <div>
      <h1 class="text-2xl font-bold text-brand">PERSONEEL LIST</h1>
      <h2>List of all personeels</h2>
    </div>

    <div class="flex gap-x-4">
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
          class="border border-gray-200 p-3"
          :style="{ paddingLeft: '50px' }"
        />
      </div>

      <NuxtLink to="/add" class="bg-brand p-3 text-white box-equal gap-x-3">
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
