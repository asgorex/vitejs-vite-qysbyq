import apiService from '../services/api.service';
import { useEffect, useState } from 'react';
import Card from './Card';

export default function Movies() {
  // const _baseImgUrl = 'https://image.tmdb.org/t/p/w780';
  // const apiKey = 'apiKey = '1b501bbda107113acc653f328a2e935d';
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState('en');
  const [listType, setListType] = useState('popular');
  const [selectedRule, setSelectedRule] = useState('fibonacci');

  useEffect(() => {
    const apiKey = '1b501bbda107113acc653f328a2e935d';
    apiService
      .getMovies({
        language,
        apiKey,
        listType
      })
      .then((response) => {
        console.log('Response', response.data);
        setMovies(response.data.results);
        setListType(listType);
      });
  }, [language, listType]);

  const getYear = (date: string) => {
    const year = date.split('-')[0];
    return year;
  }


  // I will use the keyIndex + 1 of the map to change color of the background of the movie card
  return (
    <div>
      <div>
        <div>
            Category: 
            <select
              name="Category" value={listType} 
              onChange={e => setListType(e.target.value)}
              >
              <option value="popular">Popular</option>
              <option value="now_playing">Now Playing</option>
              <option value="top_rated">Top Rated</option>
              <option value="upcoming">Upcoming</option>
            </select>
        </div>
        <div>
          <div>
            Language:
            <select
              name="Language" value={language} 
              onChange={e => setLanguage(e.target.value)}
              >
              <option value="en">English</option>
              <option value="es">Espanol</option>
            </select>
          </div>
          <div>
            Rule:
            <select
              name="Rules" value={selectedRule} 
              onChange={e => setSelectedRule(e.target.value)}
              >
              <option value="fibonacci">Fibonacci</option>
              <option value="prime">Prime</option>
              <option value="oddEven">Odd/Even</option>
            </select>
          </div>
        </div>
      </div>
      {movies.map((movie, key)=>{return <Card image={movie.poster_path} title={movie.title} year={getYear(movie.release_date)} num={key+1} rule={selectedRule} overview={movie.overview}></Card>})}
    </div>
  );
}
