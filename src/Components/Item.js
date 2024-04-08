    import React, { Component } from 'react'
    
    export class Item extends Component {
      render() {
        return (
            <div className='item'>
                <img alt="ItemImg"src={"/img/" + this.props.item.img} />
                <h2>{this.props.item.name}</h2>
                <h2>{this.props.item.price}</h2>
            </div>
        )
      }
    }
    
    export default Item