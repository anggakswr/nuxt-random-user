<template>
  <header class="fixed z-10 inset-x-0 p-2 md:p-4 bg-white box-between">
    <div class="box-equal gap-x-4">
      <!-- hamburger btn -->
      <button class="box-center">
        <!-- icon -->
        <client-only>
          <unicon name="bars" />
        </client-only>
      </button>

      <!-- logo -->
      <NuxtLink to="/">
        <!-- img -->
        <img src="/logo.png" alt="Gadjian Logo" class="w-16 md:w-32" />
      </NuxtLink>
    </div>

    <div class="box-equal gap-x-4">
      <!-- hello text -->
      <p class="hidden md:block">
        Hello, <b class="text-brand">Gadjian User</b>
      </p>

      <button class="rounded-full overflow-hidden border">
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
