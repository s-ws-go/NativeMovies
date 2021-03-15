import Axios from "axios";

const TMDB_KEY = "f9fd7b5b380b16d49bec3a9239f19ac0";

const makeRequest = (path, params) => {
  Axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });
};

export const movieApi = () => {
    nowPlaying: () => makeRequest("/movie/now_playing"),
    popular : () => makeRequest("/movie/popular"),
    upcoming : () => makeRequest("/movie/upcoming", {region : "kr"}),
    search : query => makeRequest("/search/movie", query),
    movie : (id) => makeRequest(`/movie/${id}`),
    discover : () => makeRequest("/discover/movie"),
}

export const tvApi = () => {
  today: () => makeRequest("/tv/airing_today"),
  thisWeek: () => makeRequest("/tv/on_the_air"),
  topRated: () => makeRequest("/tv/top_rated"),
  popular: () => makeRequest("/tv/popular"),
  search: query => makeRequest("/search/tv", { query }),
  show: id => makeRequest(`/tv/${id}`)

};
