import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 500,
        key: process.env.REACT_APP_GOOGLE_API_KEY
    }
})