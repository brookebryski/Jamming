import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "Dissolving",
          artist: "Hannah Cohen",
          album: "Welcome Home",
          id: 1,
        },
        {
          name: "Paprika",
          artist: "Japenese Breakfast",
          album: "Jubilee",
          id: 2,
        },
        { name: "Drunk in LA", artist: "Beach House", album: "Seven", id: 3 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
