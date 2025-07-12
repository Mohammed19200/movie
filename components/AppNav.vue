<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <!-- Mobile Dropdown -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li>
            <a>Pages</a>
            <ul class="p-2">
              <li><NuxtLink to="/movie">Movies</NuxtLink></li>
              <li><NuxtLink to="/tv-series">TV Series</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/people">People</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost text-xl">My TMDB</NuxtLink>
    </div>

    <!-- Desktop Menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>
          <details>
            <summary>Pages</summary>
            <ul class="p-2 z-40">
              <li><NuxtLink to="/movie">Movies</NuxtLink></li>
              <li><NuxtLink to="/tv-series">TV Series</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li><NuxtLink to="/movie">Movies</NuxtLink></li>
        <li><NuxtLink to="/tv-series">TV Series</NuxtLink></li>
        <li><NuxtLink to="/people">People</NuxtLink></li>
      </ul>
    </div>

    <!-- <div class="navbar-end">
      <a class="btn">Login</a>
    </div> -->
  </div>
</template>

<script setup>
// import { onMounted } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();

// onMounted(() => {
//   console.log(router.options.routes);
// });
</script>
