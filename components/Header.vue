<template>
  <header class="fixed inset-x-0 p-4 bg-white box-between">
    <!-- logo -->
    <NuxtLink to="/">
      <!-- img -->
      <img src="/logo.png" alt="Gadjian Logo" class="w-32" />
    </NuxtLink>

    <div class="box-equal gap-x-4">
      <!-- hello text -->
      <p>Hello, <b class="text-brand">Gadjian User</b></p>

      <button class="rounded-full overflow-hidden border border-black">
        <!-- photo -->
        <img src="https://picsum.photos/40" alt="User" width="40px" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',
}
</script>
