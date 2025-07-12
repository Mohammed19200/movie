import { defineStore } from "pinia";

export const usepeopleStore = defineStore("people", {
  state: () => ({}),
  getters: {},
  actions: {
    async Popular() {
      return useFetch(
        "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
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
