import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyCy4zpkQF_ktqDrh4qNmsdvFnTyTsxEBak';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
       videos: [],
       selectedVideo: null
      };

      this.videoSearch ('tokyo ghoul');
  }

  videoSearch(term){

    YTSearch({
      key: API_KEY,
      term: term }, 
      //callback function: data calls with the videos
         (videos) => {
          this.setState({ 
            videos: videos,
            selectedVideo: videos[0]
          });
          //this.setState({videos: videos}) same variable name
    });
  }

 render(){

  const videoSearch = _.debounce((term) => {this.videoSearch(term), 300});
 return(
      <div>
      <SearchBar
      onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      //calls below fnction, selected video on app will then update. 
      //Pass function to video list as a property
       onVideoSelect={selectedVideo => this.setState({selectedVideo})}
       videos={this.state.videos}/>
       </div>
      );
   }
}

//Take this componenet's generated HTML and put it
//on the page (in the DOM)
ReactDOM.render( 
  <App />, document.querySelector('.container'));