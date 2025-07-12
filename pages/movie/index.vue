<template>
  <div>
    <h1>movie page</h1>
 

  <div class="flex gap-4">
    <nuxt-link :to="{ name: 'movie-category', params: { category: 'popular' } }" class="btn">Popular</nuxt-link>
    <nuxt-link :to="{ name: 'movie-category', params: { category: 'now_playing' } }" class="btn">Now Playing</nuxt-link>
    <nuxt-link :to="{ name: 'movie-category', params: { category: 'top_rated' } }" class="btn">Top Rated</nuxt-link>
    <nuxt-link :to="{ name: 'movie-category', params: { category: 'upcoming' } }" class="btn">Upcoming</nuxt-link>
  </div>

    <NuxtPage/>


  </div>
</template>

<script setup>

import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  console.log(router.options.routes);
});

// const store = useMovieStore();
// console.log(store);

// const { data: d_NowPlaying, pending: p_NowPlaying, error: e_NowPlaying } = await store.NowPlaying();
// const { data: d_Popular, pending: p_Popular, error: e_Popular } = await store.Popular();
// const { data: d_TopRated, pending: p_TopRated, error: e_TopRated } = await store.TopRated();
// const { data: d_Upcoming, pending: p_Upcoming, error: e_Upcoming } = await store.Upcoming();
// console.log(d_NowPlaying.value);
// console.log(d_Popular.value);
// console.log(d_TopRated.value);
// console.log(d_TopRated.value);
// console.log(d_Upcoming.value);


// console.log(d_NowPlaying.value);
// console.log(d_Popular.value);
// console.log(d_TopRated.value);
// console.logd_Upcoming.value);

// console.log(d_NowPlaying.value);
// console.log(d_Popular.value);
// console.log(d_TopRated.value);
// console.logd_Upcoming.value);

// console.log(d_NowPlaying.value);
// console.log(d_Popular.value);
// console.log(d_TopRated.value);
// console.logd_Upcoming.value);
</script>
