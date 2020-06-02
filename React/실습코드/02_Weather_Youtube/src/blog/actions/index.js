import axios from 'axios';

const ROOT_URL = `http://127.0.0.1:8800/api/blogs`;

export const FETCH_BLOG = 'FETCH_BLOG';

// redux action
// type (mandatory)
// payload (optional, data정보)

export async function fetchBlog() {
    const url = `${ROOT_URL}`
    const request = await axios.get(url);

    console.log("???????????");

    return{
        type: FETCH_BLOG,
        payload : request
    }
}

// https://api.openweathermap.org/data/2.5/forecast?appid=5cc6a6ef2a4fc377af4ad23a09ab618b&q=Seoul