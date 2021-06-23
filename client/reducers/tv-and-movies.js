import axios from 'axios';
import {TMDB_API_KEY_V3, LIST_ID} from '../../secrets'

export const getMedia = async () => {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/4/list/${LIST_ID}?api_key=${TMDB_API_KEY_V3}`, {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}