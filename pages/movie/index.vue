<template>
  <div>
    <h1>movie page</h1>

  <div class="flex !flex-column !flex-wrap !justify-center gap-4 ">
    <button  class="btn" @click="change ='PopularMovie'"> Popular Movie</button>
    <button  class="btn" @click="change = 'NowPlaying'">Now Playing</button>
    <button  class="btn" @click="change = 'UpcomingMovie'">UpcomingMovie</button>
    <button  class="btn" @click="change = 'TopRated'">Top Rated</button>
  </div>

<keep-alive>
  <component :is="currentComponent" />
</keep-alive>

  </div>
</template>

<script setup>

import PopularMovies from '@/components/PopularMovie.vue'
import TopRated from '@/components/TopRated.vue'
import UpcomingMovie from '@/components/UpcomingMovie.vue'
import NowPlaying from '@/components/NowPlaying.vue'

const change=ref('PopularMovie')


const currentComponent = computed(() => {
  switch (change.value) {
    case 'PopularMovies':
      return PopularMovies
    case 'NowPlaying':
      return NowPlaying
    case 'TopRated':
      return TopRated
    case 'UpcomingMovie':
      return UpcomingMovie
    default:
      return PopularMovies
  }
})

</script>
