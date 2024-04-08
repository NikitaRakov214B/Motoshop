import React, { Component } from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'; 

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <Link to={`/item/${el.id}`} key={el.id} className='TovarButton'>
            <Item item={el}></Item>
          </Link>
        ))}
      </main>
    );
  }
}

export default Items