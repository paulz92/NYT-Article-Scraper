import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
  clickHandler = () => {
    API.getArticles('bush', null, null)
      .then(res => console.log(res.data.response.docs))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div onClick={this.clickHandler}>Hello World results</div>
    );
  }
}

export default Results;
