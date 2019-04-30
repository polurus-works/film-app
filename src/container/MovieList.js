

// Dependencies core
import React, { Component } from 'react';
import { getAllMovie } from '../helpers/api';
import Carousel from '../components/Carousel.js';
import PropTypes from 'prop-types';
class MovieList extends Component {
  state = {
    loading: false,
    movieList: [],
  };

  toggleLoading () {
    this.setState({ loading: !this.state.loading });
  };

  async componentDidMount() {
    this.toggleLoading();
    const movieData = await getAllMovie();
    this.setState({
      loading: false,
      movieList: movieData,
    });
  }


  render() {
    const { loading, movieList } = this.state;
    let titlesArr = [];
    let charIdArry = [];
    movieList.map((item) => {
    	charIdArry.push(item.id);
        titlesArr.push(item.title);
        return {
        	titlesArr: titlesArr,
        	charIdArry: charIdArry
        }
    })
    //console.log('charIdArry', charIdArry);
    //console.log('titlesArr', titlesArr);
    return (
    	<div>
        {loading ? (<div>Loading data...</div>) :  
          (<div><Carousel items={titlesArr} characterId={charIdArry} active={0}/></div>)
        }     
      </div>
    );
  }
}
MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  characterId: PropTypes.arrayOf(PropTypes.string)
};

export default MovieList;