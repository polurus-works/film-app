import React, { Component } from "react";
import Item from './Items.js';

class Carousel extends Component {
  constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: '',
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.props.items.length + i
            } else if (i >= this.props.items.length) {
                index = i % this.props.items.length
            }
            level = this.state.active - i;
 			items.push(<Item key={i} id={this.props.items[index]} pageId={this.props.pageId} characterId={this.props.characterId[index]}  level={level} />)
        }

        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.props.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.props.items.length,
            direction: 'right'
        })
    }
    
    render() {
    	return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}>&lt;</div>
                	{this.generateItems()}
                <div className="arrow arrow-right" onClick={this.rightClick}>&gt;</div>
            </div>
        )
    }
}
export default Carousel;