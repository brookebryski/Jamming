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
      playlistName: 'My Playlist',
      playlistTracks: [{ name: "playlistName1", artist: "playlistArtist1", album: "playlistAlbum1", id: 4 }, { name: "playlistName2", artist: "playlistArtist2", album: "playlistAlbum2", id: 5 }, { name: "playlistName3", artist: "playlistArtist3", album: "playlistAlbum3", id: 6 }]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 
    tracks.push(track);
    this.setState({playlistTracks: tracks})
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
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
