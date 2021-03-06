import React from "react";
import "./MyBooks.css";

export default class MyBooks extends React.Component {
  render() {
    return (
      <div className="my-book-area">
        <img
          src={this.props.image}
          id="my-book-images"
          alt="reading-list-images"
        />
        <p>Title: {this.props.title}</p>
        <p>Author: {this.props.author ? this.props.author : "N/A"}</p>
        <p>Publisher: {this.props.publisher ? this.props.publisher : "N/A"}</p>
      </div>
    );
  }
}
