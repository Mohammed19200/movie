import { defineStore } from "pinia";

export const usetrendingStore = defineStore("trending", {
  state: () => ({}),
  getters: {},
  actions: {
    async all() {
      // day or week
      return useFetch(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
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
    async movies() {
      return useFetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
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
    async people() {
      return useFetch(
        "https://api.themoviedb.org/3/trending/person/day?language=en-US",
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
    async tv() {
      return useFetch(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
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
  },
});
