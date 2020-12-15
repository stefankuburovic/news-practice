import { useQuery } from 'react-query';
import axios from 'axios';

const getTopNews = async (_, country) => {
    const { data } = await axios.get(
        `${process.env.REACT_APP_APP_URI}/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
    );
    return data;
};

export default function usePosts(country) {
    return useQuery(['getTopNews', country], getTopNews);
}
