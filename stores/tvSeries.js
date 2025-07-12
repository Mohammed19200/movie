import { defineStore } from "pinia";

export const usetvSeriesStore = defineStore("tvSeries", {
  state: () => ({}),
  getters: {},
  actions: {
    async airing_today() {
      return useFetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
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
    async on_the_air() {
      return useFetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
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
    async top_rated() {
      return useFetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
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
    async popular() {
      return useFetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
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
