import React from 'react';

const well = (props) => (
  <div className="well" id={props.articleId}>
    <h3 className="articleHeadline">
      <span className="label label-primary">{props.number + 1}  </span>
      <strong>{props.headline}</strong>
    </h3>
    <h5>By: {props.author}</h5>
    <h5>Date: {props.date}</h5>
    <p> {props.summary}</p>
    <a href={props.URL} target="_blank">Visit Link!</a>
  </div>
);

export default well;