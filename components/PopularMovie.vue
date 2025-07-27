<template>
  <div>
    <h2 class="text-xl font-semibold capitalize mb-4">Popular</h2>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">❌ Error loading data.</div>
    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      <div
        v-for="movie in data.results"
        :key="movie.id"
        class="border rounded p-2 hover:shadow-md transition"
      >
        <NuxtImg
          class="w-full mb-2 rounded"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          format="webp"
        />

        <h3 class="text-sm font-medium">{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>

const store = useMovieStore();

await store.ChangeCategories();
const { data, pending, error } = await store.Popular();

console.log(data.value);
console.log(error.value);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Category Not Found",
    fatal: true,
  });
}
</script>
