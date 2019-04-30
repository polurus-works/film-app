import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Item extends Component {
  constructor(props) {
        super(props)
        this.state = {
            level: this.props.level,
            getFilms: []
        }
    }
    render() {
    	const className = 'item level'  + this.props.level
        return(
            <div className={className}> 
                    {this.props.pageId ? <div>
                        <p> {this.props.id} </p>
                           <p> {this.props.characterId}</p></div>
                           : <Link to={`/movie/${this.props.characterId}`}>
                           <p> {this.props.id} </p>
                           <p className="characters"> Characters </p>
                    </Link>
                    }
            </div>
        )
    }
}
export default Item;