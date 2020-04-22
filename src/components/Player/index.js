import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'

import { Button } from './Styles';

class Player extends Component {
  state = {
    currentPlayList: {}
  }
 
  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://www.netclipart.com/pp/m/10-102017_beer-mug-vector-by-checonx-beer-cheers-vector.png',
        playlistName: 'Arinha Bar',  
        bandName: 'Só as melhores!',
        songs: [
          {
            position: '1',
            songName: 'Playlist 80s',
            songUrl: 'http://hits80s.stream.laut.fm/hits_80s?t302=2020-02-22_05-46-26&uuid=ffe4196a-5d51-4946-9a23-091b7cfcea5a'
            // songUrl: 'http://stm9.srvstm.com:13544/;'
          }
        ],
        type: 'album'
      }
    })
 
  render() {
    return (
      <div>
        <Button onClick={this.loadPlayList}>
          PLAY
        </Button>
        <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
      </div>
    )
  }
}

export default Player;