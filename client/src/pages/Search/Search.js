import React, { Component } from "react";
import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import Panel from '../../components/UI/Panel/Panel';
import ArticleWell from '../../components/ArticleWell/ArticleWell';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import API from "../../utils/API";

class Search extends Component {
  state = {
    labels: [
      { id: "Topic", val: "" },
      { id: "Start Year", val: "" },
      { id: "End Year", val: "" }
    ],
    results: [],
    showResults: false,
    error: ""
  }

  handleInputChange = ( event, id ) => {
    const labelIndex = this.state.labels.findIndex(label => label.id === id);
    const label = { ...this.state.labels[labelIndex] };
    label.val = event.target.value;
    const labels = [ ...this.state.labels ];
    labels[labelIndex] = label;
    this.setState({ labels: labels });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.labels[0].val, this.state.labels[1].val, this.state.labels[2].val)
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({ 
          results: res.data.response.docs,
          showResults: true 
        });
      })
      .catch(err => this.setState({ error: err.message }));
  } 

  render() {
    let searchResults = "Enter all fields to search posts.";
    if (this.state.showResults) {
      searchResults = this.state.results.map((article, index) => {
        return <ArticleWell
          key={article._id}
          articleId={article._id}
          number={index}
          headline={article.headline.main}
          author={article.source}
          date={article.pub_date}
          URL={article.web_url}
          summary={article.snippet} />
      });
    }
    return (
      <Aux>
        <Container>
          <Panel title="Search for Articles">
          <SearchForm 
            submit={this.handleFormSubmit} 
            changed={this.handleInputChange}
            labels={this.state.labels} />
          </Panel>
          <Panel title="Top Results">{searchResults}</Panel>
        </Container>
      </Aux>
    );
  }
}

export default Search;
