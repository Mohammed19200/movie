<template>
  <div>
    <h2 class="text-xl font-semibold capitalize mb-4">
      {{ category.replace('-', ' ') }}
    </h2>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">❌ Error loading data.</div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div
        v-for="movie in data.results"
        :key="movie.id"
        class="border rounded p-2 hover:shadow-md transition"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          class="w-full mb-2 rounded"
        >
        <h3 class="text-sm font-medium">{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useFetch, useRuntimeConfig } from '#app'

const route = useRoute()
const config = useRuntimeConfig()

const category = route.params.category

// TMDB category mapping
const categoryMap = {
  'now_playing': 'now_playing',
  'popular': 'popular',
  'top_rated': 'top_rated',
  'upcoming': 'upcoming'
}

const tmdbCategory = categoryMap[category]

// حماية: إذا التصنيف غير معروف
if (!tmdbCategory) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}

// جلب البيانات من TMDB
const { data, pending, error } = await useFetch(
  `https://api.themoviedb.org/3/movie/${tmdbCategory}?language=en-US&page=1`,
  {
    headers: {
      Authorization: `Bearer ${config.public.tmdbAccessToken}`
    }
  }
)
</script>
