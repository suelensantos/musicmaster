import React, { Component } from 'react';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      artist: null,
      trackList: []
    };
  }

  // aqui são feitos os fetchs para receber os dados do artista escolhido na busca,
  // assim como mostrar a track list desse artista
  searchArtist() {
    const proxy_url = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://api.deezer.com/search';
    const fetch_artist = `${proxy_url}/${url}/artist?q=${this.state.input}`; // exemplo => https://api.deezer.com/search/artist?q=brunomars

    console.log("URL", fetch_artist)

    fetch(fetch_artist, {mode: 'cors'})
      .then(response => response.json())
      .then(data_json => {
        console.log(data_json); //
        this.setState({artist: data_json.data[0]});

        console.log("Artist Json", data_json.data[0]); //
        console.log("Query", this.state.input); //
        console.log("Artist", this.state.artist); //
        console.log("Tracklist", this.state.artist.tracklist); //

        const fetch_trackList = `${proxy_url}/${this.state.artist.tracklist}`;

        fetch(fetch_trackList, {mode: 'cors'})
          .then(response => response.json())
          .then(data_json => {
            console.log(data_json); //
            this.setState({trackList: data_json.data});
          })
          .catch(error => {
            console.log("Error to fetch track list! >>> ", error);
          });
      })
      .catch(error => {
        console.log("Error to fetch artist! >>> ", error);
      });
  }

  // muda o valor do input que representa o artista inserido pelo usuário no campo de texto
  change = (event) => {
    this.setState({input: event.target.value});
  }

  // o usuário pressiona a tecla Enter do teclado
  keyPress = (event) => {
    if(event.key === 'Enter') {
      this.searchArtist();
    }
  }

  // o elemento de busca do formulário é clicado pelo usuário
  click = () => {
    this.searchArtist();
  }

  showComponents() {
    if(this.state.artist) {
      return (
        <div>
          <Profile artist={this.state.artist} />
          <Gallery trackList={this.state.trackList} />
        </div>
      )
    } else {
      return ( null )
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-title">Music Master</div>
          <FormGroup>
            <InputGroup>
              <FormControl
                placeholder="Search for an artist"
                type="text"
                value={this.state.input}
                onChange={this.change}
                onKeyPress={this.keyPress}
              />
              <InputGroup.Addon onClick={this.click}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </div>
        {this.showComponents()}
      </div>
    );
  }
}

export default App;
