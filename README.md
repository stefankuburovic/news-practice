# News App Widget

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Scripts

- #### `npm start` - Run project
- #### `npm lint` - Code Formatting
- #### `npm lint-check` - Checking if there are warnings and errors 
- #### `npm test` - Run tests

### Important Packages that are used

- #### `react-intl` - Used for translations and internationalization of project
- #### `enzyme` - Testing
- #### `react-query, axios` - Data Fetching
- #### `eslint, prettier` - Code Formatting

### Description about project

I called this project news widget, I understood it like small app that can be integrated into other projects, 
that is why I didn't use routing. 

I used `react-intl` for internationalization and translations some part of project like menu items, error messages and categories, 
actually I didn't translate categories, I will do that right now. :)

Also used `enzyme, jest` for creating tests I created two tests `App.test.js` and `Header.test.js`, those are plain tests that are
checking if component is mounted. I haven't done much tests at previous work but I am familiar with concept of it.

In this example I used `react-query` and `axios`, but also there is example where I used `react-redux` that I will sent also with this project.
Why I used here `react-query`? I worked on it in last project, and I think it is good to use it, not much configuration needed and use of it is good
for this example since it does refresh at some interval, and checking for new items.

And also `eslint` and `prettier` for code formatting.