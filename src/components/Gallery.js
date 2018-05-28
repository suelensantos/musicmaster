import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      audio: null,
      playingURL: "" // compara, através do preview, qual música está sendo tocada, anterior ou atual.
    };
  }

  playAudio(previewURL) {
    const audio = new Audio(previewURL);
    console.log("Audio", audio); //

    // play da música desejada foi acionado - saída true do playing
    if(!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        audio: audio,
        playingURL: previewURL
      });
    } else { // play da música desejada não foi acionado - saída false do playing
      if(this.state.playingURL === previewURL) { // pause da música desejada foi acionado
        console.log("PlayingURL", this.state.playingURL); //
        console.log("Audio", this.state.audio); //

        this.state.audio.pause();
        this.setState({
          playing: false,
          audio: audio,
          playingURL: ""
        });
      } else { // play de outra música desejada foi acionado, mudando assim o previewURL, enquanto a música desejada (anterior) ainda toca
        console.log("PlayingURL", this.state.playingURL); //
        console.log("PreviewURL", previewURL); //
        console.log("Audio", this.state.audio); //

        this.state.audio.pause(); // pause da música desejada (anterior) que ainda tocava
        audio.play(); // play de outra música desejada acionado
        this.setState({
          playing: true,
          audio: audio,
          playingURL: previewURL
        });
      }
    }
  }

  // o elemento play da música é clicado pelo usuário
  click(track) {
    this.playAudio(track.preview);
  }

  trackIcon(track) {
    return (
      this.state.playingURL === track.preview ? <span>&#10073; &#10073;</span> : <span>&#9654;</span>
      // this.state.playingURL === track.preview && this.state.playing
    )
  }

  render() {
    const { trackList } = this.props;

    if(trackList) {
      return (
        <div className="Gallery">
          {trackList.map((track, key) => {
            return (
              <div key={key} className="track" onClick={() => this.click(track)}>
                <img src={track.album.cover_big} className="track-img" alt="track" />
                <div className="track-icon">
                  <div className="track-icon-text">
                    {this.trackIcon(track)}
                  </div>
                </div>
                <p className="track-title">{track.title_short}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Gallery;
