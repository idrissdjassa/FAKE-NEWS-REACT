import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="banner-box-outer">
          <div id="banner-overlay">
            <h1>Breaking News!</h1>
            <p>  </p>
          </div>
          <img
            id="banner"
            src="https://source.unsplash.com/random"
            height="300"
            width="500"
            alt="a random banner from unsplash.com"
          />
        </div>

        <div id="banner-description">
          <p>
          </p>
        </div>
        <h1 id='news-list-container-title'>Hot Stories of the Day</h1>
        <section id="news-list-container-inner">
          {this.props.articles.map((article) => (
            <NewsItem articles={article} key={article.id} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default NewsList;
