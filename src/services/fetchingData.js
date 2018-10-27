const API_KEY = "340af08aad86d2a893fef0bc25ea615d";
const API_URL = "https://api.themoviedb.org/3/";
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

export const fetchData = options => {
  const type = options.type;
  const searchOptions = {
    movie: "search/movie",
    discoverMovies: "discover/movie",
    popularPerson: "person/popular"
  };
  const genres = options.genres || "";
  const query = options.query || "";
  const page = options.page || "1";
  const sortBy = options.sortBy || "popularity.desc";
  const adult = options.adult || true;
  const URL = `${API_URL}${
    searchOptions[type]
  }?api_key=${API_KEY}&page=${page}&sort_by=${sortBy}&query=${query}&with_genres=${genres}&include_adult=${adult}`;
  const fetchRes = fetch(URL).then(response => response.json());

  return fetchRes;
};
