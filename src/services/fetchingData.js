const API_KEY = "340af08aad86d2a893fef0bc25ea615d";

export const GENRES = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];

export const fetchData = (query, searchBy) => {
  if ((searchBy = "byTitle")) {
    const FETCH_URL = "https://api.themoviedb.org/3/search/movie?";
    return fetch(`${FETCH_URL}api_key=${API_KEY}&query=${query}&page=1`).then(
      response => response.json()
    );
  } else if ((searchBy = "byGenres")) {
    const FETCH_URL = "https://api.themoviedb.org/3/discover/movie?";
    return fetch(
      `${FETCH_URL}api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${query}`
    ).then(response => response.json());
  }
};
