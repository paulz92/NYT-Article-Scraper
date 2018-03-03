import React, { Component } from "react";
import Container from '../../components/Container/Container';
import Panel from '../../components/UI/Panel/Panel';
import ArticleWell from '../../components/ArticleWell/ArticleWell';
import myAPI from "../../utils/api/API";

class SavedArticles extends Component {
  state = {
    savedArticles: []
  }

  componentDidMount() {
    this.getArticlesHandler();
  }

  getArticlesHandler() {
    myAPI.getArticles()
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err));
  }

  deleteArticleHandler = ( event, id ) => {
    myAPI.deleteArticle(id)
      .then(res => this.getArticlesHandler())
      .catch(err => console.log(err));
    }

  render() {

    let saved = <p>There seems to be nothing here, go save some articles!</p>

    if (this.state.savedArticles.length > 0) {
      saved = this.state.savedArticles.map((article, index) => {
        return <ArticleWell
          key={article._id}
          articleId={article._id}
          headline={article.title}
          author={article.author}
          date={article.dateOfArticle}
          URL={article.URL}
          summary={article.summary}
          action={this.deleteArticleHandler}
          title="Remove from saved" />
      });
    }

    return (
      <Container>
        <Panel title="Saved Articles">
         {saved}
        </Panel>
      </Container>
    )
  }
}

export default SavedArticles;