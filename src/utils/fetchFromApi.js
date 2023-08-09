const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';
const Url = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};

const FetchFromApi = (url = "") => {
	return fetch(`${BASE_URL}${url}`,options)
		.then(res => res.json());
};

export default FetchFromApi;