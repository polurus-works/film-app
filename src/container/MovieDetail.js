// Dependencies core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getSingleMovie } from '../helpers/api';
import Carousel from '../components/Carousel.js';
class MovieDetail extends Component {
  state = {
    loading: false,
    data: []
  };

  toggleLoading(){
    this.setState({ loading: !this.state.loading });
  };

  async componentDidMount() {
    this.toggleLoading();
    const { id } = this.props.match.params;
    const data = await getSingleMovie(id);
    this.setState({
      loading: false,
      data:data,
    });
  }


  render() {
    const {
      loading,
      data
    } = this.state;
    
    let charArr = [];
    let speciesArr = [];
     data.map((item) => {
      if(item){
        charArr.push(item.name);
        speciesArr.push(item.species_name);
      }
      return {
          charArr: charArr,
          speciesArr: speciesArr
        }
    })
    //console.log('charArr', charArr);
    //console.log('speciesArr', speciesArr);
    return (
      <div>
        {loading ? (<div>Loading data...</div>) :  
          (<div id="banner"><Carousel items={charArr} characterId={speciesArr} pageId="2" active={0}/></div>)
        }     
      </div> 
    );
  }
}
MovieDetail.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  characterId: PropTypes.arrayOf(PropTypes.number)
};
export default MovieDetail;