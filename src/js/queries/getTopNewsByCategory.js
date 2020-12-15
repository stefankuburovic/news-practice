import { useQuery } from 'react-query';
import axios from 'axios';

const getTopNewsByCategory = async (_, country, category, pageSize) => {
    const { data } = await axios.get(
        `${process.env.REACT_APP_APP_URI}?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
    );

    return data;
};

export default function usePosts(country, category, pageSize) {
    return useQuery(['getTopNewsByCategory', country, category, pageSize], getTopNewsByCategory);
}
