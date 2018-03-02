import React, { Component } from "react";
import {Container} from '../../components/Grid';
import SearchForm from '../../components/SearchForm/SearchForm';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import API from "../../utils/API";

class Search extends Component {
  state = {
    labels: [
      { id: "Topic", val: "" },
      { id: "Start Year", val: "" },
      { id: "End Year", val: "" },
      { id: "Number of Results", val: 5 }
    ],
    results: [],
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
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => {
        console.log(res.data.response.docs)
        this.setState({ results: res.data.response.docs, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  } 

  render() {
    return (
      <Aux>
        <Container>
          <SearchForm 
            submit={this.handleFormSubmit} 
            changed={this.handleInputChange}
            labels={this.state.labels} />
        </Container>
      </Aux>
    );
  }
}

export default Search;
