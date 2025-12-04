export const exerciseDbUrl = 'https://exercisedb-api.vercel.app/api';

export const exerciseOptions = {
  method: 'GET',
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
