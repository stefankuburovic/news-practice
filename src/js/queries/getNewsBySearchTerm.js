import { useQuery } from 'react-query';
import axios from 'axios';

const getSearch = async (_, country, keyword) => {
    const { data } = await axios.get(
        `${process.env.REACT_APP_APP_URI}/top-headlines?country=${country}&q=${keyword}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
    );
    return data;
};

export default function usePosts(country, keyword) {
    return useQuery(['getSearch', country, keyword], getSearch);
}
