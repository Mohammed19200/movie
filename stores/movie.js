import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => ({}),
  getters: {},
  actions: {
    async NowPlaying() {
      return useFetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2VjOWYyOGVlZTg3MTJkODllNzBiYTZhZDI1NTJlYiIsIm5iZiI6MTcxODY5ODQwMS4xMzQsInN1YiI6IjY2NzE0MWExMjQ1YjFiMGE3NzBkZjQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlPcfRsiUAzGdfxGUT1dcZqeEkH1eaujLQSF8z40Tvc",
          },
        }
      );
    },
    async Popular() {
      return useFetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2VjOWYyOGVlZTg3MTJkODllNzBiYTZhZDI1NTJlYiIsIm5iZiI6MTcxODY5ODQwMS4xMzQsInN1YiI6IjY2NzE0MWExMjQ1YjFiMGE3NzBkZjQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlPcfRsiUAzGdfxGUT1dcZqeEkH1eaujLQSF8z40Tvc",
          },
        }
      );
    },
    async TopRated() {
      return useFetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2VjOWYyOGVlZTg3MTJkODllNzBiYTZhZDI1NTJlYiIsIm5iZiI6MTcxODY5ODQwMS4xMzQsInN1YiI6IjY2NzE0MWExMjQ1YjFiMGE3NzBkZjQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlPcfRsiUAzGdfxGUT1dcZqeEkH1eaujLQSF8z40Tvc",
          },
        }
      );
    },
    async Upcoming() {
      return useFetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2VjOWYyOGVlZTg3MTJkODllNzBiYTZhZDI1NTJlYiIsIm5iZiI6MTcxODY5ODQwMS4xMzQsInN1YiI6IjY2NzE0MWExMjQ1YjFiMGE3NzBkZjQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlPcfRsiUAzGdfxGUT1dcZqeEkH1eaujLQSF8z40Tvc",
          },
        }
      );
    },
    async ChangeCategories(tmdbCategory) {
      return useFetch(
  `https://api.themoviedb.org/3/movie/${tmdbCategory}?language=en-US&page=1`,
  {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2VjOWYyOGVlZTg3MTJkODllNzBiYTZhZDI1NTJlYiIsIm5iZiI6MTcxODY5ODQwMS4xMzQsInN1YiI6IjY2NzE0MWExMjQ1YjFiMGE3NzBkZjQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlPcfRsiUAzGdfxGUT1dcZqeEkH1eaujLQSF8z40Tvc`,
    },
  }
);
    },
  },
});
