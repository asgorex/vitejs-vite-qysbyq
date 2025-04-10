import axios from 'axios';

class ApiService {
  getMovies({ language, apiKey, listType }: { language: string; apiKey: string, listType: string }) {
    const url = `https://api.themoviedb.org/3/movie/${listType}?language=${language}&api_key=${apiKey}`;

    return axios.get(url);
  }
}

export default new ApiService();
