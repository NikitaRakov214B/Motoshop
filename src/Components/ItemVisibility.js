import React, { Component } from 'react'
import Items from "./Items";

export default class ItemVisibility extends Component {
  render() {
    return (
        <Items items={this.props.items}/> 
    )
  }
}
