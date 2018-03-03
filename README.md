## NYT React Search
A web app which allows users to search the New York Times Articles API for a custom start/end date and read the 10 resulting articles that render. Users have the option to save articles and search for others as well. MongoDB persists the data. This app is built with the MERN stack.

Visit the deployed site [here](https://nyt-react-scraper-pz.herokuapp.com/)

## Motivation
To create an app for people wanting to search and read old and current news articles, and to do so utilizing MongoDB, Express.js, React.js, and Node.js.

## Tech/framework used
<b>Built with</b>
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://www.npmjs.com/package/express)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Mongoose](http://mongoosejs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
- [Axios](https://github.com/axios/axios)
- [React-Router](https://github.com/ReactTraining/react-router)
- HTML5, CSS3, Javascript(ES6)

## API Reference
- [New York Times Article Search API](https://developer.nytimes.com/article_search_v2.json)

## Installation
- Visit the deployed site [here](https://nyt-react-scraper-pz.herokuapp.com/) for immediate use.
- Otherwise, fork and clone the GitHub repo to your machine.
- Ensure that you have Node.js and MongoDB installed on your machine.
- Retrieve your personal NYT API key [here](https://developer.nytimes.com/)
- Start MongoDB locally by opening a CLI and entering the ```mongod``` command. Leave this CLI window open in the background.
- Starting at the root of the repo, go to client/src/utils/nyt/key.js and on line 1, replace 'YOURAPIKEY' with your api key.
- In a new CLI, navigate to the cloned directory. Install the npm dependencies and start the server.

    ```yarn```
    ```cd client```
    ```yarn```
    ```cd ..```
    ```yarn start```

- NYT Article Scraper runs locally on port 3000. Open your favorite web browser and enjoy!

## Credits
- UNC-CH Coding Boot Camp
- NYT Article Search API

## License
MIT © [paulz92](https://github.com/paulz92)