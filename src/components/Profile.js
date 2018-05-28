import React, { Component } from 'react';

class Profile extends Component {

  render() {
    const { artist } = this.props;

    if(artist) {
      return (
        <div className="Artist-profile">
          <img src={artist.picture_big} alt={artist.name} className="Artist-picture" />
          <div className="Artist-info">
            <div className="Artist-name">{artist.name}</div>
            <div className="Artist-fans">{artist.nb_fan} fans</div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
