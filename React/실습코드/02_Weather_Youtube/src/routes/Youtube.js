import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from '../youtube_com/search_bar';
import VideoDetail from '../youtube_com/video_detail';
import VideoList from '../youtube_com/video_list';
import '../style/youtubestyle.css'

const API_KEY = 'AIzaSyDUQNBZPxK9I8y-u6Z7IsAwPH_neqi4jf8';

class Youtube extends Component {
    constructor(props) {
        super(props); // 부모의 생성자 함수를 호출 (Component)
    
        this.state = {
          videos: [],
          selectedVideo: null
        }
    
        this.videoSearch('surfboards');
      }
    
      videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
          this.setState({
            videos: data,
            selectedVideo: data[0]
          });
        });
      }
    
      handleSelect = (selectedVideo) => {
        this.setState({
          selectedVideo: selectedVideo
        });
      }
    
      render() {
        const _videoSearch = _.debounce((term) => {
          this.videoSearch(term)
        }, 300);
    
        return (
          <div>
            <SearchBar
              onSearchTermChange={_videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
          </div>
        );
      }
    }
    export default Youtube;

    // ReactDOM.render(<Youtube />, document.querySelector('.container'));