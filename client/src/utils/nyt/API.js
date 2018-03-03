import axios from "axios";
import apiKey from "./key.js";

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;

export default {
  getArticles(query, beginYear, endYear) {
    const queryTerm = "&q=" + query;
    const beginDate = "&begin_date=" + beginYear + "0101";
    const endDate = "&end_date=" + endYear + "0101";
  
    let URL = queryTerm;
  
    if (beginYear && endYear) {
      URL += beginDate + endDate;
    } else if (beginYear) {
      URL += beginDate;
    } else if (endYear) {
      URL += endDate;
    }
    
    return axios.get(baseURL + URL);
  }
};