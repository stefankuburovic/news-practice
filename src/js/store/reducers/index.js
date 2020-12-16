import { combineReducers } from 'redux';
import topHeadlinesReducer from './topHeadlinesReducer';
import topHeadlinesByCategory from './topHeadlinesByCategory';
import headlinesBySearchTermReducer from './topHeadlinesBySearchTermReducer';

const rootReducer = combineReducers({
    topHeadlines: topHeadlinesReducer,
    topHeadlinesByCategory: topHeadlinesByCategory,
    getBySearchTerm: headlinesBySearchTermReducer,
});

export default rootReducer;
