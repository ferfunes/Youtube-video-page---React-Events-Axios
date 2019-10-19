import React from "react";
import { SearchBar } from "../Components/SearchBar";
import YouTube from "../apis/YouTube";

export class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await YouTube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}
