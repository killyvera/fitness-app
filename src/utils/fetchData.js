export const exerciseDbUrl = process.env.REACT_APP_EXERCISEDB_URL || 'https://exercisedb-api.vercel.app/api';

export const exerciseOptions = {
  method: 'GET',
};

export const youtubeSearchUrl = process.env.REACT_APP_YOUTUBE_SEARCH_URL || 'https://youtube-search-and-download.p.rapidapi.com';

export const youtubeOptions = () => {
  const headers = { 'X-RapidAPI-Host': new URL(youtubeSearchUrl).host };
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  if (apiKey) {
    headers['X-RapidAPI-Key'] = apiKey;
  }

  return {
    method: 'GET',
    headers,
  };
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
};
