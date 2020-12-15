import { useQuery } from 'react-query';
import axios from 'axios';

const getCategories = async (_, country, category) => {
    const { data } = await axios.get(
        `${process.env.REACT_APP_APP_URI}/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
    );

    return data;
};

export default function usePosts(country, category) {
    return useQuery(['getCategories', country, category], getCategories);
}
