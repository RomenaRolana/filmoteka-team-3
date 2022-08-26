import axios from 'axios';
import { refs } from './refs'

async function fetchData() {
  const parametrs = new URLSearchParams({
    media_type: "movie",
    api_key: `${refs.API_KEY}`,
    page: 1,
  });
  const response = await axios.get(`${refs.POPULAR_URL}?${parametrs}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

// fetchData();
